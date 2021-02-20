import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Alert } from 'react-native';

import styles from './style';

const apiusuario = {
    id: 1,
    email: 'lailson@123',
    senha: '123'
}

function Login({navigation}){

    function autenticacao(){
        if (apiusuario.email === usuario && apiusuario.senha === senha){
            navigation.navigate("Tarefas");
        }else{
            Alert.alert("Usuário inválido!", "Esse usuário não existe.")
        }
    }

    const [usuario, setUsuario] = React.useState('');
    const [senha, setSenha] = React.useState('');

    return(
        <View style={styles.caixa}>
            <ImageBackground
            source={require('../../../assets/fundo.jpg')}
            style={styles.fundo}>



                <View>
                    <Text style={styles.icone}>[ ]</Text>
                </View>

                <View>
                    <Text style={styles.titulo}>Faça seu login</Text>
                </View>

                <View style={styles.inputs}>

                    <TextInput style={styles.input}
                        placeholder="Digite o email..."                        
                        value={usuario}
                        onChangeText={(text) => setUsuario(text)}
                    />

                    <TextInput style={styles.input} 
                        placeholder="Digite o senha..."                        
                        secureTextEntry={true}
                        value={senha}
                        onChangeText={(text) => setSenha(text)}
                    />

                    <TouchableOpacity style={styles.btn} onPress={autenticacao}>
                        <Text style={styles.texto}>Entrar</Text>
                    </TouchableOpacity>

                </View>
                <View>
                    <Text style={styles.direito}>&copy;Copywriter |  Lailson Andesson</Text>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login;