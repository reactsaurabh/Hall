import React, {Component} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {hall} from '../utils';
import SelectedHallDetail from '../component/SelectedHallDetail';
import Select from '../component/Select';
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
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <View style={styles.pickerContainer}>
            <Select
              data={hall}
              onChange={this.handleChange}
              selectedElement={selectedHall}
            />
          </View>
          <SelectedHallDetail data={selectedHall} />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {flex: 1},
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
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
});
