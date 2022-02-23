import React, {Component} from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import Styles from './src/Styles';
import Slider from '@react-native-community/slider';
import CopyToClipboard from 'react-copy-to-clipboard';

class App extends Component {

    constructor(props) {

        super(props);

        this.state = {

            value: 10,
            password: '',
            copied: false
        }

        this.getPassword = this.getPassword.bind(this);
        
    }

    getPassword() {

        let charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567891@#$%&';
        let pass = '';

        for (let i = 0, n = charset.length; i < this.state.value; i++) {

            pass += charset.charAt(Math.floor(Math.random() * n));

        }

        this.setState({
            password: pass
        });

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

                <TouchableOpacity style={Styles.buttonCta} onPress={() => this.getPassword()}>

                    <View style={Styles.btnArea}>
                      <Text style={Styles.btnText}>Gerar Senha</Text>
                    </View>
                    
                </TouchableOpacity>

                {this.state.password.length > 0 && (

                    <CopyToClipboard text={this.state.password} onCopy={() => this.setState({copied: true})}>

                        <TouchableOpacity 
                            style={Styles.containerPassword}
                            onPress={() => (this.state.copied) ? alert('Copiado') : null}
                        >

                            <View style={Styles.btnArea}>
                                <Text style={Styles.btnText}>Sua senha gerada foi: </Text>
                                <Text style={Styles.btnText}>{this.state.password}</Text>
                                <Text style={Styles.btnText}>Clique aqui para copiar a senha</Text>
                            </View>
                                    
                        </TouchableOpacity>
                    </CopyToClipboard>

                )}


            </SafeAreaView>

        );

    }

}

export default App;


