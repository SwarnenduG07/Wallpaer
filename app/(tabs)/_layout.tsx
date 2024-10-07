import  FontAwesome  from "@expo/vector-icons/FontAwesome";
import { Link, Slot, Tabs } from "expo-router";

export  default function TabLayout() {
   return (
     <Tabs screenOptions={{ tabBarActiveTintColor: "blue" , headerShown:false, }}>
        <Tabs.Screen 
        name="index"
        options={{
            title: "For you Page",
            tabBarIcon: ({color}) => <FontAwesome  size={28} name="cog" color={color} />,
           }}
        />
       <Tabs.Screen 
        name="account"
        options={{
            title: "account",
            tabBarIcon: ({color}) => <FontAwesome  size={28} name="cog" color={color} />,
           }}
        />
        <Tabs.Screen
        name="explore"
        options={{
            title: "explore",
            tabBarIcon: ({color}) => <FontAwesome  size={28} name="cog" color={color} />,
        }}
        />
        
     </Tabs>
   )
}