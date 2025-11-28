// CSS
import './Cover.css'

// React
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";

// Components
import Divider from '../Divider/Divider.jsx'
import Wrapper from '../Wrapper/Wrapper.jsx'

// Lucide
import { LampDesk } from 'lucide-react';

export default function Cover({className, lightSrc, darkSrc, lightSrcMobile, darkSrcMobile, alt}) {
    const { darkMode } = useContext(ThemeContext);

    const mediaSrc = (darkMode ? (darkSrc || lightSrc) : lightSrc);
    const mediaSrcMobile = (darkMode ? (darkSrcMobile || lightSrcMobile) : lightSrc);

    return (
        <section className={`cover ${className}`}>
            <picture className="cover-media" alt={alt}>
                <source className="" srcset={mediaSrc} />
                <img className="" src={mediaSrcMobile} />
            </picture>
            <Divider />
            <div className="mode-support-banner">
                <Wrapper>
                    <div className="mode-support-banner-content">
                        <LampDesk className="icon-subtle"/>
                        <p className="text-neutral-placeholder text-s">This project can be viewed in both light and dark mode.</p>
                    </div>
                </Wrapper>
            </div>
            <Divider />
        </section>
    )
}