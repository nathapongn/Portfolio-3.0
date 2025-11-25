import './Card.css'
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";

// MUI Icons
import Icon from '@mui/material/Icon';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Card({ children = "Title", description = "Description", modeSupport = false, thumbnailType = "image", lightSrc, darkSrc, gradient = "false", gradientSrc, thumbnailClass, alt }) {
    const { darkMode } = useContext(ThemeContext);
    
    return(
        <>
            <div className="card">
                <div className={`card-thumbnail ${thumbnailClass}`}>
                    {thumbnailType === "video" ? 
                    (<video src={darkMode ? (darkSrc || lightSrc) : lightSrc} autoPlay loop muted playsInline></video>) 
                    : 
                    (<img src={darkMode ? (darkSrc || lightSrc) : lightSrc} alt={alt} />) 
                    }
                    {gradient === true && <img className="card-thumbnail-gradient" src={gradientSrc} />}
                </div>
                <div className="card-footer">
                    <div className="card-footer-label">
                        <div className="card-title">
                            <h2 className="text-xl text-neutral-primary">{children}</h2>
                            {modeSupport && (
                                <Icon>
                                    <Brightness4Icon className="icon-subtle" />
                                </Icon>
                            )}
                        </div>
                        <p className="card-description text-m text-neutral-secondary">{description}</p>
                    </div>
                    <div className="card-footer-link">
                        <p className="read-more text-s strong accent">Read More</p>
                            <Icon className="read-more-icon">
                                <ArrowForwardIcon className="icon-accent"/>
                            </Icon>
                    </div>
                </div> 
            </div>
        </>
    )
}