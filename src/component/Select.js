import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ModalSelector from 'react-native-modal-selector';

export default function Select(props) {
  const {data, onChange, selectedElement} = props;
  return (
    <View>
      <ModalSelector
        data={data}
        onChange={(option) => {
          onChange(option);
        }}>
        <View style={styles.pickerText} key={selectedElement.label}>
          <Text>{selectedElement.label}</Text>
        </View>
      </ModalSelector>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerText: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#caede7',
  },
});
