import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';

interface Panel {
    src: string,
    message: string,
    link: string
}
export default function OptionPanel({ src, message, link }: Panel) {
    const option = useRef();
    const optionMessage = useRef();
    const video = useRef<HTMLVideoElement>();
    const tlOption = gsap.timeline();
    const mouseOver = async () => {
        video.current.autoplay = true;
        video.current.load();
        await tlOption.to(option.current, {
            boxShadow: '0 10px 20px #23274B',
            animationTimingFunction: 'ease-in'
        });
        await tlOption.to(optionMessage.current, {
            opacity: 1,
            animationTimingFunction: 'ease-in'
        });
    }
    const mouseOut = async () => {
        video.current.autoplay = false;
        video.current.load();
        await tlOption.to(option.current, {
            boxShadow: '0 5px 10px rgba(0, 0, 0, .2)',
            animationTimingFunction: 'ease-out',
            overwrite: true
        });
        await tlOption.to(optionMessage.current, {
            opacity: 0.3,
            animationTimingFunction: 'ease-out',
            overwrite: true
        });
    }

    const panelClick = () => {

        tlOption.to(option.current, {
            boxShadow: '0 5px 10px rgba(0, 0, 0, .2)',
            transform: 'translateY(-1px)',
            animationTimingFunction: 'ease-in'
        });
        const now = new Date()

        localStorage.setItem('state', 'active');

    }


    return (
        <div className="container opt col-lg-4 col-md-5 col-sm-6 col-xs-12">
            <Link href={link} passHref={true}>
                <a>
                    <div className="option" ref={option} onMouseOver={mouseOver} onMouseOut={mouseOut} onClick={panelClick}>
                        <div className="option__option-message" ref={optionMessage}>
                            <h3 className="option__message">{message}</h3>
                        </div>
                        <div className="option__option-content">
                            <video className="option__video" playsInline muted loop ref={video}>
                                <source src={src} type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </a>

            </Link>
        </div>
    )
}
