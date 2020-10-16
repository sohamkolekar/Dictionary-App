
import React from 'react';
import { StyleSheet, View } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';

export default class App extends React.Component {
  render(){
    return (
      <View>
        <AppContainer/>

      </View>
    );
  }
}

var AppNavigator=createSwitchNavigator({
  HomeScreen:HomeScreen

})

const AppContainer=createAppContainer(AppNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 