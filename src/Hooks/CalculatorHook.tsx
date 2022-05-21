import React, { useState, useRef } from 'react';

enum Operators {
    addition,
    substraction,
    multiplication,
    division,
}
export const CalculatorHook = () => {
    const [data, setData] = useState('30000');
    const [previousNumber, setPreviousNumber] = useState('0');
    const lastOperation = useRef<Operators>();
    const cleanData = () => {
        setData('0');
        setPreviousNumber('0');
    };

    const buildData = (numberText: string) => {
        // isDecimal

        if (data.includes('.') && numberText === '.') {
            return;
        }

        if (data.startsWith('0') || data.startsWith('-0')) {
            // isFirts Decimal Point

            if (numberText === '.') {
                setData(data + numberText);
                //Check another cero
            } else if (numberText === '0' && data.includes('.')) {
                setData(data + numberText);

                //Check is not cero and isNotDecimal
            } else if (numberText !== '0' && !data.includes('.')) {
                setData(numberText);
                //Prvent 00000000
            } else if (numberText === '0' && !data.includes('.')) {
                setData(data);
            }
        } else {
            setData(data + numberText);
        }
    };

    const positiveNegative = () => {
        if (data.includes('-')) {
            setData(data.replace('-', ''));
        } else {
            setData('-' + data);
        }
    };

    const btnDelLastData = () => {
        let negative = '';
        let numberTemp = data;

        if (data.includes('-')) {
            negative = '-';
            numberTemp = data.substr(1);
        }

        if (data.length > 1) {
            setData(negative + numberTemp.slice(0, -1));
        } else {
            setData('0');
        }
    };

    const changeCurrntlybyPrevious = () => {
        if (data.endsWith('.')) {
            setPreviousNumber(data.slice(0, -1));
        } else {
            setPreviousNumber(data);
        }

        setData('0');
    };

    const btnDivision = () => {
        changeCurrntlybyPrevious();
        lastOperation.current = Operators.division;
    };
    const btnMultiplication = () => {
        changeCurrntlybyPrevious();
        lastOperation.current = Operators.multiplication;
    };
    const btnSubstraction = () => {
        changeCurrntlybyPrevious();
        lastOperation.current = Operators.substraction;
    };
    const btnAddition = () => {
        changeCurrntlybyPrevious();
        lastOperation.current = Operators.addition;
    };
    const calculate = () => {
        const number_1 = Number(data);
        const number_2 = Number(previousNumber);

        switch (lastOperation.current) {
            case Operators.addition:
                setData(`${number_1 + number_2}`);
                break;
            case Operators.substraction:
                setData(`${number_2 - number_1}`);
                break;
            case Operators.multiplication:
                setData(`${number_1 * number_2}`);
                break;
            case Operators.division:
                setData(`${number_2 / number_1}`);
                break;
        }

        setPreviousNumber('0');
    };
    return {
        btnAddition,
        btnDelLastData,
        btnDivision,
        btnMultiplication,
        btnSubstraction,
        buildData,
        calculate,
        changeCurrntlybyPrevious,
        cleanData,
        data,
        lastOperation,
        positiveNegative,
        previousNumber,
    };
};
