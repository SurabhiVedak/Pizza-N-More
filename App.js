import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Header from './shared/header'

export default function App() {

  const [food, setFood] = useState([
    {name: 'Pizza', key: '1', image:require('./assets/pizza2.png')},
    {name: 'Salads', key: '2', image:require('./assets/salads.png')},
    {name: 'Desserts', key: '3',image:require('./assets/desserts.png')},
    {name: 'Pasta', key: '4', image:require('./assets/pasta.png')},
    {name: 'Beverages', key: '5', image:require('./assets/beverages.jpg')},
  ]);
 
  return (
    <View style={styles.container}>
        <Header/>
        <View>
            <FlatList
              data={food}
              renderItem={({item}) => (
                    <TouchableOpacity>
                    <View style={styles.itemContainer}>
                    <View style={styles.pink}>
                          <Image source= {item.image} style={styles.itemPhoto}/>  
                    </View>
                        {/* <Image source= {item.image} style={styles.itemPhoto}/>  */}
                          <Text style={styles.itemText}>{item.name}</Text>
                      </View>
                      </TouchableOpacity>
              )}
              />
        </View>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'crimson'
  },
  header:{
    width: '100%',
    height:'100%',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center'
  },
  headerText:{
    fontWeight: 'bold',
    fontSize: 20,
    color:'#333',
    letterSpacing: 1,
  },
  itemText:{
  
    padding:50,
    paddingHorizontal: 85,
    fontSize:30,
    fontWeight: 'bold', 
    backgroundColor: '#fff'
    
  },
  itemPhoto:{
    width:75,
    height:100,
    backgroundColor: 'crimson',

    
  },
  itemContainer:{
    marginTop:10,
    flexDirection: "row",
    marginTop:20, 
    flex:1,
   
  },
  
  
});
