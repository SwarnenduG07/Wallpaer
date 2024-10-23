import { ImageCard } from "@/components/navigation/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";
import { Image, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";
import { DownloadPicture } from "@/components/ButtomSheet";
import { SplitView } from "@/components/Splitvew";

export default function explore() {
    const wallpaper = useWallpaper();
    
    return <SafeAreaView style={{flex: 1}}>
          <ParallaxScrollView
          headerBackgroundColor={{dark: "black", light: "white"}}
          headerImage={<Image style={{flex: 1}} source={{uri: wallpaper[0]?.url ?? ""}}/>}>
            <SplitView wallpapers={wallpaper} />
          </ParallaxScrollView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
    },
    innerContainer: {
        flex: 1,
        padding: 10

    },
    imageContainer : {
        paddingVertical: 10,
    }
})