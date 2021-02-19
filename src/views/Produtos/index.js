import React from 'react';
import { SafeAreaView, View, StyleSheet, TouchableOpacity, Image, FlatList } from 'react-native';

//Assets
import logo from '../../../assets/LogoAmareLux.jpg'
import Prod1 from '../../../assets/Refrigerador_TF39.webp';
import Prod2 from '../../../assets/Refrigerador_DC35A.webp';
import Prod3 from '../../../assets/Refrigerador_TF42S.webp';
import Prod4 from '../../../assets/Ar_VI12F-VE12F.webp';
import Prod5 from '../../../assets/Ar_TI12R-TE12R.webp';
import Prod6 from '../../../assets/Fogão_52LBS.webp';
import Prod7 from '../../../assets/Fogão_76LSU.webp';
import Prod8 from '../../../assets/LavRoupas_LES09.webp';
import Prod9 from '../../../assets/LavRoupas_LES13.webp';
import Prod10 from '../../../assets/LavLouças_LV08B.webp';
import Prod11 from '../../../assets/LavLouças_LE08S.webp';
import Prod12 from '../../../assets/Microondas_MTD30.webp';
import Prod13 from '../../../assets/Microondas_MB37R.webp';
import Prod14 from '../../../assets/Microondas_MEF41.webp';

//Componente
import Produto from '../../components/Produto';

//Dados dos Produtos
const catalogo = 
[
    {
    cod_produtos:1,
    nome_prod:"geladeira",
    descricao:"Geladeira Frost Free 310 Litros Branco Electrolux (TF39)",
    valor:"R$ 2299,00",
    valor_unit:"R$ 1999,00",
    nome_img: <Image source={Prod1} style={{width:60, height:60}}/>,
    detalhe1: "Painel externo: Selecione a função Drink Express ou Turbo Congelamento",
    detalhe2: "Frost Free",
    detalhe3: "Prateleira retrátil no freezer"
    },
    {
    cod_produtos:2,
    nome_prod:"geladeira",
    descricao:"Geladeira Cycle Defrost 260L Branco Electrolux (DC35A)",
    valor:"R$ 1869,00",
    valor_unit:"R$ 1799,00",
    nome_img: <Image source={Prod2} style={{width:60, height:60}}/>,
    detalhe1: "Design Único com Puxador Ergonômico e Integrado",
    detalhe2: "Prateleira Porta-Latas Reversível para 5 Unidades",
    detalhe3: "Refrigerador com Super Freezer - 18º C"
    },
    {
    cod_produtos:3,
    nome_prod:"geladeira",
    descricao:"Geladeira Top Freezer cor Inox 382L Electrolux (TF42S)",
    valor:"R$ 3129,00",
    valor_unit:"R$ 2699,00",
    nome_img: <Image source={Prod3} style={{width:60, height:60}}/>,
    detalhe1: "Gavetão de frutas e legumes",
    detalhe2: "Prateleiras 100% removíveis",
    detalhe3: "Compartimento para alimentos frescos"
    },
    {
    cod_produtos:4,
    nome_prod:"ar",
    descricao:"Ar Condicionado Split 12.000 Btus Frio Linha Ecoturbo Electrolux (VI12F/VE12F)",
    valor:"R$ 1355,00",
    valor_unit:"R$ 1355,00",
    nome_img: <Image source={Prod4} style={{width:60, height:60}}/>,
    detalhe1: "Tecnologia turbo para temperaturas agradáveis mais rapidamente.",
    detalhe2: "Eficiência Energética A",
    detalhe3: "Unidade externa com chassi inoxidável"
    },
    {
    cod_produtos:5,
    nome_prod:"ar",
    descricao:"Ar Condicionado Split 12.000 Btus Quente/Frio Electrolux (TI12R/TE12R)",
    valor:"R$ 1709,00",
    valor_unit:"R$ 1709,00",
    nome_img: <Image source={Prod5} style={{width:60, height:60}}/>,
    detalhe1: "Sistema de Tripla Filtragem",
    detalhe2: "Função Auto-limpeza",
    detalhe3: "Função Siga-me: temperatura mantida onde está localizado o controle remoto."
    },
    {
    cod_produtos:6,
    nome_prod:"fogao",
    descricao:"Fogão 4 Bocas Electrolux Prata Automático Mesa de Vidro e Porta Full Glass (52LSV)",
    valor:"R$ 1599,00",
    valor_unit:"R$ 1499,00",
    nome_img: <Image source={Prod6} style={{width:60, height:60}}/>,
    detalhe1: "Mesa de vidro temperado",
    detalhe2: "Grades individuais esmaltadas",
    detalhe3: "Forno com duas prateleiras, uma manual e uma autodeslizante"
    },
    {
    cod_produtos:7,
    nome_prod:"fogao",
    descricao:"Fogão 5 Bocas Electrolux Prata Automático Ultra Chama e Vidro Removível (76LSU)",
    valor:"R$ 1899,00",
    valor_unit:"R$ 1999,00",
    nome_img: <Image source={Prod7} style={{width:60, height:60}}/>,
    detalhe1: "Potência de sobra",
    detalhe2: "Vidro interno do forno removível",
    detalhe3: "Grades duplas"
    },
    {
    cod_produtos:8,
    nome_prod:"lavaroupas",
    descricao:"Lavadora de Roupas Electrolux Essential Care 8,5kg (LES09)",
    valor:"R$ 1459,00",
    valor_unit:"R$ 1249,00",
    nome_img: <Image source={Prod8} style={{width:60, height:60}}/>,
    detalhe1: "Diluição inteligente para uma melhor lavagem",
    detalhe2: "Filtro pega fiapos",
    detalhe3: "Dispenser com dosador econômico"
    },
    {
    cod_produtos:9,
    nome_prod:"lavaroupas",
    descricao:"Lavadora de Roupas Electrolux Essencial Care 13kg (LES13)",
    valor:"R$ 1949,00",
    valor_unit:"R$ 1699,00",
    nome_img: <Image source={Prod9} style={{width:60, height:60}}/>,
    detalhe1: "Eficiente e sofisticada",
    detalhe2: "12 programas de lavagem",
    detalhe3: "Tecla Turbo Agitação"
    },
    {
    cod_produtos:10,
    nome_prod:"lavaloucas",
    descricao:"Lava-louças Electrolux Branca 8 Serviços (LV08B)",
    valor:"R$ 2199,00",
    valor_unit:"R$ 2199,00",
    nome_img: <Image source={Prod10} style={{width:60, height:60}}/>,
    detalhe1: "Programa Express 30 minutos",
    detalhe2: "Painel blue touch",
    detalhe3: "Classificação energética e performance de lavagem A" 
    },
    {
    cod_produtos:11,
    nome_prod:"lavaloucas",
    descricao:"Lava-Louças Electrolux 8 Serviços Cinza (LE08S)",
    valor:"R$ 2799,00",
    valor_unit:"R$ 2499,00",
    nome_img: <Image source={Prod11} style={{width:60, height:60}}/>,
    detalhe1: "Painel funcional",
    detalhe2: "Garantia de segurança",
    detalhe3: "Programas: Acquajet, Express 30', Delicado, Eco, Normal e Panelas."
    },
    {
    cod_produtos:12,
    nome_prod:"microondas",
    descricao:"Micro-Ondas Painel Seguro 20L Electrolux (MTD30)",
    valor:"R$ 539,00",
    valor_unit:"R$ 499,00",
    nome_img: <Image source={Prod12} style={{width:60, height:60}}/>,
    detalhe1: "10 níveis de potência",
    detalhe2: "Trava de segurança",
    detalhe3: "Tecla Início + 30 s"
    },
    {
    cod_produtos:13,
    nome_prod:"microondas",
    descricao:"Micro-Ondas Electrolux Branco 27L com 55 Receitas pré-programadas (MB37R)",
    valor:"R$ 639,00",
    valor_unit:"R$ 589,00",
    nome_img: <Image source={Prod13} style={{width:60, height:60}}/>,
    detalhe1: "Função Limpa Fácil e Função Tira-Odor",
    detalhe2: "Função Manter Aquecido",
    detalhe3: "Menu Faça Fácil"
    },
    {
    cod_produtos:14,
    nome_prod:"microondas",
    descricao:"Micro-Ondas Electrolux Meus Favoritos 31L (MEF41)",
    valor:"R$ 699,00",
    valor_unit:"R$ 599,00",
    nome_img: <Image source={Prod14} style={{width:60, height:60}}/>,
    detalhe1: "Painel simples e intuitivo",
    detalhe2: "Menu Light",
    detalhe3: "Display Digital"
    }
]

