import { DownloadPicture } from "@/components/ButtomSheet";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Link } from "expo-router";
import { useState } from "react";
import {  Button, Pressable, Text, useColorScheme, View, ViewComponent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export  default function account() {
    const [pictureOpen, setPictureOpen] = useState(false)
    return <SafeAreaView style={{flex: 1}}>
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
        </View>
    </SafeAreaView>
} 

function AuthButton({lable, icon}: {lable: string, icon: any}) {
    const theme = useColorScheme() ?? 'light'
  
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
  
