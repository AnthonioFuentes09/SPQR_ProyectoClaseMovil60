import { View } from "react-native";
import StackNavigator from "./src/navigation/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from "./src/contexts/AuthContext";
import { LanguageProvider } from "./src/contexts/LanguageContext";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <LanguageProvider>
        <AuthProvider>
          <NavigationContainer >
            <StackNavigator />
          </NavigationContainer>
        </AuthProvider>
      </LanguageProvider>
    </View>
  );
}

