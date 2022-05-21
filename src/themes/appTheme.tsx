import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        padding: 16,
        flex: 1,
    },
    calculatorContainer: {
        flex: 1,
        padding: 16,
        justifyContent: 'flex-end',
    },
    result: {
        color: '#000',
        fontSize: 50,
        textAlign: 'right',
    },
    result_small: {
        color: '#000',
        fontSize: 30,
        textAlign: 'right',
    },
    calculatorRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
        paddingLeft: 32,
    },
});
