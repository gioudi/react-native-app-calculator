import React, { useState, useRef } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { ButtonCal } from '../Components/ButtonCal';
/* import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'; */
import { styles } from '../themes/appTheme';
import { CalculatorHook } from '../Hooks/CalculatorHook';

export const CalculatorScreen = () => {
    const {
        previousNumber,
        data,
        cleanData,
        positiveNegative,
        btnDelLastData,
        btnDivision,
        btnAddition,
        btnMultiplication,
        btnSubstraction,
        buildData,
        calculate,
    } = CalculatorHook();

    return (
        <View style={styles.calculatorContainer}>
            {previousNumber !== '0' && (
                <Text style={styles.result_small}>{previousNumber}</Text>
            )}
            <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>
                {data}
            </Text>
            <View style={styles.calculatorRow}>
                {/* Button */}
                <ButtonCal text="C" action={cleanData} />
                <ButtonCal text="+/-" action={positiveNegative} />
                <ButtonCal text="del" action={btnDelLastData} />
                <ButtonCal text="/" background="#ff9427" action={btnDivision} />
            </View>
            <View style={styles.calculatorRow}>
                {/* Button */}
                <ButtonCal text="7" action={buildData} />
                <ButtonCal text="8" action={buildData} />
                <ButtonCal text="9" action={buildData} />
                <ButtonCal text="*" background="#ff9427" action={btnMultiplication} />
            </View>
            <View style={styles.calculatorRow}>
                {/* Button */}
                <ButtonCal text="4" action={buildData} />
                <ButtonCal text="5" action={buildData} />
                <ButtonCal text="6" action={buildData} />
                <ButtonCal text="-" background="#ff9427" action={btnSubstraction} />
            </View>
            <View style={styles.calculatorRow}>
                {/* Button */}
                <ButtonCal text="1" action={buildData} />
                <ButtonCal text="2" action={buildData} />
                <ButtonCal text="3" action={buildData} />
                <ButtonCal text="+" background="#ff9427" action={btnAddition} />
            </View>
            <View style={styles.calculatorRow}>
                {/* Button */}
                <ButtonCal text="0" action={buildData} wide />
                <ButtonCal text="." action={buildData} />

                <ButtonCal text="=" background="#ff9427" action={calculate} />
            </View>
        </View>
    );
};
