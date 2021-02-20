import React from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './style';

const tarefas = [
    {
        nome: "Compras"
    },
    {
        nome: "Ligar na manutenção"
    },
    {
        nome: "Jogar o lixo"
    },
    {
        nome: "Cinema na sexta"
    }
]

function Tarefas({navigation}){

    function sair(){
        return navigation.navigate("Login");
    }

    return(
        <View style={styles.caixa}>
            <ImageBackground
            source={require('../../../assets/fundo.jpg')}
            style={styles.fundo}>

                <View style={styles.baseAvatar}>
                    <Image
                    style={styles.avatar}
                    source={require('../../../assets/Lailson.jpg')}
                    resizeMode={'cover'}
                    />

                    <Text style={styles.nome}>
                        Lailson
                    </Text>
                </View>

                {
                    tarefas.map((tarefa, index) => 
                    <Text style={styles.lista} key={index}>
                        {tarefa.nome}
                    </Text>
                    )
                }

                <TouchableOpacity style={styles.btn} 
                onPress={sair}>
                    <Text style={styles.texto}>
                        Sair
                    </Text>
                </TouchableOpacity>

            </ImageBackground>
        </View>
    )
}

export default Tarefas;