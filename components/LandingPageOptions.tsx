import { useEffect, useRef } from 'react';
import { gsap, Expo } from 'gsap';
import OptionPanel from './OptionPanel';

export default function LandingPageOptions() {
    const entry = useRef();

    useEffect(() => {
        const tlEntry = gsap.timeline();
        tlEntry.from(entry.current, {
            display: 'none',
            delay: 5
        })
        tlEntry.to(entry.current, {
            display: 'block',
            height: '100%',
            ease: Expo.easeOut
        }, '+=0.2')
    })

    return (
        <div className="container entry-options" ref={entry}>
            <div className="row entry-options__entry-container justify-content-around">

                <OptionPanel
                    message="Continue to Scrutiny"
                    src="/videos/scrutiny_video.mp4"
                    link="/home"
                />
                <OptionPanel
                    message="Music Player"
                    src="/videos/musicplayerscreen.mp4"
                    link="/"
                />

            </div>

        </div>


    )
}
