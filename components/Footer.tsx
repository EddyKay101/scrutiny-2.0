import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import lightLogo from '@/public/scutiny-2-0-logo-complete_v2.svg';
import darkLogo from '@/public/scutiny-2-0-logo-complete_dark.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faSearchengin } from '@fortawesome/free-brands-svg-icons';
import { faBars, faHeadphonesSimple, faHeadphones, faTimes } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { Theme } from '@/models/Theme.model';
import { useTheme } from '@/contexts/ThemeContext';
import { useThemeAwareObject } from '@/hooks/ThemeAwareObject.hook';
import { DARK_THEME } from '@/themes/Dark.theme';
import { LIGHT_THEME } from '@/themes/Light.theme';

export default function Footer() {

  const componentStyles = (theme: Theme) => {
    const footerContainerStyle = {
      background: `${theme.color.accents}`
    }
    const subsriptionBox = {
      background: `${theme.color.primary}`,
      color: `${theme.color.secondary}`
    }

    const subcribeBtn = {
      background: `${theme.color.misc}`,
      color: 'white'
    }


    return {
      footerContainerStyle,
      subsriptionBox,
      subcribeBtn
    }
  }
  const Styles = useThemeAwareObject(componentStyles);
  return (
    <div className="container-fluid footer-container" style={Styles.footerContainerStyle}>
      <div className="row">
        <div className="col-md-9 col-12 mx-auto">
          {/* <div className="container"> */}
          <div className="footer-container__content mt-5">
            <div className="row">
              <div style={{ background: 'white' }} className="col-md-8 col-12">
                hjvngh
              </div>
              <div className="col-md-4 col-12 d-flex">
                <input style={Styles.subsriptionBox} type="email" name="" id="" className="footer-container__subscription-box" />
                <div className="footer-container__mail-btn-container">
                  <button className="footer-container__mail-btn-container--btn">
                    <FontAwesomeIcon
                      style={Styles.subcribeBtn}
                      className="footer-container__mail-btn-container--icon" icon={faEnvelope} />
                  </button>
                </div>
              </div>
            </div>
            <div style={{ color: 'white' }} className="row">
              <div className="col-md-6">a</div>
              <div className="col-md-6">b</div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}