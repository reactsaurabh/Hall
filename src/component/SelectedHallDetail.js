import React from 'react';
import {
  View,
  StyleSheet,
  Text,
} from 'react-native';
export default function SelectedHallDetail({data}) {
  if (!data.value) return null;
  return (
    <View style={styles.detailContainer}>
      <View style={styles.lableContainer}>
        <Text style={styles.label}>Name :</Text>
        <Text style={styles.text}>{data.label}</Text>
      </View>
      <View style={styles.lableContainer}>
        <Text style={styles.label}>Capacity :</Text>
        <Text style={styles.text}>{data.capacity}</Text>
      </View>
      <View style={styles.lableContainer}>
        <Text style={styles.label}>Price :</Text>
        <Text style={styles.text}>${data.price}</Text>
      </View>
      <View style={styles.lableContainer}>
        <Text style={styles.label}>Outside Food Allowed :</Text>
        <Text style={styles.text}>{data.foodAllowed}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  lableContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  detailContainer: {
    width: '70%',
    alignSelf: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 16,
    marginLeft: 5,
  },
});
