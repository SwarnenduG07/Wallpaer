import { DownloadPicture } from "@/components/ButtomSheet";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { useState } from "react";
import {  StyleSheet, Pressable, Text, View, Appearance } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export  default function account() {
    const [pictureOpen, setPictureOpen] = useState(false)
    return <SafeAreaView style={{flex: 1}}>
        <Header />
        <ThemedView style={{flex:1}}>
          <AuthButton
          lable="Signin"
          icon={<Ionicons name="logo-google" 
          size={22} color="white" />} 
          />
          <AuthButton
          lable="Signin"
          icon={<Ionicons name="logo-google" 
          size={22} color="white" />} 
          />
         <ThemeSelector />
        </ThemedView>
    </SafeAreaView>
} 

function ThemeSelector() {
        return <ThemedView style={styles.margin}>
                <ThemedText style={styles.textBig}>Settings</ThemedText>
                <ThemedText style={styles.textSmall}>Theme</ThemedText>
                <ThemedView style={{flexDirection: "row", justifyContent: "space-between", width: '100%', paddingHorizontal: 20, marginTop: 10}}>
                   <ThemeButton selected={false} title={"Dark"} colorScheme="dark" />
                   <ThemeButton selected={false} title={"Light"} colorScheme="light" />
                   <ThemeButton selected={false} title={"System"} colorScheme={null} />
                </ThemedView>
            </ThemedView>
}

function ThemeButton({selected, title, colorScheme}: {selected: boolean, title: string, colorScheme: "dark" | "light" | null}) { 
 return <Pressable style={styles.themButtonContainer} onPress={() => {
    Appearance.setColorScheme(colorScheme)
 }}>
       <ThemedText>{title}</ThemedText>
 </Pressable>
}

function Header() {
    return <ThemedView style={styles.topbar}>
        <ThemedText style={styles.textBig}>Panels</ThemedText>
        <ThemedText style={styles.textSmall}>Signin to save your data</ThemedText>
    </ThemedView>
}

function AuthButton({lable, icon}: {lable: string, icon: any}) {
  
      return <Pressable style={{
           backgroundColor: "black" ,
           padding: 10,
           margin: 20,
           justifyContent: "center",
           flexDirection: "row",
           borderRadius: 20,
            
      }}> 
       { icon }
       <ThemedText style={{
        fontSize: 20,
        color: "white",   
        fontWeight: "600"   
       }}>{lable}</ThemedText>
      </Pressable>
  }

  const styles = StyleSheet.create({
    textBig: {
        fontSize: 30,
        fontWeight: "semibold",
        marginLeft: 20,
        paddingTop: 10,
    },
    textSmall: {
        fontSize: 16,
        marginLeft: 20,
    },
    topbar: {
        paddingTop: 20,
    },
    themselectorContainer: {
         flex: 1,
    },
    themselectorChild: {
        flex: 0.33
    },
     themButtonContainer: {
        padding: 10,
        borderColor: "black",
        borderWidth: 1,
        borderRadius: 5,
        minWidth: 80,
        alignItems: 'center',
     },
    margin: {
        marginTop: 20,
    },
    color: {
        marginLeft: 20,

    }
  })
  
