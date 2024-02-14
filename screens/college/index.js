import React from "react";
import { Image, StyleSheet, Text, View, } from "react-native";
import styles from './styles'

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



export default collegeHome;