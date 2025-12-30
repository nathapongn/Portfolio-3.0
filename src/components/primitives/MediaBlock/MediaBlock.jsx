// CSS
import "./MediaBlock.css"
import { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext.jsx";
import Wrapper from "../Wrapper/Wrapper.jsx";

export default function MediaBlock({
  showLabel = true,
  title = "",
  titleSize = "text-xl",
  description = "",
  descriptionSize = "text-m",
  mediaType = "image",
  lightSrc,
  darkSrc,
  mediaBackground = "transparent",
  withWrapper=true,
  mirror = false,
  orientation = "horizontal",
  caption,
  mediaCaption,
  cols=12,
  padding="cozy",
  alt
}) {

    const { darkMode } = useContext(ThemeContext);

    const content = (
            <div className={`media-block ${mirror ? "mirror" : ""} ${orientation} col-span-${cols}`}>
                <div className={`media-wrapper ${mediaType === "video" ? "video" : "image"} ${padding} ${mediaBackground}`}>
                    {mediaType === "video" ? 
                    <video className="media-video" src={darkMode ? (darkSrc || lightSrc): lightSrc} autoPlay loop muted playsInline /> 
                    : 
                    <img src={darkMode ? (darkSrc || lightSrc): lightSrc} alt={alt} />}
                    {mediaCaption != "" && <p className="text-m text-neutral-secondary media-caption">{mediaCaption}</p>}
                </div>
                {showLabel ?
                <div className="media-label">
                    {caption != '' && <p className="media-text-s strong accent">{caption}</p>}
                    {title != '' && <h1 className={`${orientation === "vertical" ? "text-l" : titleSize} text-neutral-primary`}>{title}</h1>}
                    {description != '' && <p className={`${descriptionSize} text-neutral-secondary`}>{description}</p>}
                </div> : null
                }
            </div>
        );

    // Return with Wrapper when using MediaBlock on its own, return without MediaBlock when used as a child of ColumnLayout Component
    return withWrapper ? <Wrapper>{content}</Wrapper> : content;
}

