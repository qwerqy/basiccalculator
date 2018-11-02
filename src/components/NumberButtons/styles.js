const React = require('react-native');
const { StyleSheet } = React;

export default {

  container: {
    flex:1,
  },

  txtDefault: {
    color: '#ecf0f1',
    fontFamily: 'Roboto',
    fontSize: 20
  },

  test: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#f39c12',
    backgroundColor: '#e67e22'
  },

  contRow: {
    flex: 1,
    flexDirection: 'row'
  },

  contButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    borderColor: '#34495e'
  }
};
