import './ScrollProgress.css'

import { useState, useEffect } from 'react'

export default function ScrollProgress () {

    const [scrollProgress, setScrollProgress] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            // Get current scroll position via window Y position
            const currentScroll = window.scrollY;
            // Get document (document) height
            const documentHeight = document.documentElement.scrollHeight;
            // Get window height (How much is visible).
            const windowHeight = window.innerHeight;

            // Calculate available height
            const scrollableHeight = documentHeight - windowHeight;
            // Calculate progress (width)
            const progress = (currentScroll / scrollableHeight) * 100

            setScrollProgress(progress);
        }

        // Listen for scroll, once scroll run a function handleScroll
        window.addEventListener('scroll', handleScroll)

        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])
    
    return (
        // Width of "scroll-progress" = (current Y-axis position) / (available Y-axis) x 100
        <div className="scroll-progress-container">
            <div className="scroll-progress" style={{width: `${scrollProgress}%`}}></div>
        </div>
    )
}