function Home (){


    return (
        <SafeAreaView style={styles.container}>

                <View style={styles.headerArea}>
                    <Image style={styles.headerLogo} source={logo} />
                </View>
                
                <View style={styles.containerCampanha}>
            
                    <FlatList
                        data={catalogo}
                        keyExtractor={(item) => `${item.cod_produtos}`}    
                        renderItem={({item}) => (
                            <TouchableOpacity>
                                <Produto 
                                    nome_img={item.nome_img} 
                                    descricao={item.descricao} 
                                    valor={item.valor}
                                    valor_unit={item.valor_unit}
                                />
                            </TouchableOpacity> 
                        )}
                    />

                </View>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    
    container: {
       flex:1,
       backgroundColor: '#041e50',
    },

    scroller: {
       flex:1,
    },

    headerArea: {
        width: '85%',
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent:'center'
    },

    headerLogo: {
        marginTop:50,
        marginLeft:60,
        width: 220,
        height: 80,
        borderRadius: 25,
    },

    searchArea: {
        backgroundColor: '#fff',
        height: 40,
        width: '80%',
        borderRadius: 10,
        flexDirection: 'row',
        alignSelf:'center',
        alignItems: 'center',
        paddingLeft: 30,
        paddingRight: 30,
        marginTop: 20,
        marginBottom: 20
    

    },

    searchInput: {
        flex: 1,
        fontSize: 16,
        color: '#959292'
    },

    mainArea: {
        marginTop:20,
        padding:20,
        flexDirection: 'column',
    },

 

    

  

})