import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";



import "./directory.styles.scss";

const Directory = () => {
    const sections = useSelector(selectDirectorySections);
    return (
        <div className="directory-menu">
            {sections.map(({ id, ...otherSectionProps }) => (
                <MenuItem key={id} {...otherSectionProps} />
            ))}
        </div>
    )
};

export default Directory;
