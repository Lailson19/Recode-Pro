import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        height: Platform.OS === 'web' ? '100vh' : '100%'
    },
    fundo:{
        width: '100%',
        height:'100%',
        flex: 1,
        alignItems: 'center',
    },
    baseAvatar:{
        textAlign: 'center',
        marginTop: '20%',
        marginBottom: '10%',
    },
    avatar:{
        width: 120,
        height: 120,
        borderRadius: 100,
        borderWidth: 2,
        borderColor: '#fff',
    },
    nome:{
        fontSize: 30,
        color: '#fff'
    },
    lista:{
        width: '75%',
        paddingLeft: 20,
        paddingTop: 10,
        paddingBottom: 10,
        marginTop: 4,
        marginBottom: 4,
        backgroundColor: '#CDB4CE',
        borderRadius: 10,
        fontSize: 20,
        color: '#4B1C4D',
    },
    btn: {
        backgroundColor: '#4B1C4D',
        marginTop: 50,
        padding: 8,
        borderRadius: 4,
        borderRadius: 10,
        width: '75%',
    },
    texto: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center'
    }

})

export default styles;