import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import CollectionPageContainer from "../collection/collection.container";
import { useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import { fetchCollectionsStart } from "../../redux/shop/shop.actions";

const ShopPage = () => {
    const dispatch = useDispatch();
    const match = useRouteMatch();
    useEffect(() => {
        dispatch(fetchCollectionsStart());
    }, [dispatch])

    return (

        <div className="shop-page">
            <Route
                exact
                path={`${match.path}`}
                component={CollectionsOverviewContainer}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPageContainer}
            />
        </div>
    );
}


export default ShopPage;
