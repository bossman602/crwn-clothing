import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import { auth, createUserProfileDocument } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {

    //get userAuth back from firebase
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {

      //if userAuth is not null then set userRef with user profile document (does not contain snapshot of data)
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // calling onSnapshot to get snapshot data (collection/document/collection(items)) 
        userRef.onSnapshot(
          //passing it to the setState to assign the information to the currentUser
          (snapShot) => {
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
            }, () => {
              //console.logging the state object
              console.log(this.state);
            })
          });

      }
      //if userAuth is null, set the currentUser to null
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}
export default App;
