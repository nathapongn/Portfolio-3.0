// CSS
import "./MediaBlock.css"
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext.jsx";

export default function MediaBlock({title="Title", description="Description", mediaType="image", lightSrc, darkSrc, mirror=false, orientation="horizontal", alt}) {
    
    const darkMode = useContext(ThemeContext);

    return (
        <div className={`media-block ${mirror ? "mirror" : ""} ${orientation}`}>
            <div className={`media-wrapper ${mediaType === "video" ? "video" : "image"}`}>
                {mediaType === "video" ? 
                <video className="media-video" src={darkMode ? (darkSrc || lightSrc): lightSrc} autoPlay loop muted playsInline /> 
                : 
                <img src={darkMode ? (darkSrc || lightSrc): lightSrc} alt={alt} />}
            </div>
            <div className="media-label">
                <h1 className="text-xl text-neutral-primary">{title}</h1>
                <p className="text-m text-neutral-secondary">{description}</p>
            </div>
        </div>
    )
}