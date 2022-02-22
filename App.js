import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { View, Text, SafeAreaView, Image} from 'react-native';
import Styles from './src/Styles';
import Slider from '@react-native-community/slider';

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {

            value: 0
        }

    }

    render() {

        let uri = './assets/logo.png';

        return (

            <SafeAreaView style={Styles.container}>

                <Image 
                    source={require(uri)}
                    style={Styles.logo}
                />

                <Text style={Styles.text}>Tamanho:  {this.state.value.toFixed(0)}   Caracteres</Text>

                    <Slider 
                        style={Styles.slider}
                        minimumValue={0}
                        maximumValue={20}
                        minimumTrackTintColor='#fff'
                        onValueChange={(selectedValue) => this.setState({value: selectedValue})}
                        value={this.state.value}
                        
                    />               

            </SafeAreaView>

        );

    }

}

export default App;


