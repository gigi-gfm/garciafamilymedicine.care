'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  FaUserMd, 
  FaNewspaper, 
  FaHospital, 
  FaHandshake, 
  FaQuestionCircle, 
  FaPhone, 
  FaPhoneAlt,
  FaArrowLeft,
  FaCalendarAlt,
  FaStethoscope
} from 'react-icons/fa';

import { nav_links, top_buttons } from './navdata';
import DropdownMenu from './dropdownmenu';
import ReclaimConfidenceFlyout from './reclaimconfidenceflyout';
import PillButton from './pillbutton';
import Calendar from '../calendar/calendar';
import { getEventsData } from '../calendar/calendar-events';
import { getRecentPosts } from '../blog/blog-data';
import styles from './header.module.css';
import mobileStyles from './mobile.module.css';
import pillStyles from './pillbutton.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFlyoutOpen, setIsFlyoutOpen] = useState(false);
  const [activeDrop, setActiveDrop] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const timerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Memoize events data to prevent duplicate processing
  const eventsData = useMemo(() => {
    return getEventsData();
  }, []); // Only calculate once when component mounts

  // Responsive check and menu collapse on resize
  useEffect(() => {
    function handleResize() {
      const mobile = window.innerWidth <= 1200;
      const wasMobile = isMobile;
      setIsMobile(mobile);
      
      // Close flyout when switching from mobile to desktop
      if (wasMobile && !mobile) {
        setIsFlyoutOpen(false);
      }
      
      // Collapse all menus on any resize
      setIsMenuOpen(false);
      setActiveDrop(null);
      setActiveSubmenu(null);
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMobile]);

  // Keyboard support
  useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        if (activeSubmenu) {
          setActiveSubmenu(null);
        } else {
          setIsMenuOpen(false);
          setActiveDrop(null);
          setIsFlyoutOpen(false);
        }
      }
    }
    
    if (isMenuOpen || isFlyoutOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isMenuOpen, isFlyoutOpen, activeSubmenu]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobile && isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobile, isMenuOpen]);

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  // Memoize mobile menu items to prevent recalculation
  const mobileMenuItems = useMemo(() => {
    const iconMap = {
      'Meet the Doctor': <FaUserMd />,
      'News & Events': <FaNewspaper />,
      'Patient Care Essentials': <FaHospital />,
      'Affiliates': <FaHandshake />,
      'FAQs': <FaQuestionCircle />,
      'Contact': <FaPhone />
    };

    return nav_links.map(link => {
      if (link.dropdown) {
        let allItems = [];
        let sections = [];
        
        // Special handling for News & Events - match desktop dropdown exactly
        if (link.label === 'News & Events') {
          allItems = [];
          
          // Add recent news posts
          try {
            const recentNews = getRecentPosts(3);
            const newsItems = recentNews.map((post) => ({
              label: post.title,
              href: `/news?post=${post.id}`,
              isNews: true,
              date: post.publishedDate,
              category: post.category
            }));
            allItems.push(...newsItems);
          } catch (error) {
            console.warn('Error loading recent news:', error);
          }
          
          // Add upcoming events exactly like desktop dropdown does
          if (eventsData?.upcomingEvents?.length) {
            const eventItems = eventsData.upcomingEvents.slice(0, 3).map((event) => {
              // Format date the same way as desktop (remove current year)
              const currentYear = new Date().getFullYear();
              const displayDate = event.date?.endsWith(`, ${currentYear}`)
                ? event.date.replace(`, ${currentYear}`, '')
                : event.date;
              
              return {
                label: event.label || event.title || event.name || 'Untitled Event',
                href: event.href || '#',
                isEvent: true,
                date: displayDate
              };
            });
            
            allItems.push(...eventItems);
          }
          
          // Add navigation buttons at the end
          allItems.push(
            { label: 'View All News', href: '/news', isButton: true },
            { label: 'Upcoming Events', href: '/events', isButton: true },
            { label: 'Past Events', href: '/events/past', isButton: true }
          );
        } else {
          // For Patient Care Essentials and other structured dropdowns
          if (link.dropdown.links) {
            sections = link.dropdown.links
              .filter(section => section !== null) // Filter out null values
              .map(section => ({
                title: section.title,
                items: section.items || []
              }));
            
            // Special reordering for Patient Care Essentials - Core Medical first
            if (link.label === 'Patient Care Essentials') {
              sections = sections.reverse();
            }
            
            // Also flatten for backward compatibility
            link.dropdown.links.forEach(section => {
              if (section && section.items) { // Check section is not null
                allItems.push(...section.items);
              }
            });
          }
        }

        return {
          label: link.label,
          icon: iconMap[link.label] || <FaHospital />,
          hasDropdown: true,
          items: allItems,
          sections: sections
        };
      } else {
        return {
          label: link.label,
          href: link.href,
          icon: iconMap[link.label] || <FaPhone />,
          subtitle: link.label === 'Contact' ? 'Get in Touch' : 
                   link.label === 'FAQs' ? 'Common Questions' : undefined
        };
      }
    }).concat([
      {
        label: 'Call Now',
        href: 'tel:816-427-5320',
        icon: <FaPhoneAlt />,
        subtitle: '816-427-5320'
      }
    ]);
  }, [eventsData]); // Only recalculate if eventsData changes

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
    setActiveDrop(null);
    setActiveSubmenu(null);
  };

  const handleMobileMenuItemClick = (item, index) => {
    if (item.hasDropdown) {
      setActiveSubmenu({
        ...item,
        index
      });
    } else {
      setIsMenuOpen(false);
      setActiveSubmenu(null);
    }
  };

  const handleBackToMainMenu = () => {
    setActiveSubmenu(null);
  };

  // Dropdown menu hover logic (desktop only)
  const onDropEnter = (label) => {
    if (!isMobile) {
      clearTimeout(timerRef.current);
      // Add delay before showing dropdown to prevent accidental triggers
      timerRef.current = setTimeout(() => {
        setActiveDrop(label);
      }, 200); // 200ms delay before showing
    }
  };
  
  const onDropLeave = () => {
    if (!isMobile) {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => setActiveDrop(null), 100); // Faster hide
    }
  };

  // Mobile pill click
  const handleMobilePillClick = () => {
    setIsFlyoutOpen((prev) => !prev);
    setIsMenuOpen(false);
    setActiveSubmenu(null);
  };

  // Close all menus when logo is clicked
  const handleLogoClick = () => {
    setIsMenuOpen(false);
    setActiveDrop(null);
    setIsFlyoutOpen(false);
    setActiveSubmenu(null);
  };

  // Desktop pill button click handler
  const handleDesktopPillClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFlyoutOpen((prev) => !prev);
    
    setIsMenuOpen(false);
    setActiveDrop(null);
    setActiveSubmenu(null);
  };

  return (
    <>
      <div className={`${styles.container} ${mobileStyles.container || ''}`}>
        {/* Top bar */}
        <div className={`${styles.topbar} ${mobileStyles.topbar || ''}`}>
          <div className={`${styles.topbuttons} ${mobileStyles.topbuttons || ''}`}>
            {top_buttons.map((btn) => (
              <button 
                key={btn.label} 
                className={`${styles.topbutton} ${mobileStyles.topbutton || ''}`}
                onClick={btn.href ? () => window.location.href = btn.href : undefined}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Navbar */}
        <nav className={`${styles.navbar} ${mobileStyles.navbar || ''}`} aria-label="main navigation">
          {/* Logo */}
          <Link
            href="/"
            className={`${styles.logo} ${mobileStyles.logo || ''}`}
            onClick={handleLogoClick}
          >
            <Image
              src="/images/logo.png"
              alt="Garcia Family Medicine logo"
              width={85}
              height={85}
              priority
            />
          </Link>

          {/* Mobile pill button */}
          {isMobile && (
            <div className={`${styles.mobilePillWrapper || ''} ${mobileStyles.mobilePillWrapper || ''}`}>
              <PillButton
                onClick={handleMobilePillClick}
                ariaExpanded={isFlyoutOpen}
                ariaControls="confidence-flyout"
              >
                Reclaim Your Confidence!
              </PillButton>
            </div>
          )}

          {/* Hamburger menu button */}
          <button
            className={`${styles.mobilenavtoggle || ''} ${mobileStyles.mobilenavtoggle || ''} ${
              isMenuOpen ? (mobileStyles.menuOpen || '') : ''
            }`}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            onClick={toggleMenu}
            type="button"
          >
            <span className={`${styles.hamburgerLine || ''} ${mobileStyles.hamburgerLine || ''}`}></span>
            <span className={`${styles.hamburgerLine || ''} ${mobileStyles.hamburgerLine || ''}`}></span>
            <span className={`${styles.hamburgerLine || ''} ${mobileStyles.hamburgerLine || ''}`}></span>
          </button>

          {/* Navigation links */}
          <ul className={`${styles.navlinks} ${mobileStyles.navlinks || ''} ${isMenuOpen ? (styles.active || '') : ''}`}>
            {nav_links.map((link, index) =>
              link.dropdown ? (
                <li key={link.label || `dropdown-${index}`}>
                  <DropdownMenu
                    link={link}
                    isActive={activeDrop === link.label}
                    onEnter={onDropEnter}
                    onLeave={onDropLeave}
                    setIsMenuOpen={setIsMenuOpen}
                    setActiveDrop={setActiveDrop}
                    timerRef={timerRef}
                    isMobile={isMobile}
                    eventsData={eventsData} // Pass events data to prevent duplicate processing
                  />
                </li>
              ) : (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className={`${styles.navlink} ${mobileStyles.navlink || ''}`}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setActiveDrop(null);
                      setActiveSubmenu(null);
                    }}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}

            {/* Desktop pill button */}
            {!isMobile && (
              <li className={pillStyles.navextra}>
                <div className={pillStyles.pillFlyoutWrapper}>
                  <PillButton
                    onClick={handleDesktopPillClick}
                    ariaExpanded={isFlyoutOpen}
                    ariaControls="confidence-flyout"
                  >
                    Reclaim Your Confidence!
                  </PillButton>
                </div>
              </li>
            )}
          </ul>
        </nav>

        {/* Desktop flyout */}
        {!isMobile && isFlyoutOpen && (
          <ReclaimConfidenceFlyout onClose={() => setIsFlyoutOpen(false)} />
        )}

        {/* Mobile menu overlay */}
        {isMobile && isMenuOpen && (
          <div 
            className={`${styles.mobileMenuOverlay || ''} ${mobileStyles.mobileMenuOverlay || ''}`}
            onClick={() => {
              if (activeSubmenu) {
                setActiveSubmenu(null);
              } else {
                setIsMenuOpen(false);
              }
            }}
            aria-hidden="true"
          />
        )}

        {/* Mobile Grid Menu */}
        {isMobile && (
          <div className={`${styles.mobileGridMenu || ''} ${mobileStyles.mobileGridMenu || ''} ${
            isMenuOpen ? (mobileStyles.active || '') : ''
          }`}>
            <button
              className={`${styles.mobileMenuClose || ''} ${mobileStyles.mobileMenuClose || ''}`}
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              ✕
            </button>
            
            {/* Conditional header based on submenu state */}
            <div className={`${styles.mobileMenuHeader || ''} ${mobileStyles.mobileMenuHeader || ''}`}>
              {activeSubmenu ? (
                <>
                  <button
                    className={`${mobileStyles.backButton || ''}`}
                    onClick={handleBackToMainMenu}
                    aria-label="Back to main menu"
                  >
                    <FaArrowLeft /> Back
                  </button>
                  <h2 className={`${styles.mobileMenuTitle || ''} ${mobileStyles.mobileMenuTitle || ''}`}>
                    {activeSubmenu.label}
                  </h2>
                  <p className={`${styles.mobileMenuSubtitle || ''} ${mobileStyles.mobileMenuSubtitle || ''}`}>
                    Choose an option below
                  </p>
                </>
              ) : (
                <>
                  <h2 className={`${styles.mobileMenuTitle || ''} ${mobileStyles.mobileMenuTitle || ''}`}>
                    Garcia Family Medicine
                  </h2>
                  <p className={`${styles.mobileMenuSubtitle || ''} ${mobileStyles.mobileMenuSubtitle || ''}`}>
                    Compassionate Healthcare with Love
                  </p>
                </>
              )}
            </div>

            {/* Conditional content based on submenu state */}
            {activeSubmenu ? (
              // Show submenu items
              <div className={`${styles.mobileMenuGrid || ''} ${mobileStyles.mobileSubmenuGrid || ''}`}>
                {/* Special handling for News & Events with calendar */}
                {activeSubmenu.label === 'News & Events' ? (
                  <>
                    <div className={`${mobileStyles.calendarSection || ''}`}>
                      <Calendar />
                    </div>
                    
                    {/* Show event items (not buttons) */}
                    {activeSubmenu.items.filter(item => item.isEvent).map((subItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={subItem.href}
                        className={`${styles.mobileMenuItem || ''} ${mobileStyles.mobileSubmenuItem || ''} ${mobileStyles.eventItem || ''}`}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setActiveSubmenu(null);
                        }}
                      >
                        <span className={`${styles.mobileMenuIcon || ''} ${mobileStyles.mobileMenuIcon || ''}`}>
                          <FaCalendarAlt />
                        </span>
                        <div className={`${mobileStyles.eventContent || ''}`}>
                          <span className={`${styles.mobileMenuLabel || ''} ${mobileStyles.mobileMenuLabel || ''}`}>
                            {subItem.label}
                          </span>
                          {subItem.date && (
                            <span className={`${styles.mobileMenuSubLabel || ''} ${mobileStyles.mobileMenuSubLabel || ''}`}>
                              {subItem.date}
                            </span>
                          )}
                        </div>
                      </Link>
                    ))}
                    
                    {/* Navigation buttons in 3 columns at bottom */}
                    <div className={`${mobileStyles.newsEventButtons || ''}`}>
                      {activeSubmenu.items.filter(item => item.isButton).map((buttonItem, buttonIndex) => (
                        <Link
                          key={buttonIndex}
                          href={buttonItem.href}
                          className={`${mobileStyles.newsEventButton || ''}`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveSubmenu(null);
                          }}
                        >
                          {buttonItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  // Handle other submenus (Patient Care Essentials, Affiliates)
                  <>
                    {activeSubmenu.sections && activeSubmenu.sections.length > 0 ? (
                      activeSubmenu.sections.map((section, sectionIndex) => (
                        <div key={sectionIndex} className={`${mobileStyles.submenuSection || ''}`}>
                          <h3 className={`${mobileStyles.sectionTitle || ''}`}>
                            {section.title}
                          </h3>
                          {section.items.map((subItem, subIndex) => (
                            <Link
                              key={`${sectionIndex}-${subIndex}`}
                              href={subItem.href}
                              className={`${styles.mobileMenuItem || ''} ${mobileStyles.mobileSubmenuItem || ''}`}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setActiveSubmenu(null);
                              }}
                            >
                              <span className={`${styles.mobileMenuIcon || ''} ${mobileStyles.mobileMenuIcon || ''}`}>
                                <FaStethoscope />
                              </span>
                              <span className={`${styles.mobileMenuLabel || ''} ${mobileStyles.mobileMenuLabel || ''}`}>
                                {subItem.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      ))
                    ) : (
                      activeSubmenu.items.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className={`${styles.mobileMenuItem || ''} ${mobileStyles.mobileSubmenuItem || ''}`}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setActiveSubmenu(null);
                          }}
                        >
                          <span className={`${styles.mobileMenuIcon || ''} ${mobileStyles.mobileMenuIcon || ''}`}>
                            <FaStethoscope />
                          </span>
                          <span className={`${styles.mobileMenuLabel || ''} ${mobileStyles.mobileMenuLabel || ''}`}>
                            {subItem.label}
                          </span>
                        </Link>
                      ))
                    )}
                  </>
                )}
              </div>
            ) : (
              // Show main menu items
              <div className={`${styles.mobileMenuGrid || ''} ${mobileStyles.mobileMenuGrid || ''}`}>
                {mobileMenuItems.map((item, index) => {
                  if (item.hasDropdown) {
                    return (
                      <button
                        key={index}
                        className={`${styles.mobileMenuItem || ''} ${mobileStyles.mobileMenuItem || ''} ${mobileStyles.hasDropdown || ''}`}
                        onClick={() => handleMobileMenuItemClick(item, index)}
                      >
                        <span className={`${styles.mobileMenuIcon || ''} ${mobileStyles.mobileMenuIcon || ''}`}>
                          {item.icon}
                        </span>
                        <span className={`${styles.mobileMenuLabel || ''} ${mobileStyles.mobileMenuLabel || ''}`}>
                          {item.label}
                        </span>
                        {item.subtitle && (
                          <span className={`${styles.mobileMenuSubLabel || ''} ${mobileStyles.mobileMenuSubLabel || ''}`}>
                            {item.subtitle}
                          </span>
                        )}
                        <span className={`${mobileStyles.dropdownIndicator || ''}`}>
                          →
                        </span>
                      </button>
                    );
                  } else {
                    return (
                      <Link
                        key={index}
                        href={item.href}
                        className={`${styles.mobileMenuItem || ''} ${mobileStyles.mobileMenuItem || ''}`}
                        onClick={() => handleMobileMenuItemClick(item, index)}
                      >
                        <span className={`${styles.mobileMenuIcon || ''} ${mobileStyles.mobileMenuIcon || ''}`}>
                          {item.icon}
                        </span>
                        <span className={`${styles.mobileMenuLabel || ''} ${mobileStyles.mobileMenuLabel || ''}`}>
                          {item.label}
                        </span>
                        {item.subtitle && (
                          <span className={`${styles.mobileMenuSubLabel || ''} ${mobileStyles.mobileMenuSubLabel || ''}`}>
                            {item.subtitle}
                          </span>
                        )}
                      </Link>
                    );
                  }
                })}
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile flyout */}
      {isFlyoutOpen && isMobile && (
        <ReclaimConfidenceFlyout onClose={() => setIsFlyoutOpen(false)} />
      )}

      {/* Spacer for fixed header */}
      <div className={`${styles.offset} ${mobileStyles.offset || ''}`} aria-hidden="true" />
    </>
  );
}
