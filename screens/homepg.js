import React from "react";
import { Image, StyleSheet, Text, View, } from "react-native";

const HomePg = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.subhead}>Welcome back</Text>
      <View style={styles.image1}>
        <Image
          source={require('./assets/schoolimg.jpg')}
          style={styles.school}
        />
      </View>
      <View style={styles.image1}>
        <Image
          source={require('./assets/collegeimg.jpg')}
          style={styles.school}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
   
  },
  subhead: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    paddingBottom:50,
    paddingLeft: 20,
    paddingTop:20
  },
  image1: {
    width: 350,
    height: 250,
    padding:15,
    marginBottom:30,


    
    
    
  },
  school: {
    flex: 1,
    width: 350,
    height: 250,
    borderRadius: 20,

   
    
    

  },
});

export default HomePg;