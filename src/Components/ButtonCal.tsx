import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    TouchableOpacity,
    View,
} from 'react-native';
interface Props {
    text: string;
    background?: string;
    wide?: boolean;
    action: (payload: string) => void;
}
export const ButtonCal = ({
    text,
    background = '#2d2d2d',
    wide = false,
    action,
}: Props) => {
    const styles = StyleSheet.create({
        button: {
            height: 60,
            padding: 10,
            borderRadius: 60,

            display: 'flex',
            justifyContent: 'center',
            margin: 5,
        },
        buttonText: {
            textAlign: 'center',
            color: '#fff',
            fontWeight: '600',
            fontSize: 14,
        },
    });
    return (
        <TouchableOpacity onPress={() => action(text)}>
            <View
                style={[
                    styles.button,
                    { backgroundColor: background, width: wide ? 140 : 60 },
                ]}>
                <Text
                    style={[
                        styles.buttonText,
                        { color: background === '#9b9b9b' ? 'black' : 'white' },
                    ]}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    );
};
