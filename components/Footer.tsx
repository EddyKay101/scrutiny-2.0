import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import lightLogo from '@/public/scutiny-2-0-logo-complete_v2.svg';
import darkLogo from '@/public/scutiny-2-0-logo-complete_dark.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faSearchengin, faYoutube, faTwitch } from '@fortawesome/free-brands-svg-icons';
import { faBars, faHeadphonesSimple, faHeadphones, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Theme } from '@/models/Theme.model';
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';
import { DARK_THEME } from '@/themes/Dark.theme';
import { LIGHT_THEME } from '@/themes/Light.theme';

export default function Footer() {
  const { theme } = useTheme();
  const componentStyles = (theme: Theme) => {
    const footerContainerStyle = {
      background: `${theme.color.background}`
    }
    const subsriptionBox = {
      background: theme.id === "dark" ? theme.color.misc : theme.color.accents,
      color: "#ffffff"
    }

    const subcribeBtn = {
      // background: theme.id === "dark" ? "#9B9898" : theme.color.primary,
      color: theme.id === "light" ? theme.color.accents : theme.color.primary
    }

    const slogan = {
      color: theme.id === "light" ? theme.color.accents : theme.color.secondary
    }

    const divider = {
      borderBottom: `1px solid ${theme.id === "dark" ? theme.color.tertiary : theme.color.accents}`
    }


    return {
      footerContainerStyle,
      subsriptionBox,
      subcribeBtn,
      slogan,
      divider
    }

  }
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const Styles = useThemeAwareObject(componentStyles);
  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, [currentYear]);
  return (
    <div className="container-fluid footer-container" style={Styles.footerContainerStyle}>
      <div className="container">
        <div className="row">
          <div className="col-12 mx-auto">
            <div className="footer-container__content mt-5">
              <div className="row">
                <div className="col-md-9 col-12 d-flex">
                  <div className="logo">
                    <Link href='/' passHref={true}>
                      <a>
                        <Image src={theme.id === 'dark' ? darkLogo : lightLogo} alt='logo' />

                      </a>

                    </Link>

                  </div>
                  <div className="slogan-holder">
                    <p style={{ ...Styles.slogan }}>What&apos;s your thoughts on this?</p>

                  </div>

                </div>
                <div className="col-md-3 col-12 position-relative">
                  <div className="input-holder  d-flex">
                    <input style={Styles.subsriptionBox} type="email" name="" id="" className="footer-container__subscription-box" />
                    <div className="footer-container__mail-btn-container">
                      <button className="footer-container__mail-btn-container--btn">
                        <FontAwesomeIcon
                          style={Styles.subcribeBtn}
                          className="footer-container__mail-btn-container--icon" icon={faEnvelope} fixedWidth size="2x" />
                      </button>
                    </div>
                  </div>

                </div>
              </div>
              <div style={{ color: theme.id === "primary" ? theme.color.accents : theme.color.secondary }} className="row mt-5">

                <div className="col-md-3 text-start">
                  <h4>Header</h4>
                  <p className='fs-6'>link</p>
                  <p className='fs-6'>link</p>
                  <p className='fs-6'>link</p>
                </div>
                <div className="col-md-3 text-start">
                  <h4>Header</h4>
                  <p className='fs-6'>link</p>
                  <p className='fs-6'>link</p>
                  <p className='fs-6'>link</p>
                </div>
                <div className="col-md-3 text-start">
                  <h4>Header</h4>
                  <p className='fs-6'>link</p>
                  <p className='fs-6'>link</p>
                  <p className='fs-6'>link</p>
                </div>
                <div className="col-md-3 ">
                  <h4>Header</h4>
                  <p className='fs-6'>link</p>
                  <p className='fs-6'>link</p>
                  <p className='fs-6'>link</p>
                </div>

              </div>
              <div style={{ color: theme.id === "primary" ? theme.color.accents : theme.color.secondary }} className="row mt-5">

                <div className="col-md-3 text-start">
                  <h4>Header</h4>
                  <p className='fs-6'>link</p>
                  <p className='fs-6'>link</p>
                  <p className='fs-6'>link</p>
                </div>
                <div className="col-md-3 text-start">
                  <h4>Header</h4>
                  <p className='fs-6'>link</p>
                  <p className='fs-6'>link</p>
                  <p className='fs-6'>link</p>
                </div>
                <div className="col-md-3 text-start">
                  <h4>Header</h4>
                  <p className='fs-6'>link</p>
                  <p className='fs-6'>link</p>
                  <p className='fs-6'>link</p>
                </div>
                <div className="col-md-3 ">
                  <h4>Header</h4>
                  <p className='fs-6'>link</p>
                  <p className='fs-6'>link</p>
                  <p className='fs-6'>link</p>
                </div>

              </div>

              <div className="row mt-5">
                <div className="col-md-2 d-flex justify-content-between mb-3">
                  <div className="icon-holder ">
                    <FontAwesomeIcon
                      icon={faFacebookF} className="icon-holder-icon" style={{ ...Styles.slogan }} />
                  </div>
                  <div className="icon-holder">
                    <FontAwesomeIcon
                      icon={faTwitter} className="icon-holder-icon" style={{ ...Styles.slogan }} />
                  </div>
                  <div className="icon-holder">
                    <FontAwesomeIcon
                      icon={faYoutube} className="icon-holder-icon" style={{ ...Styles.slogan }} />
                  </div>
                  <div className="icon-holder">
                    <FontAwesomeIcon
                      icon={faInstagram} className="icon-holder-icon" style={{ ...Styles.slogan }} />
                  </div>
                  <div className="icon-holder">
                    <FontAwesomeIcon
                      icon={faTwitch} className="icon-holder-icon" style={{ ...Styles.slogan }} />
                  </div>


                </div>
                <div style={{ ...Styles.divider }} className="col-12 divider">

                </div>

                <div className="copyright col-12 text-md-end mt-3">
                  <p style={{ ...Styles.slogan, fontSize: "16px", fontWeight: "bold" }}>Copyright © {currentYear} Scrutiny</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}