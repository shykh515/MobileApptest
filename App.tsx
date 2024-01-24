import { Dimensions, StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Root from './src/routing/Root';
import Auth from './src/routing/Auth';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themes } from './src/theme/colors';

const App: React.FC = () => {
  const {userData}  = useSelector(state => state.UserProfileSlice);
  const { access_token , user } = userData?.session
  const WIDTH = Dimensions.get('window').width;
  const HEIGHT = Dimensions.get('window').height;

  return (
    <View style={{flex: 1}}>
    <SafeAreaView
      style={{
        width: WIDTH,
        height: HEIGHT,
        flex: 1,
      }}>
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor={themes.light.colors.lightBorderColor}
          barStyle="light-content"
        />
        {!access_token ? <Auth /> :<Root />}
      </View>
    </SafeAreaView>
  </View>
  )
};

export default App;

const styles = StyleSheet.create({});
