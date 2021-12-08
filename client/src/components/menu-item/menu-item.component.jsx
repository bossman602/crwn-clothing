import React from "react";
import { MenuItemContainer, BackgroundImageContainer, ContentContainer, ContentTitle, ContentSubtitle } from "./menu-item.styles.jsx";
import { useHistory, useRouteMatch } from "react-router-dom";


const MenuItem = ({ title, imageUrl, size, linkUrl }) => {

    const history = useHistory();
    const match = useRouteMatch();

    return (
        <MenuItemContainer className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageContainer
                className="background-image"
                style={{
                    backgroundImage: `url(${imageUrl})`,
                }}
            ></BackgroundImageContainer>
            <ContentContainer className="content">
                <ContentTitle className="title">{title.toUpperCase()}</ContentTitle>
                <ContentSubtitle className="subtitle">SHOP NOW</ContentSubtitle>
            </ContentContainer>
        </MenuItemContainer >
    )
};

export default MenuItem;
