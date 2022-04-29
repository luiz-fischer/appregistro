// screens/LoginScreen.js
import { ImageBackground, Text, TextInput, View } from 'react-native';
import styles from '../components/styles'
import { useState } from 'react';

export default function LoginScreen() {
const [email, setEmail] = useState()
const [senha, setSenha] = useState()

return (
    <ImageBackground
    style={styles.container}
    source={require("../../assets/login.jpg")}
    
    >
        <View>
            <Text>Faça seu Login</Text>
            <Text>Digite seu E-mail</Text>
            <TextInput/>
            <Text>Digite sua Senha</Text>
            <TextInput
            secureTextEntry={true}
            />
        </View>
    </ImageBackground>
  );
}
