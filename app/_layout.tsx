import { Link, Slot } from "expo-router";
import { SafeAreaView, Text, View, ViewComponent } from "react-native";

export  default function layout() {
    return <SafeAreaView>
        <Slot />
         <Link href={"/account"}>        
          <Text>tale me to account page</Text>
        </Link>
        <Link href={"/"}>        
          <Text>tale me to account page</Text>
        </Link>
        <Link href={"/explore"}>        
          <Text>tale me to account page</Text>
        </Link>

    </SafeAreaView>
}