import React, { Component } from "react";
import MyAppleSigninButton from "../components/AppleAuth";

class Home extends Component {

    state = {
        user: {
            name: "",
            appleID: ""
        }
    };

    render() {
        return (
            <React.Fragment>
                <h1>Test</h1>
                <MyAppleSigninButton />
            </React.Fragment>
        )
    }
}

export default Home