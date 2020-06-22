import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  FlatList,
  Image,
  TextInput,
  View,
  Alert,
  Text,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Button,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default () => {
  useEffect(() => {
    (async () => {
      const text = await AsyncStorage.getItem('textInput');
      console.log(text);
      handleChange(text !== null && JSON.parse(text));
    })();
  }, []);
  const [field, handleChange] = useState();
  return (
    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'position' : 'height'} style={styles.container}>
      <FlatList
        data={testData}
        renderItem={({ item, index }) => {
          return (
            // <TouchableWithoutFeedback onPress={() => Alert.alert('test', 'message', [{ text: 'cancel' }, { text: 'ok' }])}>
            <View style={styles.flatItemContainer}>
              <Image resizeMode={'contain'} style={{ width: 100, height: 150 }} source={{ uri: item.url }} />
              <TouchableOpacity>
                <Text style={{ margin: 20 }}>title</Text>
              </TouchableOpacity>
            </View>
            /* </TouchableWithoutFeedback> */
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
      <TextInput
        onChangeText={(value) => {
          handleChange(value);
        }}
        value={field}
        style={{ fontSize: 14, borderWidth: 1, minWidth: 100 }}
      />
      <Button
        title={'save text'}
        style={{ width: 50, height: 20 }}
        onPress={async () => {
          const jsonValue = JSON.stringify(field);
          await AsyncStorage.setItem('textInput', jsonValue);
        }}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  flatItemContainer: {
    width: 100,
    height: 200,
    paddingTop: 20,
  },
});

const testData = [
  {
    albumId: 1,
    id: 1,
    title: 'accusamus beatae ad facilis cum similique qui sunt',
    url: 'https://via.placeholder.com/600/92c952',
    thumbnailUrl: 'https://via.placeholder.com/150/92c952',
  },
  {
    albumId: 1,
    id: 2,
    title: 'reprehenderit est deserunt velit ipsam',
    url: 'https://via.placeholder.com/600/771796',
    thumbnailUrl: 'https://via.placeholder.com/150/771796',
  },
  {
    albumId: 1,
    id: 3,
    title: 'officia porro iure quia iusto qui ipsa ut modi',
    url: 'https://via.placeholder.com/600/24f355',
    thumbnailUrl: 'https://via.placeholder.com/150/24f355',
  },
];
