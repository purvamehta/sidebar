import React from 'react'
import {View,Text,StyleSheet,ScrollView,ImageBackground,Image} from 'react-native'
import{DrawerNavigationItems} from 'react-navigation-drawer'
import{Iconicons} from "@expo/vector-icons";

export default Sidebar=props=>(
    <ScrollView>
        <View style={styles.container}>
            <DrawerNavigationItems {...props}/>
        </View>
        </ScrollView>
);
const styles=StyleSheet.create({
    container:{
        flex:1
    }
}
);