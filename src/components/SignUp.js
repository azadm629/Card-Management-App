import React from "react";
import { View, Text } from "react-native";
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

export default function SignUp() {
  const [showPassword, setShowPassword] = React.useState(true);
  const [password, setPassword] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");

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
            placeholder="Name"
            value={name}
            onChangeText={(val) => setName(val)}
          />
        </Item>
        <Item regular style={[styles.regularInput]}>
          <Input
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={(val) => setEmail(val)}
          />
        </Item>
        <Item regular style={[styles.regularInput]}>
          <Input
            placeholder="Phone Number"
            keyboardType="numeric"
            value={number}
            onChangeText={(val) => setNumber(val)}
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

        <Button
          style={[
            buttonStyle.blueButtonContainer,
            { marginTop: 50, marginBottom: 10 },
          ]}
        >
          <Text style={buttonStyle.blueButtonText}>SIGN UP</Text>
        </Button>
        <Text
          style={{
            color: "#7E839A",
            textAlign: "center",
            fontSize: 15,
            marginVertical: 10,
          }}
        >
          Already have an account?
          <Text style={{ color: colors.primaryColor }}> Sign in here</Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  );
}
