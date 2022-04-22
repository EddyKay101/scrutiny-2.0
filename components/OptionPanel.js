import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function OptionPanel({ src, message }) {

    return (
        <div className="container opt col-md-3 col-sm-12 col-xs-12">
            <div className="option ">
                <div className="option__option-message">
                    <h3 className="option__message">{message}</h3>
                </div>
                <div className="option__option-content">
                    <video className="option__video" playsInline muted loop>
                        <source src={src} type="video/mp4" />
                    </video>
                </div>
            </div>

        </div>
    )
}
