import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Colors} from '../../Colors';
import Accordian from '../Accordain';
export default function ShowAnnouncement({accordainData}) {
  return (
    <View style={styles.container}>
      {accordainData.map((item) => (
        <Accordian title={item.title} data={item.data} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //  paddingTop:100,
    //  backgroundColor:Colors.PRIMARY,
  },
});
