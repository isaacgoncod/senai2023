import { StyleSheet } from 'react-native';
export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        width: '100%',
        height: '80%',
        paddingHorizontal: 20,
    },
    item: {
        flex: 1,
        flexDirection: 'row',
    },
    button: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fa3',
        alignItems: 'center',
        color: '#fff',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
    },
    textButton: {
        fontSize: 18,
        color: '#fff',
        textShadowRadius: 1,
        textShadowColor: '#333',
        textShadowOffset: { width: 1, height: 1 },
    },
    textTotal: {
        width: '100%',
        textAlign: 'center',
        padding: 5,
        backgroundColor: '#fff',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        fontSize: 20,
        color: '#444',
        textShadowRadius: 1,
        textShadowColor: '#333',
        textShadowOffset: { width: 1, height: 1 },
    },
});