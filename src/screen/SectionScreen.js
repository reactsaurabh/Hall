import React, {Component} from 'react';
import {
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
  safeArea: {flex: 1,backgroundColor:"white"},
});
