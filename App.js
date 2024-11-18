import * as React from 'react';
import { View, StyleSheet, Platform, StatusBar } from 'react-native';
import { Button, Snackbar, Provider as PaperProvider, DefaultTheme } from 'react-native-paper';

const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#6200ee', 
    background: '#ffffff', 
    text: '#000000',
    surface: '#ffffff',
  },
};

const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const onToggleSnackBar = () => setVisible(!visible);

  const onDismissSnackBar = () => setVisible(false);

  return (
    <PaperProvider theme={lightTheme}>
      <View style={styles.container}>
        <Button onPress={onToggleSnackBar}>{visible ? 'Hide' : 'Show'}</Button>
        <Snackbar
          visible={visible}
          onDismiss={onDismissSnackBar}
          action={{
            label: 'Undo',
            onPress: () => {
              // Xử lý hành động Undo
            },
          }}
          style={styles.snackbar} // Tùy chỉnh Snackbar
        >
          Hey there! I'm a Snackbar.
        </Snackbar>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff', 
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  snackbar: {
    marginBottom: Platform.OS === 'ios' ? 20 : 10, 
  },
});

export default MyComponent;
