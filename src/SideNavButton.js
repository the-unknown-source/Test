import React from 'react'
import "./SideNavButton.css"

function SideNavButton({active,text,Icon}) {
    return (
        <div className={`sideNavButton ${active && "sideNavButton--active"}`}>
            <Icon />    
            <h1>{text}</h1> 
        </div>
    )

}
export default SideNavButton
