import React from 'react';
import {View, StyleSheet} from 'react-native';
import ImageCard from '../ImageCardDescription';
import {foodData} from '../../utils';
export default function FoodList(props) {
  return (
    <View style={{flex: 1}}>
      {foodData.map((item) => (
        <View style={styles.wrapper}>
          <ImageCard cardData={item} imageUrl={item.image} cardData={item} />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
});
