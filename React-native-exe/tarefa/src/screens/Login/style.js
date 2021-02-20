import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
    caixa: {
        height: Platform.OS === 'web' ? '100vh' : '100%'
    },
    fundo: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        color: '#fff',
        fontSize: 32
    },
    inputs: {
        width: '100%',
        padding: '5%'
    },
    input: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 8,
        marginVertical: 6,
        borderRadius: 10
    },
    btn: {
        backgroundColor: 'purple',
        marginTop: 12,
        padding: 8,
        borderRadius: 4,
        borderRadius: 10
    },
    texto: {
        fontSize: 18,
        color: '#fff',
        textAlign: 'center'
    }
})

export default styles;