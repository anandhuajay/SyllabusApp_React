import React from 'react';
import { View, FlatList, Image, StyleSheet, Text, SafeAreaView } from 'react-native';

const data = [
  { id: '1', imageUrl: 'https://images.deccanchronicle.com/dc-Cover-k7n6fqmpc9hl2m0fo1vgnuh5f1-20170107071444.Medi.jpeg' },
  { id: '2', imageUrl: 'https://courses.ind.in/img/b/download-emblem-of-calicut-university.png' },
  {id : '3', imageUrl: 'https://upload.wikimedia.org/wikipedia/ta/9/9f/Logo_of_University_of_Kerala.png'},
  {id : '4',imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7OB9Q3jtYsylWUIJMRyM5SL1IuVf7GZT1BfNISlmsTg&s'}
];

const renderItem = ({ item }) => (
  <View style={styles.item}>
  
    
    <Image source={{ uri: item.imageUrl }} 
    style={{height:150,width:150}}
    />
   
  </View>
);

const keyExtractor = (item) => item.id;

const MyFlatList = () => (
  <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={keyExtractor}
    numColumns={2} 
    
    
  />
);

const styles = StyleSheet.create({
  item: {
    flex: 1,
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor:'red',
    alignItems:'center'
    
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
});

export default MyFlatList;
