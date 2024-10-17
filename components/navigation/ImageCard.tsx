import { Wallpaper } from "@/hooks/useWallpaper";
import {  View, StyleSheet , Image, useColorScheme} from "react-native";
import { ThemedText } from "../ThemedText";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from "@/constants/Colors";


export function ImageCard({wallpaper} :{
    wallpaper:Wallpaper,
}) {
    const theme = useColorScheme() ?? 'light'
    return <View>        
          <Image source={{uri: wallpaper.url}} style={style.image}/>
          <View style= {style.lableContainer}>
            <ThemedText style= {style.lable}>{wallpaper.name}</ThemedText>
            <View style={style.iconContainer}>
                <Ionicons
                name={'heart'}
                size={18}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                />
            </View>
          </View>

        </View>
    
}


const style =  StyleSheet.create({
 image: {
    flex: 1,
    height: 200,
    borderRadius: 20,
  },
   lable: {
     color: "white",
   },
   lableContainer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    position: "absolute",
    bottom: 0,
    width: "100%",
    flexDirection: "row",  
    justifyContent: "space-between",  
    padding: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
   },
   iconContainer: {
      display: "flex",
       justifyContent: "center",
   }
})