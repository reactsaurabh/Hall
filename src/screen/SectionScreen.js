import React, {Component} from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import {path} from '../Constants';
import Category from "../component/Category"
export default class SectionScreen extends Component {
  handlePress = (pushPath) => {
    this.props.navigation.navigate(pushPath);
  };
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Category
        handlePress={this.handlePress}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  container: {
    paddingTop: 20,
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: 'white',
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
