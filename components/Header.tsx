import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import lightLogo from '@/public/scutiny-2-0-logo-complete_v2.svg';
import darkLogo from '@/public/scutiny-2-0-logo-complete_dark.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faHeadphonesSimple, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '@/models/Theme.model';
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';
import { DARK_THEME } from '@/themes/Dark.theme';
import type * as CSS from 'csstype';

export default function Header() {
  function useHover() {
    const [isSocialHovered, setSocialHover] = useState(null);

    const onMouseEnter = (id) => setSocialHover(id);
    const onMouseLeave = () => setSocialHover(null);

    return { isSocialHovered, onMouseEnter, onMouseLeave };
  }
  const { theme, setTheme, toggleTheme } = useTheme();
  const { isSocialHovered, onMouseEnter, onMouseLeave } = useHover();

  const [isHovered, setHover] = useState(false);
  const [hClass, setClass] = useState("header");
  const [imgDiv, setImgDiv] = useState("logo");
  const headerReduced = useRef<HTMLDivElement>();
  const image: any = useRef<HTMLDivElement>()
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
  const componentStyles = (theme: Theme) => {
    const socialIconStyes: CSS.Properties = {
      color: `${theme.id === "dark" ? theme.color.primary : theme.color.accents}`,
      background: `${theme.id === "dark" && theme.color.secondary}`
    }


    const headerStyle: CSS.Properties =
    {
      background: `${theme.color.primary}`
    }
    return {
      socialIconStyes,
      headerStyle
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const Styles = useThemeAwareObject(componentStyles);

  const svgStyles = {
    st0: {
      fill: 'none',
      stroke: '#3C3C3B',
      // strokeWidth: 14,
      // strokeLinecap: 'round',
      // strokeMiterlimit: 10
    },
    st1: {
      fill: '#22264B'
    },
    st2: {
      fill: '#3C3C3B'
    },
    st3: {
      fill: '#E7BB6A'
    },
    st4: {
      fill: '#23274B'
    }
  }
  return (
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
            <a className="utility utility-bars" href="#"><FontAwesomeIcon icon={faBars} /></a>
            <a className="utility utility-search" href="#"><FontAwesomeIcon icon={faSearchengin} /></a>
            <a onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)} className="utility utility-phones" href="#"><FontAwesomeIcon icon={isHovered ? faHeadphones : faHeadphonesSimple} /></a>
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
              <Link href='news' passHref={true}>
                <a>
                  News
                </a>

              </Link>
            </li>
            <li>
              <Link href='reviews' passHref={true}>
                <a>
                  Reviews
                </a>

              </Link>
            </li>
            <li>
              <Link href='new-in' passHref={true}>
                <a>
                  New In
                </a>

              </Link>
            </li>
            <li>
              <Link href='playlist' passHref={true}>
                <a>
                  Playlists
                </a>

              </Link>
            </li>
            <li>
              <Link href='video' passHref={true}>
                <a>
                  Video
                </a>

              </Link>
            </li>
            <li>
              <Link href='merch' passHref={true}>
                <a>
                  Merch
                </a>

              </Link>
            </li>
          </ul>
        </nav>
      </div>

    </header>
  )
}