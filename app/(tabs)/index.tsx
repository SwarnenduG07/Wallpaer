import { SafeAreaView } from "react-native-safe-area-context";
import {  createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View , Text} from "react-native";


const Tab = createMaterialTopTabNavigator();

export  default function forYou() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={homoscreen}/>
            <Tab.Screen name="Setting" component={SettingsScreen}/>
        </Tab.Navigator>
    )
}

function homoscreen() {
    return <View>
          <Text>
             hi home 
          </Text>
    </View>
}
function SettingsScreen() {
    return <View>
          <Text>
             hi  setting
          </Text>
    </View>
}