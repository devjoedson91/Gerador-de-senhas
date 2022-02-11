import React, {Component} from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';

class App extends Component {

    render() {

        const styles = StyleSheet.create({
          container: {
            flex: 1,
            backgroundColor: '#181818',
            alignItems: 'center',
            justifyContent: 'center',
                        
          },

          logo: {

            marginBottom: 24,
            maxWidth: 300,
            resizeMode: 'contain'

          },

          text: {

            color: '#fff'

          }


        });

        let uri = './assets/logo.png';

        return (

          <View style={styles.container}>

              <Image 
                  source={require(uri)}
                  style={styles.logo}
              />

              <Text style={styles.text}>Tamanho Caracteres</Text>


          </View>

        )

    }


}

export default App;


