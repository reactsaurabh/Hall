import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  Dimensions,
  Platform
} from 'react-native';
import Image from '../common/Image';

const {width, height} = Dimensions.get('window');
export default function ImageCardDescription(props) {
  const {name, price, cuisine} = props.cardData;
  return (
    <View style={styles.container}>
      <View style={styles.infoConatiner}>
        <TouchableOpacity onPress={props.handlePress} activeOpacity={1}>
          <Image source={props.imageUrl} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.info}>
          <Text style={styles.title}>{name}</Text>
          <View style={styles.descItem}>
            <Text>Price :</Text>
            <Text>{price}</Text>
          </View>
          <View style={styles.descItem}>
            <Text>Cuisine :</Text>
            <Text>{cuisine}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: width / 2,
    height: Platform.OS==="ios"?height / 7:height / 5,
    resizeMode: 'cover',
  },
  container: {
    borderBottomWidth: 1,
    paddingVertical: 20,
    borderBottomColor: '#e6ebe7',
  },
  infoConatiner: {
    flexDirection: 'row',
    borderRadius: 8,
    overflow: 'hidden',
  },
  info: {
    width: width / 2,
    color: 'black',
    marginLeft: 10,
  },
  descItem: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
});
