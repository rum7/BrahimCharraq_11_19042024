import { useState } from "react"

import btnIcon from '@/assets/btn-collapse.svg'

import '@/components/collapse.style.css'

export const Collapse = ({ collapseTitle, collapseContent }) => {
    const [collapseState, setCollapseState] = useState(false)
    const handleCollapse = () => {
        setCollapseState(!collapseState)
    }

    return (
        <div className="collapse">
            <header>
                <h2>{collapseTitle}</h2>
                <button 
                    onClick={handleCollapse}
                    className={collapseState ? "collapse__btn collapse__btn--off" : "collapse__btn"}
                >
                    <img src={btnIcon} alt="open or close content" />
                </button>
            </header>
            <div className={collapseState ? "collapse__content collapse__content--open" : "collapse__content"}>
                {Array.isArray(collapseContent) ?
                    <ul className="content">
                        {collapseContent.map((item, index) => 
                            <li key={index}>{item}</li>
                        )}
                    </ul>
                    : <p className="content">{collapseContent}</p>
                }
            </div>
        </div>
    )
}