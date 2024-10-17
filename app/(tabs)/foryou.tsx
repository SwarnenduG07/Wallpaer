import { SafeAreaView } from "react-native-safe-area-context";
import {  createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View , Text} from "react-native";


const Tab = createMaterialTopTabNavigator();

export  default function forYou() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Library" component={Library}/>
            <Tab.Screen name="Liked" component={Liked}/>
            <Tab.Screen name="Suggested" component={Suggested} />
        </Tab.Navigator>
    )
}

function Library() {
    return <View>
              <Text>
                 hi From  Library
              </Text>
          </View>
}

function Liked() {
    return <View>
             <Text>
                hi Liked Page
             </Text>
          </View>
}

function Suggested() {
    return <View>
              <Text>
                hi Suggested Page
             </Text>
          </View>
}
