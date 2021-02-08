import { StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { ActiveLayout, HappyImage, SadImage, TitleImage, ButtonContainer, ButtonText } from './app.styles';
import {LinearGradient} from 'expo-linear-gradient';
import React, {Component} from 'react';
import firebase from 'firebase';

class App extends Component {
    constructor() {
        super();
        this.state = {
            isSeger: null,
            url: null
        };
    }

    componentDidMount() {
        const key = firebase.database().ref('isSeger/');
        key.once("value").then((result) => {
            this.setState({isSeger: result.val()});
        });

        const url = firebase.database().ref('segerURL/');
        url.once("value").then((result) => {
            this.setState({url: result.val()});
        });
    }

    render() {
        const {isSeger, url} = this.state;
        console.log('isSeger', isSeger);
        if (isSeger === null) {
            return null
        } else if (isSeger == 0) {
            return <LinearGradient
                colors={['#27C7CB', '#5FED75', '#EEE415']}
                style={styles.linearGradient}
            >
                <ActiveLayout>
                    <TitleImage
                        resizeMode='cover' style={[styles.image, {overflow: 'visible'}]}
                        source={require('../resources/no_seger.png')}/>
                    <HappyImage source={require('../resources/happy.png')}/>
                    <ButtonContainer>
                        <LinearGradient
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                            colors={['#01DB50', '#0FBD9B', '#11A4DA']}
                            style={styles.buttonLinearGradient}>
                            <TouchableOpacity style={styles.buttonStyles} onPress={() => {
                                Linking.openURL(url)
                            }}>
                                <ButtonText> להנחיות נוספות</ButtonText>
                            </TouchableOpacity>
                        </LinearGradient>
                    </ButtonContainer>
                </ActiveLayout>
            </LinearGradient>
        } else {
            return <LinearGradient
                colors={['#CD2457', '#EA516D', '#F68F2D']}
                style={styles.linearGradient}
            >
                <ActiveLayout>

                    <TitleImage
                        resizeMode='cover' style={[styles.image, {overflow: 'visible'}]}
                        source={require('../resources/is_seger.png')}/>
                    <SadImage source={require('../resources/sad.png')}/>

                    <ButtonContainer>
                        <LinearGradient
                            start={{x: 0, y: 0}} end={{x: 1, y: 0}}
                            colors={['#F11336', '#F7341D', '#FE5505']}
                            style={styles.buttonLinearGradient}>
                        <TouchableOpacity style={styles.buttonStyles} nPress={() => {
                            Linking.openURL(url)
                        }}>
                            <ButtonText> להנחיות נוספות</ButtonText>
                        </TouchableOpacity>
                        </LinearGradient>
                    </ButtonContainer>
                </ActiveLayout>
            </LinearGradient>
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: '100%',
        width: '100%',
    },
    buttonLinearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
        height: '80%',
        width: '90%',
        borderColor: 'white',
        borderWidth: 10
    },
    buttonStyles: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        height: 300,
        width: 1000,
    }
})

export default App;
