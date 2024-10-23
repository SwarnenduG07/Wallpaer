import { SplitView } from "@/components/Splitvew";
import { useLibraryWallpaper, useLikedWallpaper, useSuggestedWallpaper, useWallpaper } from "@/hooks/useWallpaper";
import {  createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { View , Text, StyleSheet} from "react-native";


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
    const wallpapers = useLibraryWallpaper();
    return <View style={styles.container}>
              
                <SplitView wallpapers={wallpapers}/>
              
          </View>
}

function Liked() {
    const wallpapers = useLikedWallpaper();

    return <View  style={styles.container}>  
             <SplitView wallpapers={wallpapers}/>
          </View>
}

function Suggested() {
    const wallpapers = useSuggestedWallpaper();

    return <View  style={styles.container}>
              <SplitView wallpapers={wallpapers}/>
          </View>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    }
})
