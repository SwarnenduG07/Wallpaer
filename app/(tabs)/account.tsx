import { Link } from "expo-router";
import {  Text, View, ViewComponent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export  default function account() {
    return <SafeAreaView>
        <Text>
            Account Page
        </Text>

        <Link href={"/accountinfo"}>
                Account Inf
        </Link>
    </SafeAreaView>
}