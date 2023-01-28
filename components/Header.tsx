import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import logo from '@/public/scutiny-2-0-logo-complete_v2.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faHeadphonesSimple, faHeadphones } from '@fortawesome/free-solid-svg-icons';
import { Theme } from '@/models/Theme.model';
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';
import styled from 'styled-components';
import { DARK_THEME } from '@/themes/Dark.theme';

export default function Header() {
  const { theme, setTheme, toggleTheme } = useTheme();


  const createStyles = (theme: Theme) => {
    const social_icons = styled.a`
        {
            color: ${theme.id === "dark" ? theme.color.primary : theme.color.accents};
            box-shadow: 0px 0px 2px ${theme.id === "dark" ? theme.color.secondary : theme.color.misc};
            background: ${theme.id === "dark" && theme.color.secondary}
        }
        &:hover {
          box-shadow: 0px 0px 5px  ${theme.id === "dark" ? theme.color.secondary : theme.color.accents} !important;
        }
        `
    const Header = styled.header`
    {
      background: ${theme.color.primary};
    }
      
    `
    return {
      social_icons,
      Header
    }

  }

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
  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    return () =>
      window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  const Styles = useThemeAwareObject(createStyles);

  return (
    <Styles.Header className={'container-fluid ' + hClass}>
      <div className={`${hClass}__home-header`}>
        <div className={`${hClass}__home-header__social-icons`}>
          <div className="icons">
            <Styles.social_icons className="social social-fb" href="#"><FontAwesomeIcon icon={faFacebookF} /></Styles.social_icons>
            <Styles.social_icons className="social social-ig" href="#"><FontAwesomeIcon icon={faInstagram} /></Styles.social_icons>
            <Styles.social_icons className="social social-tw" href="#"><FontAwesomeIcon icon={faTwitter} /></Styles.social_icons>
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
              <Image src={logo} alt='logo' />
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

    </Styles.Header>
  )
}