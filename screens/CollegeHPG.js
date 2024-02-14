import React from "react";
import { Image, StyleSheet, Text, View, } from "react-native";

const collegeHome = () => {
  return (
    <View style={styles.container}>
      
      <Text style={styles.subhead}>Welcome back</Text>
      <View style={styles.row}>
      <View style={styles.frame}>
        <Image
          source={require('./assets/mg.jpg')}
          style={styles.image1}
        />
      </View>
      <View style={styles.frame}>
        <Image
          source={require('./assets/calicat.jpg')}
          style={styles.image1}
        />
      </View>
      </View>
      <View style={styles.row}>
      <View style={styles.frame}>
        <Image
          source={require('./assets/kerala.jpg')}
          style={styles.image1}
        />
      </View>
      <View style={styles.frame}>
        <Image
          source={require('./assets/mg.jpg')}
          style={styles.image1}
        />
      </View>
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
    paddingBottom: 50,
    paddingLeft: 20,
    paddingTop:20
  },
  frame: {
    width: 150,
    height: 100,
    marginBottom:100,
    justifyContent:'space-between',
    
    
    
    
    


    
    
    
  },
  image1: {
    flex: 1,
    width: 150,
    height: 100,
    borderRadius: 10,
    resizeMode:'contain',
    justifyContent:'space-between',
    
    
    

  },
  row:{
    flexDirection:'row',

    paddingHorizontal: 10,
    marginBottom: 10,
    marginRight: 10,
  },
});

export default collegeHome;