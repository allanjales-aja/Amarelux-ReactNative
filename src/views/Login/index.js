import React from 'react';
import { StyleSheet, View, Image, TextInput, Text, TouchableOpacity,ImageBackground } from 'react-native';

import loginImg from '../../../assets/login.png';


const Login = ({navigation}) =>  {
  
  const pgInicial = (screen) => {
    navigation.navigate(screen)
}

  return (
<ImageBackground source={loginImg} style={styles.container}>
    <View style={styles.container}> 
        <Image source={require('../../../assets/LogoAmareLux.jpg')}
            style={styles.logo} />

        <TextInput style={styles.input}
            placeholder="Email..."  />

        <TextInput style={styles.input}
            placeholder="Senha..." 
            secureTextEntry={true} />

        <TouchableOpacity style={styles.loginBtn} onPress={() => pgInicial('Inicio') }>
            <Text  style={styles.loginTxt}>LOGIN</Text>
        </TouchableOpacity>

    </View>
</ImageBackground>
  )}

export default Login 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* backgroundColor: '#011245', */
/*     alignItems: 'center',
    justifyContent: 'center', */
  },
  logo: {
    padding:20,
    marginLeft:60,
    marginTop:180,
    marginBottom:50,
    width: 220,
    height: 80,
    borderRadius: 25
  },
  input: {
    padding:10,
    marginLeft:30,
    marginBottom:10,
    width: 180,
    backgroundColor: '#0063B2',
    height: 40,
    fontSize: 15,
    color: "#f8e36e",
    borderRadius: 25
  },
  loginTxt:{
    color:"#011245",
    fontSize: 18,
    alignItems:"center",
    justifyContent:"center",
  },
  loginBtn:{
    width:200,    
    backgroundColor:"#f4d010",
    borderRadius:25,
    height:45,
    alignItems:"center",
    justifyContent:"center",
    marginLeft:60,
    marginTop:40,
    marginBottom:10
  },
})