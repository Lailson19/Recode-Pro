import React from 'react';
import { View, Text } from 'react-native';

const tarefas = [
    {
        nome: "Compras"
    },
    {
        nome: "Lava louça"
    }
]

function Tarefas(){
    return(
        <View>
            {
                tarefas.map((tarefa, index) => 
                <Text key={index}>{tarefa.nome}</Text>
                )
            }
        </View>
    )
}

export default Tarefas;