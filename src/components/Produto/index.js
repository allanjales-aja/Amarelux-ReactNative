import React from 'react';
import { View, Text, StyleSheet} from 'react-native';



const Produto = (props) => {        
    return (
        <View style={styles.container}>
    
                <Text>{props.nome_img}</Text>
                <View>
                    <Text style={styles.descricao}>{props.descricao}</Text>
                    <Text style={styles.preco}>{props.valor}</Text>
                    <Text style={styles.precoFinal}>{props.valor_unit}</Text>
                </View>
        
        </View>
    )
}

export default Produto;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignSelf:'center',
        width: '85%',
        padding: 10,
        margin: 10,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        
        shadowColor: "#CCC",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
    },

    descricao: {
        color:'#041e50',
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 45,
        marginBottom: 5,
        marginTop: 5
    },

    preco: {
        color:'#000',
        fontSize: 14,
        marginBottom: 5,
        marginLeft: 100,
        textDecorationLine: 'line-through'
    },

    precoFinal: {
        color:'#E80A0A',
        fontSize: 18,
        marginLeft: 90,
    }


})