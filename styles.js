import Exponent from 'expo';
const React = require('react-native');
const { StyleSheet } = React;

export default {

  container: {
    flex:1,
    flexDirection: 'column',
    marginTop: Exponent.Constants.statusBarHeight
  },

  contHistory:{
    flex: 0.3,
    borderBottomWidth: 1,
    borderColor: '#000',
  },

  contOutput:{
    flex: 0.1,
  },

  contButtons:{
    flex: 0.6,
    backgroundColor: '#2c3e50'
  },

  placeHolderOutput: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingRight: 15,
    paddingLeft: 15
  },

  txtDefault: {
    color: '#000',
    fontFamily: 'Roboto',
    fontSize: 30
  }

};
