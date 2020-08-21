import React, {Component} from 'react';
import {View, StyleSheet, Picker, Text} from 'react-native';
import {hall} from '../utils';
import SelectedHallDetail from '../component/SelectedHallDetail';
import ModalSelector from 'react-native-modal-selector';

export default class SelectHall extends Component {
  state = {
    selectedHall: {label: 'Select Hall'},
  };

  handleChange = (itemValue) => {
    if (itemValue) {
      this.setState({selectedHall: itemValue});
    }
  };
  render() {
    const {selectedHall} = this.state;
    return (
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View style={styles.pickerContainer}>
          <ModalSelector
            data={hall}
            initValue={'Select Hall'}
            onChange={(option) => {
              this.handleChange(option);
            }}>
            <View style={styles.pickerText}>
              <Text>{selectedHall.label}</Text>
            </View>
          </ModalSelector>
        </View>
        <SelectedHallDetail data={selectedHall} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pickerContainer: {
    width: '70%',
    height: 40,
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 20,
  },
  picker: {
    width: '100%',
    height: '100%',
  },
  modal: {
    borderColor: 'black',
    color: 'black',
  },
  pickerText: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#caede7',
  },
});
