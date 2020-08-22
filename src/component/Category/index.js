import React from 'react';
import {View,StyleSheet,Image,TouchableOpacity} from 'react-native';
import {categoryData} from './CategoryData';
export default function index({handlePress}) {

    const handleIconPress=(pushPath)=>()=>handlePress(pushPath)
  return (
    <View style={styles.categoryContainer}>
      {categoryData.map((item) => (
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.hallContainer}
            onPress={handleIconPress(item.pushPath)}
            activeOpacity={0.8}
            hitSlop={styles.hitSlop}>
            <Image
              source={item.icon}
              style={styles.available}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
    categoryContainer:{
       flex:1,
       flexDirection:"row"
    },
    safeArea: {flex: 1},
    container: {
      paddingTop: 20,
      flex: 1,
    //   justifyContent:"center",
      alignItems:"center"
    //   paddingHorizontal: 10,
    //   backgroundColor: 'white',
    },
    image: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      width: '90%',
      height: 100,
      alignSelf: 'center',
    },
    available: {
      width: 25,
      height: 25,
    },
    hallContainer: {
      width: 50,
      height: 50,
      borderRadius: 4,
      backgroundColor: '#e7f0e9',
      borderRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    hitSlop: {
      top: 10,
      left: 10,
      right: 10,
      bottom: 10,
    },
  });