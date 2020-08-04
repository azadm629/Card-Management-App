import React from "react";
import { View, Text, Alert } from "react-native";
import {
  Container,
  Header,
  Content,
  Input,
  Item,
  Button,
  Icon,
} from "native-base";
import styles from "../assets/styles/inputs";
import colors from "../assets/styles/colors";
import buttonStyle from "../assets/styles/buttons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import axios from "axios";

export default function SignIn() {
  const [showPassword, setShowPassword] = React.useState(true);
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");

  logUserIn = () => {
    axios
      .post("http://localhost:5000/api/auth")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        // Alert.alert(err.reponse.data);
      });
  };

  return (
    <KeyboardAwareScrollView>
      <View
        style={{
          padding: 30,
          paddingTop: 20,
        }}
      >
        <Item regular style={[styles.regularInput]}>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={(val) => setEmail(val)}
          />
        </Item>
        <Item regular style={[styles.regularInput]}>
          <Input
            placeholder="Password"
            secureTextEntry={showPassword}
            value={password}
            onChangeText={(val) => setPassword(val)}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            {showPassword ? (
              <Icon name="eye" style={{ color: "#B9BAC4" }} />
            ) : (
              <Icon name="eye-off" style={{ color: "#B9BAC4" }} />
            )}
          </TouchableOpacity>
        </Item>
        <Text
          style={{
            color: colors.primaryColor,
            textAlign: "right",
            fontSize: 15,
            marginVertical: 10,
          }}
        >
          Forgot Password{" "}
        </Text>

        <Button
          style={[
            buttonStyle.blueButtonContainer,
            { marginTop: 25, marginBottom: 10 },
          ]}
          onPress={() => logUserIn()}
        >
          <Text style={buttonStyle.blueButtonText}>SIGN IN</Text>
        </Button>
        <Text
          style={{
            color: "#7E839A",
            textAlign: "center",
            fontSize: 15,
            marginVertical: 10,
          }}
        >
          Dont have an account?{" "}
          <Text style={{ color: colors.primaryColor }}>Sign up here</Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
}
