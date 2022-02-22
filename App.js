import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { Text, SafeAreaView, Image} from 'react-native';
import Styles from './styles/styles.js';
import InputRange from './src/Components/inputRangeIndex.js';

const App = function () {

        let uri = './assets/logo.png';

        return (

            <SafeAreaView style={Styles.container}>

                <Image 
                    source={require(uri)}
                    style={Styles.logo}
                />

                <Text style={Styles.text}>Tamanho Caracteres</Text>

                <InputRange 
                  
                    minValue={5}
                    maxValue={20}
                    onChangeMin = {(v) => console.log(v)} 
                    onChangeMax = {(v) => console.log(v)}
               
                />

            </SafeAreaView>

        );

}

export default App;


