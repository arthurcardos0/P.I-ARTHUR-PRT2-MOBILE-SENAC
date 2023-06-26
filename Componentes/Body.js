import React from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity, Alert } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';

import pessoa from "../assets/pessoa.png";
import eyre from "../assets/eyre.png";
import icone1 from "../assets/icone1.png";
import funcionario from "../assets/funcionario.png";
import chave from "../assets/chave.png";
import sino from "../assets/sino.png";


export default function Header() {
    return (

        // ========================================= TOPO ============================================
        <View>
            <View style={estilo.fundoTopo}>
                <Image source={eyre} style={estilo.logo} />
                <Image source={pessoa} style={estilo.icone}/>
            </View>

            <View>
                <Text style={estilo.noti}>NOTIFICAÇÕES</Text>
            </View>

            {/* ====================================== NOTIFICAÇÃO UM ====================================== */}
            <View style={estilo.fundo1}>
            
            <View>
                <TouchableOpacity>
                    <Text style={estilo.notificacao1}>"Sua reserva no Hotel Fasano em Salvador começa em breve.
                        Verifique se você tem todas as informações necessárias em 
                        seu aplicativo para uma chegada tranquila."🏨</Text>
                </TouchableOpacity>
            </View>
            <Image source={icone1} style={estilo.icone1}/>
            </View>

            {/* =================================== NOTIFICAÇÃO DOIS ====================================== */}
             <View style={estilo.fundo2}>

             <View>
                <TouchableOpacity>
                <Text style={estilo.notificacao2}>"Uma nova oferta de viagem para o destino Bonito 
                acabou de ser adicionada ao nosso aplicativo. Verifique agora para 
                economizar em sua próxima viagem!"🛳️</Text>
                </TouchableOpacity>
            </View>
            <Image source={funcionario} style={estilo.funcionario}/>
            </View> 

            {/* ================================== NOTIFICAÇÃO TRES ========================================== */}
            <View style={estilo.fundo3}>

            <View>
                <TouchableOpacity>
                <Text style={estilo.notificacao3}>"Não se esqueça de completar sua avaliação
                 sobre sua recente viagem para Gramado. Sua opinião é importante 
                 para ajudar outros viajantes a escolherem a opção.."🏕️</Text>
                </TouchableOpacity>
            </View>
            <Image source={chave} style={estilo.chave}/>
            </View> 

            {/* ================================== NOTIFICAÇÃO QUATRO ====================================== */}
            <View style={estilo.fundo4}>

            <View>
                <TouchableOpacity>
                <Text style={estilo.notificacao4}>"Aproveite o sol na praia de Copacabana! 
                Reserve sua viagem agora e ganhe 10% de desconto!"🏖️</Text>
                </TouchableOpacity>
            </View>
            <Image source={sino} style={estilo.sino}/>
            </View>

            {/* =================================== ACABOU ==================================================*/}
        </View>
    )
}
const estilo = StyleSheet.create({
    //TOPO ===========================
    fundoTopo:{
        backgroundColor: "white",
    },

    logo: {
        marginTop: -40,
        marginHorizontal: 140,
        width: 130,
        height: 170,
    },

    icone: {
        marginTop: -100,
        marginHorizontal: 350,
        width: 35,
        height: 35,
    },

    noti: {
        borderRadius: 10,
        backgroundColor: "#0DD5F8",
        textAlign: "justify",
        marginHorizontal: 150,
        marginVertical: 40,
        width: 130,
        height: 30,
        paddingHorizontal: 15,
        paddingVertical: 5,
    },

    //NOTIFICAÇÃO UM =============================
    fundo1: {
        backgroundColor: "#F1F3F6",
        borderRadius: 20,
        width: 320,
        height: 100,
        marginHorizontal: 45,
        marginVertical: 20,
    },
    
    notificacao1: {
        textAlign: "justify",
        paddingHorizontal: 27,
        paddingVertical: 15,
    },

    icone1:{
        width: 55,
        height: 55,
        marginVertical: -120,
        marginHorizontal: -25,
    },

    //NOTIFICAÇÃO DOIS ===========================
    fundo2: {
        backgroundColor: "#F1F3F6",
        borderRadius: 20,
        width: 320,
        height: 105,
        marginHorizontal: 45,
        marginVertical: 20,
    },
    
    notificacao2: {
        textAlign: "justify",
        paddingHorizontal: 27,
        paddingVertical: 15,
    },

    funcionario:{
        width: 105,
        height: 105,
        marginVertical: -145,
        marginHorizontal: -50,
    },

    //NOTIFICAÇÃO TRÊS ==========================
    fundo3: {
        backgroundColor: "#F1F3F6",
        borderRadius: 20,
        width: 320,
        height: 120,
        marginHorizontal: 45,
        marginVertical: 30,
    },
    
    notificacao3: {
        textAlign: "justify",
        paddingHorizontal: 30,
        paddingVertical: 15,
    },

    chave:{
        width: 105,
        height: 105,
        marginVertical: -163,
        marginHorizontal: -50,
    },

    //NOTIFICAÇÃO QUATRO =======================
    fundo4: {
        backgroundColor: "#F1F3F6",
        borderRadius: 20,
        width: 320,
        height: 90,
        marginHorizontal: 45,
        marginVertical: 20,
    },
    
    notificacao4: {
        textAlign: "justify",
        paddingHorizontal: 27,
        paddingVertical: 15,
    },

    sino:{
        width: 105,
        height: 105,
        marginVertical: -130,
        marginHorizontal: -50,
    },
})