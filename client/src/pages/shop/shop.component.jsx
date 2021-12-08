import React, { useEffect } from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.container";
import CollectionPage from "../collection/collection.container";
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
                component={CollectionsOverview}
            />
            <Route
                path={`${match.path}/:collectionId`}
                component={CollectionPage}
            />
        </div>
    );
}


export default ShopPage;
