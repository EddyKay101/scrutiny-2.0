import { useEffect, useRef, useState } from 'react';
import { gsap, Back, Elastic } from 'gsap';

const LandingPageImage = () => {
    const waveLine = useRef();
    const mainSVG = useRef();
    const wire = useRef();
    const scrutText = useRef();
    const leftEar = useRef();
    const rightEar = useRef();
    const leftEarBar = useRef();
    const leftEarBarTwo = useRef();
    const rightEarBar = useRef();
    const rightEarBarTwo = useRef();
    const [isLoaded, setLoaded] = useState(false);

    useEffect(() => {
        setLoaded(true)
        if (isLoaded) {
            let numberOfWavePoints = 60;
            const tlLeftEar = gsap.timeline();
            const tlRightEar = gsap.timeline();
            const tlLeftEarBar = gsap.timeline();
            const tlRightEarBar = gsap.timeline();
            const tlLeftEarBarTwo = gsap.timeline();
            const tlRightEarBarTwo = gsap.timeline();
            const tlWire = gsap.timeline();
            const tlScrutText = gsap.timeline();
            const tlContainer = gsap.timeline();

            gsap.fromTo(mainSVG.current, { opacity: 0, scale: 0 }, { opacity: 1, duration: .6, scale: 1 });
            tlWire.from(wire.current, 1, {
                opacity: 1,
                delay: 1,
                fill: '#23274B'
            });
            tlWire.to(wire.current, 1, {
                opacity: 1,
                delay: 1,
                fill: '#E7BB6A'
            });
            tlScrutText.from(scrutText.current, 1, {
                opacity: 1,
                delay: 1,
            });
            tlScrutText.to(scrutText.current, 1, {
                opacity: 1,
                delay: 1,
                fill: '#E7BB6A'
            });

            tlLeftEar.from(leftEar.current, 1, {
                scaleX: 1,
                scaleY: 1.1,
                ease: Elastic.easeOut,
                repeat: -1,
                repeatDelay: 0.1
            });
            tlRightEar.from(rightEar.current, 1, {
                scaleX: 1,
                scaleY: 1.1,
                ease: Elastic.easeOut,
                repeat: -1,
                repeatDelay: 0.1
            });

            tlLeftEarBar.from(leftEarBar.current, 1, {
                scaleX: 1,
                scaleY: 1.1,
                ease: Elastic.easeOut,
                repeat: -1,
                repeatDelay: 0.1
            });
            tlRightEarBar.from(rightEarBar.current, 1, {
                scaleX: 1,
                scaleY: 1.1,
                ease: Elastic.easeOut,
                repeat: -1,
                repeatDelay: 0.1
            });
            tlLeftEarBarTwo.from(leftEarBarTwo.current, 1, {
                scaleX: 1,
                scaleY: 1.1,
                ease: Elastic.easeOut,
                repeat: -1,
                repeatDelay: 0.1
            });
            tlRightEarBarTwo.from(rightEarBarTwo.current, 1, {
                scaleX: 1,
                scaleY: 1.1,
                ease: Elastic.easeOut,
                repeat: -1,
                repeatDelay: 0.1
            });

            for (let i = 0; i < numberOfWavePoints; i++) {
                let p = waveLine.current.points.appendItem(mainSVG.current.createSVGPoint());
                p.x = i * 2.9;
                p.y = 300;
            }
            const waveTimeline = gsap.timeline();
            waveTimeline.from(waveLine.current, {
                delay: 3,
                opacity: 0
            }).to(waveLine.current.points, {
                y: '+=60',
                stagger: {
                    each: 0.038,
                    repeat: -1,
                    yoyo: true,

                },
                ease: 'sine.inOut',
                opacity: 1
            }).timeScale(2);

            gsap.to(mainSVG.current, {
                opacity: 0,
                delay: 5,
                scale: 0
            });
        }

    }, [isLoaded])




    return (
        <svg className="main-svg" viewBox="0 0 612 792" ref={mainSVG}>
            <path className="headphone-bar"
                d="M61.8,525c-3.3-6.1-6.4-12.4-9.3-18.8c-16.1-35.8-25-75.5-25-117.3c0-157.3,126.7-281.4,283-281.4" />
            <path className="headphone-bar"
                d="M310.4,107.5c156.3,0,283,124.1,283,281.4c0,41.8-8.9,81.5-25,117.3c-2.9,6.4-6,12.7-9.3,18.8" />
            <g>
                <path className="phone-casing phone-casing__left-ear" d="M193.8,616.7L126,633.6c-16.1,4-32.6-4.9-36.9-19.8L53.9,491.5c-4.3-14.9,5.2-30.3,21.3-34.3l67.8-16.9
		c16.1-4,32.6,4.9,36.9,19.8L215,582.4C219.3,597.4,209.8,612.7,193.8,616.7z" ref={leftEar} />
                <path className="st2" d="M82.5,590.9c-24.8,6.2-49.9-5.9-56-27s9.1-43.2,33.9-49.4" />
                <polygon className="golden golden__left-ear-bar" points="164.4,624 173.5,621.8 122.7,445.4 113.6,447.6" ref={leftEarBar} />
                <polygon className="golden golden__left-ear-bar-two" points="185.2,618.9 194.3,616.6 143.5,440.2 134.4,442.5" ref={leftEarBarTwo} />

                <rect x="143.6" y="442.9" transform="matrix(-0.9703 0.2419 -0.2419 -0.9703 412.2219 1018.8162)"
                    className="st2" width="0" height="183.6" />

                <rect x="164.3" y="437.7" transform="matrix(-0.9703 0.2419 -0.2419 -0.9703 451.8273 1003.6182)"
                    className="st2" width="0" height="183.6" />
            </g>
            <g>
                <path className="phone-casing phone-casing__right-ear" d="M426.3,616.7l67.8,16.9c16.1,4,32.6-4.9,36.9-19.8l35.2-122.3c4.3-14.9-5.2-30.3-21.3-34.3l-67.8-16.9
		c-16.1-4-32.6,4.9-36.9,19.8L405,582.4C400.7,597.4,410.2,612.7,426.3,616.7z" ref={rightEar} />
                <path className="st2" d="M537.5,590.9c24.8,6.2,49.9-5.9,56-27s-9.1-43.2-33.9-49.4" />
                <polygon className="golden golden__right-ear-bar" points="455.6,624 446.5,621.8 497.3,445.4 506.4,447.6" ref={rightEarBar} />
                <polygon className="golden golden__right-ear-bar-two" points="434.8,618.9 425.7,616.6 476.5,440.2 485.7,442.5" ref={rightEarBarTwo} />

                <rect x="476.4" y="442.9" transform="matrix(0.9703 0.2419 -0.2419 0.9703 143.4623 -99.3497)"
                    className="st2" width="0" height="183.6" />

                <rect x="455.7" y="437.7" transform="matrix(0.9703 0.2419 -0.2419 0.9703 141.5968 -94.4882)"
                    className="st2" width="0" height="183.6" />
            </g>
            <g>
                <path className="phone-casing phone-casing__over-head" d="M82.5,255.9c-5.4,0-10.9-1.1-16.1-3.4c-18.5-8.3-26.2-29-17.3-46.2c21.7-41.7,59.1-75.9,108.4-98.8
		c44-20.5,95.6-31.4,149.2-31.4c0.1,0,0.2,0,0.3,0c117.1,0,215.8,49.9,257.6,130.2c9,17.2,1.2,37.9-17.2,46.2
		c-18.5,8.3-40.7,1.2-49.7-16c-28.9-55.4-103.7-91.2-190.7-91.2c-0.1,0-0.2,0-0.2,0c-87.1,0.1-162,35.8-190.7,91.1
		C109.6,248.7,96.3,255.9,82.5,255.9z" />
            </g>
            <g>
                <path className="golden golden__wire" d="M565.9,541.5c0.1,11.9,0.1,68.2,0.2,78.8c1,16.8-7.8,33.5-23.3,40.7c-5,2.4-10.6,3.6-16.2,3.6l-15.8,0
		c-5.5,0-18.4,0-23.6,0c-13.4,0.3-26.8-1.5-39.4-5.9c-7.2-2.5-18.9-6.9-25.9-9.1c-11.1-3.4-22.7-4.8-34.3-4.1
		c-7.7,0.4-15.3,1.8-22.7,4c-2.2,0.7-5.2,1.7-7.4,2.4c-20,7.2-42.1,9.1-63.1,4.9c-10.3-2-20.4-5.8-30.5-8.3
		c-20.2-5-41.7-2.5-60.7,5.6c-8,3-21.5,8.1-29.6,10.9c-0.3-0.2,29.1-12.1,29.1-12.2c4.8-2,9.6-4.2,14.7-5.8
		c15.2-4.9,31.7-5.9,47.4-2.3c10.3,2.3,20.1,6.1,30.4,8.1c5.1,1,10.2,1.6,15.3,1.9c11.6,0.6,23.3-0.6,34.5-3.4
		c6.2-1.6,12.5-4,18.7-5.9c20.5-6.2,43-5.8,63.3,1.3c5.2,1.8,17,6.1,22.3,7.9c12.2,4.2,25.2,5.9,38,5.6c11.3,0,28,0,39.4,0
		c15.1,0.2,28.7-10.8,33.2-25c1.6-4.8,2.1-9.6,1.9-14.8c0,0,0-15.8,0-15.8l0.2-63H565.9L565.9,541.5z" ref={wire} />
            </g>
            <g>
                <g>
                    <g>
                        <path className="scrut-text" d="M244,709.4l-9.4,10.5h-23.5c-8.2,0-14.9-2-20.3-5.9c-5.4-3.9-8-8.9-8-14.8c0-6,2.6-10.7,7.9-14.4
				c5.3-3.7,12.1-5.5,20.3-5.5h32.9l-9.4,10.6H211c-4,0-7.3,0.9-9.9,2.8c-2.6,1.9-3.9,4.3-3.9,7.1c0,2.9,1.3,5.2,3.9,7
				c2.6,1.8,5.9,2.7,9.9,2.7L244,709.4L244,709.4z" ref={scrutText} />
                        <path className="scrut-text" d="M314.6,719.9h-21.1l-14.2-10.2h-20v10.2h-14.6v-20.7h40.4c2.5,0,4.5-0.3,6.1-1c2-0.8,3.1-2,3.1-3.7
				c0-3.1-3.1-4.7-9.2-4.7h-40.4l9.5-10.6h29.6c7.3,0,13.2,1.2,17.8,3.6c5.1,2.8,7.7,6.6,7.7,11.7c0,2.9-1,5.4-3.1,7.7
				s-4.9,4.1-8.5,5.3L314.6,719.9z" ref={scrutText} />
                        <path className="scrut-text"
                            d="M376.7,701.4c0,12.3-9.8,18.5-29.3,18.5h-3.1c-19.5,0-29.3-6.1-29.3-18.5v-22.1h14.5v22.1
				c0,3.7,1.8,6,5.6,7.1c2,0.6,6.1,0.9,12.2,0.9c4.9,0,8.4-0.4,10.4-1.4c2.8-1.2,4.2-3.4,4.2-6.6v-22.1h14.6V701.4L376.7,701.4z" ref={scrutText} />
                        <path className="scrut-text"
                            d="M435,679.3l-9.4,10.6h-14v30.1H397v-30.1h-19.3l9.4-10.6L435,679.3L435,679.3z" ref={scrutText} />
                        <path className="scrut-text" d="M451.2,719.9h-14.5v-40.6h14.5V719.9z" ref={scrutText} />
                        <path className="scrut-text" d="M513.5,714.7c0,3.7-2,5.5-5.8,5.5c-2.8,0-5.4-0.9-7.9-2.7l-27.4-19.9v22.3h-14.6v-35.4
				c0-1.5,0.6-2.8,1.7-3.7c1.1-1,2.7-1.5,4.7-1.5c2.6,0,5.1,0.8,7.4,2.4l27.4,19.9v-22.4h14.6V714.7L513.5,714.7z" ref={scrutText} />
                        <path className="scrut-text"
                            d="M586.1,679.3l-27.8,27.2v13.5h-14.6v-13.5L515,679.3h18.6l17.5,16.5l16.4-16.5H586.1L586.1,679.3z" ref={scrutText} />
                    </g>
                </g>
            </g>
            <text transform="matrix(1.075 0 0 1 -251.9256 917.4681)"
                style={{ fontFamily: 'Spac3neon', fontSize: '25.9353px' }}>S</text>
            <path className="phone-casing" d="M154.7,671.1" />
            <g>
                <path className="phone-casing phone-casing__scrut-text" d="M156.4,686.7c14.5,0,22.3,5.3,22.3,15.8c0,11.8-7.4,18.9-25.5,18.9H97.9l11.8-14.8h45c4.4,0,6.3-1.2,6.3-4.2
		c0-2.9-2-4.1-6.3-4.1h-32.3c-15.3,0-22.3-6.6-22.3-16.6c0-10.9,7.5-17.9,25.5-17.9h51.6l-11.8,15h-41.2c-4.3,0-6.3,1-6.3,4
		c0,2.9,2,4.1,6.3,4.1H156.4z" ref={scrutText} />
            </g>
            <polyline className="wave-line" ref={waveLine} />
        </svg>
    )
};

export default LandingPageImage;