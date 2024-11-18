import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Tooltip from 'react-native-walkthrough-tooltip';

const App = () => {
  const [toolTipVisible, setToolTipVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleStyle}>
          Example of Tooltip in React Native for Android and IOS
        </Text>
        <Tooltip
          animated={true}
          arrowSize={{ width: 16, height: 8 }}
          backgroundColor="rgba(0,0,0,0.5)"
          isVisible={toolTipVisible}
          content={<Text>Hello! AboutReact</Text>}
          placement="bottom"
          onClose={() => setToolTipVisible(false)}
        >
          <TouchableHighlight
            style={styles.buttonStyle}
            onPress={() => setToolTipVisible(true)}
          >
            <Text style={styles.buttonTextStyle}>
              Say Hi to AboutReact
            </Text>
          </TouchableHighlight>
        </Tooltip>
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
