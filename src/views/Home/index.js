import React from 'react'
import {Text, View, StyleSheet, SafeAreaView, ImageBackground, Image} from 'react-native'

import homeImg from '../../../assets/home.png';


const Home = () => {
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={homeImg} style={styles.loginImg}>
        <View style={styles.container}>
        <Image source={require('../../../assets/LogoAmareLux.jpg')}
            style={styles.logo} />
        </View>
        </ImageBackground>
            <View style={styles.background}>
                <Text style={styles.title}>Seja bem vindx!</Text>
                <Text style={styles.subTitle}>Aqui em nossa loja, programadores têm desconto 
                nos produtos para sua casa!</Text>
            </View>
        </SafeAreaView>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
  
    background: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: "#ededeb"
    },

    logo: {
        padding:20,
        marginLeft:60,
        marginTop:100,
        marginBottom:50,
        width: 220,
        height: 80,
        borderRadius: 25
      },
      loginImg: {
        padding:20,
        height: 350,
        borderRadius: 25
      },
    title: {
        fontSize: 35,
        fontWeight:'bold',
        textAlign: 'center',
        marginBottom:30,
        color:"#041e50"
    },

    subTitle: {
        fontSize: 18,
        textAlign: 'center',
        color:"#041e50"
    }
  });
  