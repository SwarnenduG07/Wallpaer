import { DownloadPicture } from "@/components/ButtomSheet";
import { Link } from "expo-router";
import { useState } from "react";
import {  Button, Text, View, ViewComponent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export  default function account() {
    const [pictureOpen, setPictureOpen] = useState(false)
    return <SafeAreaView style={{flex: 1}}>
        <View style={{flex:1}}>
            <Text>
                Account Page
            </Text>
            <Link href={"/accountinfo"}>
                    Account Inf
            </Link>

            <Button title="Open bottom sheet" onPress={() => {
                setPictureOpen(true);
            }}></Button>
        {pictureOpen && <DownloadPicture onClose={() => setPictureOpen(false)}/> }
        </View>
    </SafeAreaView>
}