import { useEffect, useRef, useState, createContext, useContext } from 'react';
import { gsap } from 'gsap';
import OptionPanel from './OptionPanel';

export default function LandingPageOptions({ display }) {
    const entry = useRef();

    useEffect(() => {
        const tlEntry = gsap.timeline();
        tlEntry.from(entry.current, {
            display: 'none',
            delay: 5
        })
        tlEntry.to(entry.current, {
            delay: 0.3,
            display: 'block',
            height: '100%',
            animationTimingFunction: 'ease-out',
        })
    })

    return (
        <div className="container-fluid entry-options" ref={entry}>
            <div className="container entry-options__entry-container">
                <OptionPanel
                    message="Continue to Scrutiny"
                    src="@/components/videos/scrutiny_video.mp4"
                />
                <OptionPanel
                    message="Continue to Scrutiny"
                    src="@/components/videos/scrutiny_video.mp4"
                />
            </div>
        </div>


    )
}
