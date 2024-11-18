import React, { useRef } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
import ActionSheet from 'react-native-actionsheet';

const App = () => {
  let actionSheet = useRef();
  var optionArray = [
    'Option 1',
    'Option 2',
    'Option 3',
    'Option 4',
    'Cancel'
  ];

  const showActionSheet = () => {
    actionSheet.current.show();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          React Native Bottom Action Menu
        </Text>
        <TouchableHighlight
          style={styles.buttonStyle}
          onPress={showActionSheet}>
          <Text style={styles.buttonTextStyle}>
            Open Bottom ActionSheet
          </Text>
        </TouchableHighlight>

        <ActionSheet
          ref={actionSheet}
          title={'Which one do you like ?'}
          options={optionArray}
          cancelButtonIndex={4}
          destructiveButtonIndex={1}
          onPress={(index) => {
            alert(optionArray[index]);
          }}
        />
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    textAlign: 'center',
    paddingTop: 30,
    backgroundColor: '#307ecc',
    padding: 16,
  },
  buttonStyle: {
    width: '100%',
    height: 40,
    padding: 10,
    backgroundColor: '#f5821f',
    marginTop: 30,
  },
  buttonTextStyle: {
    color: 'white',
    textAlign: 'center',
  },
  titleStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    marginTop: 10,
  },
});
