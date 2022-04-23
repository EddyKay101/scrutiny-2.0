import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function OptionPanel({ src, message }) {
    const option = useRef();
    const optionMessage = useRef();
    const video = useRef();
    const tlOption = gsap.timeline();
    const mouseOver = async (e) => {
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
    const mouseOut = async (e) => {
        video.current.autoplay = false;
        video.current.load();
        await tlOption.to(option.current, {
            boxShadow: 'none',
            animationTimingFunction: 'ease-out',
            overwrite: true
        });
        await tlOption.to(optionMessage.current, {
            opacity: 0.3,
            animationTimingFunction: 'ease-out',
            overwrite: true
        });
    }


    return (
        <div className="container opt col-md-3 col-sm-12 col-xs-12">
            <div className="option " ref={option} onMouseOver={mouseOver} onMouseOut={mouseOut}>
                <div className="option__option-message" ref={optionMessage}>
                    <h3 className="option__message">{message}</h3>
                </div>
                <div className="option__option-content">
                    <video className="option__video" playsInline muted loop ref={video}>
                        <source src={src} type="video/mp4" />
                    </video>
                </div>
            </div>

        </div>
    )
}
