import React from 'react';
import {
  View,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableWithoutFeedback,
  TextInput,
  Linking,
} from 'react-native';

export default () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight style={styles.button} onPress={() => Linking.openURL('https://reactnative.dev/docs/linking')}>
        <TextInput style={styles.buttonText}>TouchableHighlight</TextInput>
      </TouchableHighlight>
      <TouchableOpacity style={styles.button}>
        <TextInput style={styles.buttonText}>TouchableOpacity</TextInput>
      </TouchableOpacity>
      {/* <></> === <TouchableWithoutFeedBack/> */}
      <TextInput style={[styles.buttonText, { color: 'black' }]}>TouchableWithoutFeedback</TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    width: '70%',
    height: '15%',
    backgroundColor: 'blue',
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center',
  },
});
