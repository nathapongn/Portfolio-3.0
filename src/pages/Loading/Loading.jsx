// CSS
import "./Loading.css"

// Lucide
import { LucideBird } from 'lucide-react';

export default function Loading() {
    return (
        <div className="loading">
            <LucideBird className="icon-subtle" size={44}/>
            <p className="text-s text-neutral-secondary">Loading...</p>
        </div>
    )
}