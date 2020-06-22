/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { SafeAreaView, StatusBar, Platform, StyleSheet } from 'react-native';

const App = () => {
  return Platform.OS === 'ios' ? (
    <SafeAreaView style={styles.topSpacingApp} forceInset={{ top: 'always' }}>
      <StatusBar hidden={false} barStyle={'dark-content'} />
      {/* ios */}
    </SafeAreaView>
  ) : (
    <>{/* android */}</>
  );
};

const styles = StyleSheet.create({
  topSpacingApp: {
    flex: 1,
    paddingTop: Platform.OS === 'ios' ? 20 : StatusBar.currentHeight,
  },
});

export default App;
