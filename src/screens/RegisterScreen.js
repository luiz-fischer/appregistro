// screens/RegisterScreen.js
import { Button, ImageBackground, Text, TextInput, View } from "react-native";
import styles from "../components/styles";
import { useEffect, useState } from "react";

export default function RegisterScreen({ navigation }) {
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  useEffect(() => {
    console.log(nome, email, senha);
  }, [nome, email, senha]);
  return (
    <ImageBackground
      style={styles.container}
      source={require("../../assets/login.jpg")}
    >
      <View style={styles.sub_container}>
        <Text style={styles.container}>Faça seu Cadastro</Text>
        <Text>Digite seu Nome</Text>
        <TextInput onChangeText={setNome} />
        <Text>Digite seu E-Mail</Text>
        <TextInput onChangeText={setEmail} />
        <Text>Digite sua Senha</Text>
        <TextInput onChangeText={setSenha} secureTextEntry={true} />
        <Button
          title={"Fazer Login"}
          onPress={() => navigation.navigate('Login')}
        ></Button>
      </View>
    </ImageBackground>
  );
}
