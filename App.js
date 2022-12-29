import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

const tab = createBottomTabNavigator();

function accueilScreen() {
  return (
    <View style={styles.container}>
      <Text>Accueil</Text>
    </View>
  );
}
function parametreScreen() {
  return (
    <View style={styles.container}>
      <Text>Parametre</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name == "Accueil") {
              iconName = "home";
            } else if (route.name == "Parametre") {
              iconName = "settings";
            }
            return <Ionicons name={iconName} size={25}/>;
          },
        })}
      >
        <tab.Screen name="Accueil" component={accueilScreen} />
        <tab.Screen name="Parametre" component={parametreScreen} />
      </tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
