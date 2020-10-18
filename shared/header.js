import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {FontAwesome, MaterialIcons} from '@expo/vector-icons';

export default function Header(){
    return(
       <View style={styles.header}>
            <View style={styles.headerContent}>
            <MaterialIcons 
            name="menu" 
            size={24} 
            color="black" 
            />
           <FontAwesome
           name='shopping-basket'
           size= {24}
           color='grey'
            />

        </View>
       </View>
    );
}
const styles = StyleSheet.create({
    header:{
        marginTop: 50,
        width: '100%',
        height:'20%',
        justifyContent: 'space-between',
        backgroundColor:'#eee',
       
        flexDirection: 'row',
    },
    headerContent:{
        // width: '100%',
        // height:'20%',
        // justifyContent: 'space-between',
        // backgroundColor:'#eee',
       
        // flexDirection: 'row',
    }
})