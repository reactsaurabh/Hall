import React, {Component} from 'react';
import {View, TouchableOpacity, Image, StyleSheet, Text} from 'react-native';
import {path} from '../Constants';
export default class SectionScreen extends Component {
  handlePress = () => {
    this.props.navigation.navigate(path.AVAILABLEHALL);
  };
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.hallContainer}
          onPress={this.handlePress}
          activeOpacity={0.8}
          hitSlop={styles.hitSlop}
          >
          <Image
            source={require('../assets/parliament.png')}
            style={styles.available}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    backgroundColor:"white",
    paddingHorizontal:10
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
    backgroundColor:"#e7f0e9",
    borderRadius:25 ,
    justifyContent:"center",
    alignItems:"center"
  },
  hitSlop:{
    top:10,left:10,right:10,bottom:10
  }
});
