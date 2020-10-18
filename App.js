import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import Header from './shared/header'

export default function App() {

  const [food, setFood] = useState([
    {name: 'Pizza', key: '1', image:require('./assets/pizza2.png'), item_no: '25 items'},
    {name: 'Salads', key: '2', image:require('./assets/salads.png'), item_no: '25 items'},
    {name: 'Desserts', key: '3',image:require('./assets/desserts.png'),item_no: '25 items'},
    {name: 'Pasta', key: '4', image:require('./assets/pasta.png'),item_no: '25 items'},
    {name: 'Beverages', key: '5', image:require('./assets/beverages.jpg'),item_no: '25 items'},
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
                          <Image source= {item.image} style={styles.itemPhoto}/> 
                          <View style={styles.itemText}>
                              <Text>{item.name}</Text>
                            <Text style={styles.itemNo}>{item.item_no}</Text>
                           </View>
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
  
    padding:30,
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
  itemNo:{
    fontSize:10,
    color:'#ddd'
  }
  
  
});
