import { useEffect, useState, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
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

export default function Footer() {

  const componentStyles = (theme: Theme) => {
    const footerContainerStyle = {
      background: `${theme.color.accents}`
    }


    return {
      footerContainerStyle
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
              <div className="col-md-6 col-12">

              </div>
              <div className="col-md-6 col-12">

              </div>
            </div>
            <div className="row">

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}