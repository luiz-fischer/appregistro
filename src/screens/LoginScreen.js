import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button, InputField, ErrorMessage } from "../components";
import Firebase from "../config/firebase";

import Background from '../assets/fundo.jpg'

const auth = Firebase.auth();


export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [rightIcon, setRightIcon] = useState("eye");
  const [loginError, setLoginError] = useState("");

  

  const handlePasswordVisibility = () => {
    if (rightIcon === "eye") {
      setRightIcon("eye-off");
      setPasswordVisibility(!passwordVisibility);
    } else if (rightIcon === "eye-off") {
      setRightIcon("eye");
      setPasswordVisibility(!passwordVisibility);
    }
  };

  const onLogin = async () => {
    try {
      if (email !== "" && password !== "") {
        await auth.signInWithEmailAndPassword(email, password);
      }
    } catch (error) {
      setLoginError(error.message);
    }
  };

  return (
    
    <View style={styles.container}>
      <StatusBar style="dark-content" />
      <Text style={styles.title}>!Entrar!</Text>
      <InputField
        inputStyle={{
          fontSize: 24,
        }}
        containerStyle={{
          marginBottom: 20,
        }}
        leftIcon="email"
        placeholder="Digite o seu E-Mail"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <InputField
        inputStyle={{
          fontSize: 24,
        }}
        containerStyle={{
          marginBottom: 20,
        }}
        leftIcon="lock"
        placeholder="Digite a sua senha"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={passwordVisibility}
        textContentType="password"
        rightIcon={rightIcon}
        value={password}
        onChangeText={(text) => setPassword(text)}
        handlePasswordVisibility={handlePasswordVisibility}
      />
      {loginError ? <ErrorMessage error={loginError} visible={true} /> : null}
      <Button
        onPress={onLogin}
        backgroundColor="#7c57da"
        title="Entrar"
        titleSize={20}
        containerStyle={{
          marginBottom: 24,
        }}
      />
      <Button
        onPress={() => navigation.navigate("Signup")}
        title="Novo Usuário"
        backgroundColor="#dc4491"
        titleSize={20}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F3f' 
  },
  container: {
    flex: 1,
    backgroundImage: `url(${Background})`,
    paddingTop: 100,
    width: 600,
    backgroundSize: "cover",
    alignSelf: "center",
    backgroundRepeat: "no-repeat"
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#fff",
    alignSelf: "center",
    paddingBottom: 24,
  },
});
