import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";


import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { connect } from "react-redux";
import { setCurrentUser } from "./redux/user/user.actions";
import { selectCurrentUser } from "./redux/user/user.selectors";
import { createStructuredSelector } from 'reselect'

class App extends React.Component {

  componentDidMount() {

    const { setCurrentUser } = this.props;

    //get userAuth back from firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {

      //if userAuth is not null then set userRef with user profile document (does not contain snapshot of data)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // calling onSnapshot to get snapshot data (collection/document/collection(items)) 
        userRef.onSnapshot(
          //passing it to the setState to assign the information to the currentUser
          (snapShot) => {
            setCurrentUser({
              id: snapShot.id,
              ...snapShot.data()
            });

          });
      }

      //if userAuth is null, set the currentUser to null
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path='/signin' render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)} />
        </Switch>
      </div>
    );
  }
}


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))

})

export default connect(
  mapStateToProps,
  mapDispatchToProps)
  (App);
