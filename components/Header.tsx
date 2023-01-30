import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import lightLogo from '@/public/scutiny-2-0-logo-complete_v2.svg';
import darkLogo from '@/public/scutiny-2-0-logo-complete_dark.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faHeadphonesSimple, faHeadphones, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '@/models/Theme.model';
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';
import { DARK_THEME } from '@/themes/Dark.theme';
import { LIGHT_THEME } from '@/themes/Light.theme';
import type * as CSS from 'csstype';
import styled from 'styled-components'
export default function Header() {
  function useHover() {
    const [isSocialHovered, setSocialHover] = useState(null);

    const onMouseEnter = (id) => setSocialHover(id);
    const onMouseLeave = () => setSocialHover(null);

    return { isSocialHovered, onMouseEnter, onMouseLeave };
  }
  const [isChecked, setChecked] = useState(false);
  function useBoxCheck() {


    const handleChange = () => {

      if (typeof window !== 'undefined') {
        const d = localStorage.getItem('theme')
        if (d === "dark") {
          localStorage.setItem('theme', 'light')
          setTheme(LIGHT_THEME)
          setChecked(false);
        } else {
          localStorage.setItem('theme', 'dark')
          setTheme(DARK_THEME)

          setChecked(true);
        }

      }

    }


    return { isChecked, handleChange };
  }

  const listenScrollEvent = () => {
    if (window.scrollY > 30) {
      setClass("reduced");
      setImgDiv("logo-removed");
    }
    else {
      setClass("header");
      setImgDiv("logo");
    }
  }


  const [isHovered, setHover] = useState(false);
  const [hClass, setClass] = useState("header");
  const [imgDiv, setImgDiv] = useState("logo");
  const [mobileMenuVisible, setVisible] = useState(false);

  const menuItems = useRef<HTMLDivElement>();

  const { theme, setTheme, toggleTheme } = useTheme();
  const { isSocialHovered, onMouseEnter, onMouseLeave } = useHover();
  const { handleChange } = useBoxCheck();

  const handleMenuVisible = () => {
    setVisible(true);
  }

  const hex2rgba = (hex, alpha = 0.) => {
    const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };


  const componentStyles = (theme: Theme) => {
    const socialIconStyes = {
      color: `${theme.id === "dark" ? theme.color.secondary : theme.color.accents}`,
      background: `${theme.id === "dark" ? theme.color.tertiary : theme.color.primary}`
    }
    const headerStyle =
    {
      background: `${theme.color.primary}`
    }
    const navLinkStyle =
    {
      color: `${theme.color.tertiary}`
    }

    const utilityLinkStyle = {
      color: theme.id === "dark" ? theme.color.tertiary : theme.color.accents
    }

    const toggleStyle = {
      background: 'red'
    }

    const mobileMenuStyle = {
      background: theme.id === "dark" ? theme.color.tertiary : theme.color.accents
    }

    return {
      socialIconStyes,
      headerStyle,
      navLinkStyle,
      utilityLinkStyle,
      toggleStyle,
      mobileMenuStyle
    }
  }



  useEffect(() => {
    theme.id === 'dark' ? setChecked(true) : setChecked(false)
  }, [theme]);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const Styles = useThemeAwareObject(componentStyles);


  return (
    <>
      <div className="mainHeaderDiv">
        <header style={Styles.headerStyle} className={'container-fluid ' + hClass}>
          <div className={`${hClass}__home-header`}>
            <div className={`${hClass}__home-header__social-icons`}>
              <div className="icons">
                <a style={{ ...Styles.socialIconStyes, boxShadow: isSocialHovered === 'link1' ? `0px 0px 10px ${theme.id === "dark" ? theme.color.accents : theme.color.accents}` : `0px 0px 2px ${theme.id === "dark" ? theme.color.accents : theme.color.misc}` }} className="social social-fb" href="#"><FontAwesomeIcon icon={faFacebookF} onMouseEnter={() => onMouseEnter('link1')}
                  onMouseLeave={onMouseLeave} /></a>
                <a style={{ ...Styles.socialIconStyes, boxShadow: isSocialHovered === 'link2' ? `0px 0px 10px ${theme.id === "dark" ? theme.color.accents : theme.color.accents}` : `0px 0px 2px ${theme.id === "dark" ? theme.color.accents : theme.color.misc}` }} className="social social-ig" href="#"><FontAwesomeIcon icon={faInstagram} onMouseEnter={() => onMouseEnter('link2')}
                  onMouseLeave={onMouseLeave} /></a>
                <a style={{ ...Styles.socialIconStyes, boxShadow: isSocialHovered === 'link3' ? `0px 0px 10px ${theme.id === "dark" ? theme.color.accents : theme.color.accents}` : `0px 0px 2px ${theme.id === "dark" ? theme.color.accents : theme.color.misc}` }} className="social social-tw" href="#"><FontAwesomeIcon icon={faTwitter} onMouseEnter={() => onMouseEnter('link3')}
                  onMouseLeave={onMouseLeave} /></a>

              </div>
            </div>
            <div className={`${hClass}__home-header__utility-icons`}>
              <div className="icons">

                <a style={{
                  ...Styles.utilityLinkStyle,
                  color: isSocialHovered === 'utility-link2' ? `${theme.id === 'light' ? theme.color.tertiary : theme.color.secondary}` : `${theme.id === 'light' ? theme.color.accents : theme.color.tertiary}`,
                  boxShadow: isSocialHovered === 'utility-link2' && `${theme.id === 'light' ? `2px 0px 0px ${theme.color.accents}` : `2px 0px 0px ${theme.color.tertiary}`}`
                }}
                  className="utility utility-phones" href="#" onMouseEnter={() => onMouseEnter('utility-link2')}
                  onMouseLeave={onMouseLeave}>
                  <FontAwesomeIcon icon={faSearchengin} /></a>

                <a style={{
                  ...Styles.utilityLinkStyle,
                  color: isSocialHovered === 'utility-link3' ? `${theme.id === 'light' ? theme.color.tertiary : theme.color.secondary}` : `${theme.id === 'light' ? theme.color.accents : theme.color.tertiary}`,
                  boxShadow: isSocialHovered === 'utility-link3' && `${theme.id === 'light' ? `2px 0px 0px ${theme.color.accents}` : `2px 0px 0px ${theme.color.tertiary}`}`
                }}
                  onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className="utility utility-phones" href="#" onMouseEnter={() => onMouseEnter('utility-link3')}
                  onMouseLeave={onMouseLeave}>
                  <FontAwesomeIcon icon={isHovered ? faHeadphones : faHeadphonesSimple} /></a>
              </div>
            </div>

          </div>
          <div className={`${hClass}__nav-header`}>
            <div className={`${imgDiv}`}>
              <Link href='/' passHref={true}>
                <a>
                  <Image src={theme.id === 'dark' ? darkLogo : lightLogo} alt='logo' />

                </a>

              </Link>
            </div>

            <nav className={`${hClass}__nav`}>
              <ul>
                <li>
                  <Link href='/news' passHref={true}>
                    <a style={{ ...Styles.navLinkStyle, color: isSocialHovered === 'nav-link1' ? `${theme.id === 'light' ? theme.color.tertiary : theme.color.secondary}` : `${theme.id === 'light' ? theme.color.accents : theme.color.tertiary}` }} onMouseEnter={() => onMouseEnter('nav-link1')} onMouseLeave={onMouseLeave}>
                      News
                    </a>

                  </Link>
                </li>
                <li>
                  <Link href='/reviews' passHref={true}>
                    <a style={{ ...Styles.navLinkStyle, color: isSocialHovered === 'nav-link2' ? `${theme.id === 'light' ? theme.color.tertiary : theme.color.secondary}` : `${theme.id === 'light' ? theme.color.accents : theme.color.tertiary}` }} onMouseEnter={() => onMouseEnter('nav-link2')} onMouseLeave={onMouseLeave}>
                      Reviews
                    </a>

                  </Link>
                </li>
                <li>
                  <Link href='/new-in' passHref={true}>
                    <a style={{ ...Styles.navLinkStyle, color: isSocialHovered === 'nav-link3' ? `${theme.id === "light" ? theme.color.tertiary : theme.color.secondary}` : `${theme.id === 'light' ? theme.color.accents : theme.color.tertiary}` }} onMouseEnter={() => onMouseEnter('nav-link3')} onMouseLeave={onMouseLeave}>
                      New In
                    </a>

                  </Link>
                </li>
                <li>
                  <Link href='/playlists' passHref={true}>
                    <a style={{ ...Styles.navLinkStyle, color: isSocialHovered === 'nav-link4' ? `${theme.id === "light" ? theme.color.tertiary : theme.color.secondary}` : `${theme.id === 'light' ? theme.color.accents : theme.color.tertiary}` }} onMouseEnter={() => onMouseEnter('nav-link4')} onMouseLeave={onMouseLeave}>
                      Playlists
                    </a>

                  </Link>
                </li>
                <li>
                  <Link href='/scrutiny-tv' passHref={true}>
                    <a style={{ ...Styles.navLinkStyle, color: isSocialHovered === 'nav-link5' ? `${theme.id === "light" ? theme.color.tertiary : theme.color.secondary}` : `${theme.id === 'light' ? theme.color.accents : theme.color.tertiary}` }} onMouseEnter={() => onMouseEnter('nav-link5')} onMouseLeave={onMouseLeave}>
                      Scrutiny Tv
                    </a>

                  </Link>
                </li>
                <li>
                  <Link href='/merch' passHref={true}>
                    <a style={{ ...Styles.navLinkStyle, color: isSocialHovered === 'nav-link6' ? `${theme.id === "light" ? theme.color.tertiary : theme.color.secondary}` : `${theme.id === 'light' ? theme.color.accents : theme.color.tertiary}` }} onMouseEnter={() => onMouseEnter('nav-link6')} onMouseLeave={onMouseLeave}>
                      Merch
                    </a>

                  </Link>
                </li>


                <li>
                  <div style={isChecked ? { background: theme.color.tertiary } : { background: theme.color.misc }} className="box">
                    <input id="checkbox" type="checkbox" checked={theme.id === 'dark' && true} onChange={handleChange} data-toggle="toggle" />
                    <label style={isChecked ? { background: theme.color.secondary } : { background: theme.color.accents }} className="label" htmlFor="checkbox"></label>
                  </div>
                </li>

              </ul>
            </nav>
          </div>

        </header>

        <header style={Styles.headerStyle} className='container mobile-header'>



          <div className="mobile-header__mobile-logo">
            <Link href='/' passHref={true}>
              <a>
                <Image src={theme.id === 'dark' ? darkLogo : lightLogo} alt='logo' />
              </a>

            </Link>
          </div>
          <div className="mobile-header__icons">
            <div className='icon-holder'>
              {
                !mobileMenuVisible &&
                <a style={{
                  ...Styles.utilityLinkStyle,
                  color: isSocialHovered === 'utility-link1' ? `${theme.id === 'light' ? theme.color.tertiary : theme.color.secondary}` : `${theme.id === 'light' ? theme.color.accents : theme.color.tertiary}`
                }}>
                  <FontAwesomeIcon icon={faBars} onClick={handleMenuVisible} /></a>
              }

            </div>

          </div>





        </header>


      </div>
      {
        mobileMenuVisible &&
        <div className="menu-items" style={{
          ...Styles.mobileMenuStyle,
          animation: 'slide-in-right 0.1s forwards'
        }}>
          <div className="menu-items__close">
            <a style={{
              ...Styles.utilityLinkStyle,

              color: isSocialHovered === 'nav-link1' ? `${theme.id === 'light' ? theme.color.tertiary : theme.color.secondary}` : `${theme.id === 'light' ? theme.color.primary : theme.color.secondary}`
            }}>
              <FontAwesomeIcon icon={faTimes} onClick={() => setVisible(false)} /></a>
          </div>
          <ul>
            <li>
              <Link href='/news' passHref={true}>
                <a style={{ ...Styles.navLinkStyle, color: theme.id === 'light' ? theme.color.primary : theme.color.secondary }}>
                  News
                </a>

              </Link>
            </li>
            <li>
              <Link href='/reviews' passHref={true}>
                <a style={{ ...Styles.navLinkStyle, color: theme.id === 'light' ? theme.color.primary : theme.color.secondary }}>
                  Reviews
                </a>

              </Link>
            </li>
            <li>
              <Link href='/new-in' passHref={true}>
                <a style={{ ...Styles.navLinkStyle, color: theme.id === 'light' ? theme.color.primary : theme.color.secondary }}>
                  New In
                </a>

              </Link>
            </li>
            <li>
              <Link href='/playlists' passHref={true}>
                <a style={{ ...Styles.navLinkStyle, color: theme.id === 'light' ? theme.color.primary : theme.color.secondary }}>
                  Playlists
                </a>

              </Link>
            </li>
            <li>
              <Link href='/scrutiny-tv' passHref={true}>
                <a style={{ ...Styles.navLinkStyle, color: theme.id === 'light' ? theme.color.primary : theme.color.secondary }}>
                  Scrutiny Tv
                </a>

              </Link>
            </li>
            <li>
              <Link href='/merch' passHref={true}>
                <a style={{ ...Styles.navLinkStyle, color: theme.id === 'light' ? theme.color.primary : theme.color.secondary }}>
                  Merch
                </a>

              </Link>
            </li>

            <li>
              <div style={isChecked ? { background: theme.color.primary } : { background: theme.color.misc }} className="box">
                <input id="checkbox" type="checkbox" checked={theme.id === 'dark' && true} onChange={handleChange} data-toggle="toggle" />
                <label style={isChecked ? { background: theme.color.misc } : { background: theme.color.primary }} className="label" htmlFor="checkbox"></label>
              </div>
            </li>
          </ul>
        </div>
      }
    </>
  )
}