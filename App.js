import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer"; 
import LoginScreen from "./src/screens/LoginScreen";


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={LoginScreen}
          options={{ title: "Tela de Login" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
