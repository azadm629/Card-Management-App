import React, { Component } from "react";
import { Text, Image } from "react-native";
import { Container, Header, Content, Tab, Tabs } from "native-base";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import images from "../api/images";
export default class TabsExample extends Component {
  render() {
    const tabStyle = {
      //   fontSize: 16,
      backgroundColor: "white",
    };

    const activeTabStyle = {
      backgroundColor: "white",
    };
    const textStyle = {
      fontSize: 17,
      color: "#7E839A",
    };

    const activeTextStyle = {
      fontSize: 17,
      color: "#0E1D77",
      fontWeight: "500",
    };
    return (
      <Container>
        <Image
          source={images.logo}
          style={{
            width: 160,
            height: 140,
            alignSelf: "center",
            marginTop: "13%",
          }}
        />
        <Tabs
          style={{
            marginTop: "7%",
          }}
          tabBarUnderlineStyle={{
            backgroundColor: "#FF061E",
            height: 3,
          }}
          tabContainerStyle={{
            borderBottomColor: "white",
            elevation: 0,
          }}
        >
          <Tab
            heading="Sign in"
            tabStyle={tabStyle}
            activeTabStyle={activeTabStyle}
            textStyle={textStyle}
            activeTextStyle={activeTextStyle}
          >
            <SignIn />
          </Tab>
          <Tab
            heading="Sign up"
            tabStyle={tabStyle}
            activeTabStyle={activeTabStyle}
            textStyle={textStyle}
            activeTextStyle={activeTextStyle}
          >
            <SignUp />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
