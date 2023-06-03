// modules
import { SafeAreaView, ScrollView } from "react-native";
import Characters from "./components/Characters";

export default function App() {
  return (
    <SafeAreaView className="bg-white h-full">
      <ScrollView>
        <Characters />
      </ScrollView>
    </SafeAreaView>
  );
}
