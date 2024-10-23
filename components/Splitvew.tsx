import { View, StyleSheet, FlatList } from "react-native"
import { ImageCard } from "./navigation/ImageCard"
import { ThemedView } from "./ThemedView"
import { Wallpaper } from "@/hooks/useWallpaper"
import { useState } from "react"
import { DownloadPicture } from "./ButtomSheet"


export function SplitView({wallpapers}: {
    wallpapers: Wallpaper[]
}) {
    const [selectedWallpaper, setSelectedWallpaper] = useState<null | Wallpaper>(null)
     return <>
         <View style={styles.container}>
                <View style={styles.innerContainer}>
                    <FlatList 
                        data={wallpapers.filter((_,index) => index % 2 === 0)}
                        renderItem={({item}) => (
                            <View style={styles.imageContainer}>
                                <ImageCard wallpaper={item} onPress={() => {
                                  setSelectedWallpaper(item)
                                }}/>
                            </View>
                        )}
                        keyExtractor={item => item.name}
                    />
                </View>
                <View style={styles.innerContainer}> 
                    <FlatList 
                        data={wallpapers.filter((_,index) => index % 2 === 1)}
                        renderItem={({item}) => (
                            <View style={styles.imageContainer}>
                                <ImageCard wallpaper={item} onPress={() => {
                                    setSelectedWallpaper(item)
                                }}/>
                            </View>
                        )}
                        keyExtractor={item => item.name}
                    />
                </View>
            </View>  
            {selectedWallpaper && <DownloadPicture onClose={() => setSelectedWallpaper(null)} wallpaper={selectedWallpaper}/>}
      </>
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