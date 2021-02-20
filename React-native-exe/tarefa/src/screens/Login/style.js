import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        height: Platform.OS === 'web' ? '100vh' : '100%'
    },
    fundo: {
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulo: {
        color: '#fff',
        fontSize: 18,
        fontStyle: 'italic',
    },
    inputs: {
        width: '90%',
        padding: '5%',
    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 8,
        marginVertical: 8,
        borderRadius: 10,

    },
    btn: {
        backgroundColor: '#4B1C4D',
        marginTop: 18,
        padding: 8,
        borderRadius: 4,
        borderRadius: 10
    },
    texto: {
        fontSize: 18,
        color: '#CDB4CE',
        textAlign: 'center'
    },
    direito:{
        color: '#CDB4CE',
        marginBottom: 100,
    },
    icone:{
        color: '#CDB4CE',
        fontSize: 130,
        marginVertical: 20
    }
})

export default styles;