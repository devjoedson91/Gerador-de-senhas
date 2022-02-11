import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

class App extends Component {

    render() {

        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          },
        });

        return (

          <View style={styles.container}>
            <Text style={{color: 'red'}}>Open up App.js to start working on your app!</Text>
          </View>

        )

    }


}

export default App;


