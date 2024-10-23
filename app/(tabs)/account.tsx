import { DownloadPicture } from "@/components/ButtomSheet";
import { ThemedText } from "@/components/ThemedText";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { useState } from "react";
import {  StyleSheet, Pressable, Text, useColorScheme, View, ViewComponent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export  default function account() {
    const [pictureOpen, setPictureOpen] = useState(false)
    return <SafeAreaView style={{flex: 1}}>
        <Header />
        <View style={{flex:1}}>
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
        </View>
    </SafeAreaView>
} 

function ThemeSelector() {
        return <View style={styles.margin}>
                <Text style={styles.textBig}>Settings</Text>
                <Text style={styles.textSmall}>Theme</Text>
                <View style={styles.textSmall}>
                   <ThemeButton selected={false} title="Dark" />
                   <ThemeButton selected={false} title="Dark" />
                   <ThemeButton selected={false} title="system" />
                </View>
            </View>
}

function ThemeButton({selected, title}: {selected: boolean, title: string}) { 
 return <Pressable>
       <ThemedText>{title}</ThemedText>
 </Pressable>
}

function Header() {
    return <View style={styles.topbar}>
        <Text style={styles.textBig}>Panels</Text>
        <Text style={styles.textSmall}>Signin to save your data</Text>
    </View>
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
       <Text style={{
        fontSize: 20,
        color: "white",   
        fontWeight: "600"   
       }}>{lable}</Text>
      </Pressable>
  }

  const styles = StyleSheet.create({
    textBig: {
        fontSize: 30,
        fontWeight: "semibold",
        marginLeft: 20,
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
    margin: {
        marginTop: 20,
    }
  })
  
