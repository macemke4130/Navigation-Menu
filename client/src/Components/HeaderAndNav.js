import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

// Hooks
import useOnClickOutside from '../utils/useClickOutside';

// Styles
import "./nav.styles.css";

// Components
import NavItem from './NavItem';
import Submenu from './Submenu';

// Data
import { navigationLinks } from "../Data/navigationLinks";

function HeaderAndNav() {
    const submenuRef = useRef(null);
    const [theSubmenu, setTheSubmenu] = useState(null);
    const [submenuIndex, setSubmenuIndex] = useState(null);
    const [submenuTitle, setSubmenuTitle] = useState(null);
    const [submenuBackground, setSubmenuBackground] = useState(null);

    useOnClickOutside(submenuRef, () => closeSubmenu());

    const history = useHistory();

    const heightOfNav = 2;

    const headerStyle = {
        height: `${heightOfNav}rem`
    }

    const submenuContinerStyle = {
        inset: `${heightOfNav}rem 0px auto 0px`
    }

    const handleMainMenuItemClick = (e) => {
        const clicked = e.target;
        const clickedName = clicked.innerText;
        const clickedId = clicked.id;
        const clickedSubmenu = navigationLinks[clickedId].submenu;
        const clickedBackground = navigationLinks[clickedId].backgroundImage;

        // If clicked submenu is already open, set to close
        if (submenuIndex === clickedId) {
            closeSubmenu();
            return
        }

        // If Submenu exists, set to submenu. Otherwise, set to close
        setTheSubmenu(clickedSubmenu ? clickedSubmenu : null);
        setSubmenuIndex(clickedSubmenu ? clickedId : null);
        setSubmenuTitle(clickedSubmenu ? { text: clickedName, link: navigationLinks[clickedId].link } : null);
        setSubmenuBackground(clickedBackground ? clickedBackground : null);


        // If no Submenu exists, go to link
        if (!clickedSubmenu) goToLink(clickedName);
    }

    const closeSubmenu = () => {
        setTheSubmenu(null);
        setSubmenuIndex(null);
        setSubmenuBackground(null);
    }

    const goToLink = (clicked) => {
        history.push(`/${clicked.toLowerCase()}`);
        closeSubmenu();
    }

    useEffect(() => {
        submenuRef.current.style.display = theSubmenu ? "block" : "none";
    }, [theSubmenu])

    return (
        <header style={headerStyle}>
            <nav>
                <div className="mainMenuLinks">
                    {navigationLinks.map((navLink, index) => (
                        <NavItem key={index} menuItem={navLink.mainMenuText} id={index} handleMainMenuItemClick={handleMainMenuItemClick} />
                    ))}
                </div>
                <div ref={submenuRef} style={submenuContinerStyle} className="submenuContainer">
                    <Submenu submenu={theSubmenu} submenuTitle={submenuTitle} background={submenuBackground} />
                </div>
            </nav>
        </header>
    );
}

export default HeaderAndNav;