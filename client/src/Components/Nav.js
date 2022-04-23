import React, { useEffect } from 'react';

// Styles
import "./nav.styles.css";

function Nav() {
    const submenuTextHeight = 1.25;
    const submenuTextMargin = 0.5;

    const liStyle = {
        fontSize: `${submenuTextHeight}rem`,
        margin: `${submenuTextMargin}rem`
    }

    const handleMainMenuItemClick = (e) => {
        const clicked = e.target;
        const hasInactiveClass = !!clicked.parentNode.classList[1];
        if (hasInactiveClass) return;

        const submenu = clicked.nextSibling;
        const menuName = e.target.innerText;
        const numberOfLinks = submenu.firstChild.firstChild.children.length;
        const submenuOpenHeight = numberOfLinks * (submenuTextHeight + submenuTextMargin);

        const isNotFullyOpen = submenu.style.height !== `${submenuOpenHeight}rem`;

        submenu.style.height = isNotFullyOpen ? `${submenuOpenHeight}rem` : "0rem";
        submenu.style.width = isNotFullyOpen ? "auto" : "0rem";

        const mainMenuItems = document.getElementsByClassName("mainMenuItemContainer");

        for (let i = 0; i < mainMenuItems.length; i++) {
            const check = mainMenuItems[i].firstChild.innerText === menuName;
            if (!check) {
                mainMenuItems[i].classList.add("inactiveMenuItem");
            }
        }

    }

    useEffect(() => {
        console.clear();
    })

    return (
        <header>
            <nav>
                <div className="mainMenuItemContainer">
                    <div onClick={handleMainMenuItemClick} className="mainMenuItem">Products</div>
                    <div className="submenuContainer">
                        <div className="submenu">
                            <ul>
                                <li style={liStyle}>Bicycles</li>
                                <li style={liStyle}>Frames</li>
                                <li style={liStyle}>Components</li>
                                <li style={liStyle}>Accessories</li>
                                <li style={liStyle}>Apparel</li>
                                <li style={liStyle}>Tools</li>
                                <li style={liStyle}>Gifts</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mainMenuItemContainer">
                    <div onClick={handleMainMenuItemClick} className="mainMenuItem">Services</div>
                    <div className="submenuContainer">
                        <div className="submenu">
                            <ul>
                                <li style={liStyle}>Tune Ups</li>
                                <li style={liStyle}>Adjustments</li>
                                <li style={liStyle}>Frame Repairs</li>
                                <li style={liStyle}>Painting</li>
                                <li style={liStyle}>Fitting</li>
                                <li style={liStyle}>Consultation</li>
                                <li style={liStyle}>Mechanic Classes</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="mainMenuItemContainer">
                    <div onClick={handleMainMenuItemClick} className="mainMenuItem">About</div>
                </div>
                <div className="mainMenuItemContainer">
                    <div onClick={handleMainMenuItemClick} className="mainMenuItem">Contact</div>
                </div>
            </nav>
        </header>
    );
}

export default Nav;