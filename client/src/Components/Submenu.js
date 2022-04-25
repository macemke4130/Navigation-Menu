import React from 'react';

// Styles
import "./nav.styles.css";

function Submenu(props) {

    console.log(props.submenuTitle)
    const submenuStyle = {
        backgroundImage: `url(${props.background})` || "none"
    }

    const kabob = spaces => spaces.replaceAll(" ", "-").toLowerCase();

    const root = props.submenuTitle && "/" + kabob(props.submenuTitle.text);


    if (props.submenu) {
        return (
            <div style={submenuStyle} className="submenu">
                <div className="submenuTitle"><a href={(props.submenuTitle.link) ? props.submenuTitle.link : `/${kabob(props.submenuTitle.text)}`}>{props.submenuTitle.text}</a></div>
                <div className="sectionsContainer">
                    {props.submenu.map(section => (
                        <div key={section.text} className="section">
                            <div className="sectionTitle"><a href={(section.link) ? section.link : `${root}/${kabob(section.text)}`}>{section.text}</a></div>
                            <div className="sectionTitleUnderline"></div>
                            {section.submenu && section.submenu.map(link => (
                                <div key={link.text}>
                                    <a href={(link.link) ? link.link : `${root}/${kabob(section.text)}/${kabob(link.text)}`}>{link.text}</a>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>


            </div>
        );
    } else {
        return (
            <></>
        )
    }
}

export default Submenu;