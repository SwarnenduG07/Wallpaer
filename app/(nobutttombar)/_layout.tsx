import { Slot } from "expo-router";
import { Text, View } from "react-native";

export default function RootLayout() {
    return <View>
               <View style={{backgroundColor: "black"}}>
                   <Text style={{color: "white"}}>
                     Go back
                   </Text>
              </View>
              <Slot />
    </View>
}