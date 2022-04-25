import React from 'react';

// Styles
import "./nav.styles.css";

function NavItem(props) {
    return (
        <div className="mainMenuItemContainer">
            <div id={props.id} onClick={props.handleMainMenuItemClick} className="mainMenuItem">{props.menuItem}</div>
        </div>
    );
}

export default NavItem;