import { StyleSheet, Text, View, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Tela Home</Text>

      <Button
        title="Conheça o Sobre"
        onPress={() => {
          navigation.navigate("About");
        }}
        style={styles.button}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "tomato",
  },
});
