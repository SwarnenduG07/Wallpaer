import React, { useCallback, useRef } from "react";
import { View, Text, StyleSheet , Image, Button, useColorScheme, Pressable} from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { Wallpaper } from "@/hooks/useWallpaper";
import { Colors } from "@/constants/Colors";
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedText } from "./ThemedText";
import { ThemedView } from "./ThemedView";

export const DownloadPicture = ({onClose, wallpaper}: {
    onClose: () => void;
    wallpaper: Wallpaper;
}) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  // Handle changes in BottomSheet
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  //BottomSheet Define snap points for 
  const theme = useColorScheme() ?? 'light'
  return (
      <BottomSheet
      onClose={onClose}
        ref={bottomSheetRef}
        snapPoints={["95%"]}
        onChange={handleSheetChanges}
        enablePanDownToClose={true}
        handleIndicatorStyle={{height: 0}}
        handleStyle={{display: "none"}}
      >
        <BottomSheetView style={styles.contentContainer}>
        <ThemedView style={{flex: 1}}>
            <Image style={styles.image} source={{uri: wallpaper.url}} />
            <View style={styles.topbar}>
              <Ionicons
              name={'close'}
              size={24}
              color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
              />
              <View style = {styles.inntertopbar}>
                <Ionicons
                name={'share'}
                size={24}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                style={{paddingRight: 10}}
                />
                <Ionicons
                name={'heart'}
                size={24}
                color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
                />
              </View>
            </View>
            <ThemedView style={styles.textcontainer}>
            <ThemedText style={styles.text}>{wallpaper.name}</ThemedText>
            </ThemedView>
            <Download />
            </ThemedView>
        </BottomSheetView>
      </BottomSheet>
  );
};

function Download() {
  const theme = useColorScheme() ?? 'light'

    return <Pressable style={{
         backgroundColor: "black" ,
         padding: 10,
         margin: 40,
         justifyContent: "center",
         flexDirection: "row",
         borderRadius: 20,
         borderWidth: 1,
         borderColor: theme === 'light' ? Colors.light.text: Colors.dark.icon
          
    }}> 
    <Ionicons
    name={'download'}
    size={22}
    color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
    style={{paddingRight: 2}}
    />
     <Text style={{
      fontSize: 20,
      color: "white",   
      fontWeight: "600"   
     }}>Download</Text>
    </Pressable>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  contentContainer: {
       flex: 1,
  },
  image: {
    height: "80%",
    borderRadius: 15,
  },
  topbar: {
    position: "absolute",
    padding: 10,
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "100%",
  },
  inntertopbar: {
      display: "flex",
      flexDirection:"row"
  },
  textcontainer: {
     justifyContent: "center",
     display: "flex",
     width: "100%"
  },
  text: {
    paddingTop: 20,
    fontWeight:"600",
    fontSize: 30,
    textAlign:"center",
  }
});
