import { ImageCard } from "@/components/navigation/ImageCard";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { useWallpaper, Wallpaper } from "@/hooks/useWallpaper";
import { Image, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedView } from "@/components/ThemedView";

export default function explore() {
    const wallpaper = useWallpaper();
    return <SafeAreaView style={{flex: 1}}>
          <ParallaxScrollView
          headerBackgroundColor={{dark: "black", light: "white"}}
          headerImage={<Image style={{flex: 1}} source={{uri: wallpaper[0]?.url ?? ""}}/>}>
            <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <FlatList 
                        data={wallpaper.filter((_,index) => index % 2 === 0)}
                        renderItem={({item}) => (
                            <View style={styles.imageContainer}>
                                <ImageCard wallpaper={item} />
                            </View>
                        )}
                        keyExtractor={item => item.name}
                    />
                </View>
                <ThemedView style={styles.innerContainer}> 
                    <FlatList 
                        data={wallpaper.filter((_,index) => index % 2 === 1)}
                        renderItem={({item}) => (
                            <View style={styles.imageContainer}>
                                <ImageCard wallpaper={item} />
                            </View>
                        )}
                        keyExtractor={item => item.name}
                    />
                </ThemedView>
            </View>
              
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