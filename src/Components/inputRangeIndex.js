import React, { useMemo, useRef } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import Svg, {Line} from "react-native-svg";
import {PanGestureHandler, State} from 'react-native-gesture-handler';
import Animated from "react-native-reanimated";

const {View: AView, Value, event, set} = Animated;

// panGestureHandler é um comp onde tudo que esta dentro dele pode ser movimentado
// state capta os movimentos

const { width } = Dimensions.get('window');

const WIDTH = width - 80;

const usePanGesture = () => {

    const transX = useRef(new Value(0)).current;
    const offsetX = useRef(new Value(0)).current;

    const onGestureHandle = useMemo(() => {

        return event([

            {
                nativeEvent: ({translateX: x, state}) => set(transX, x)
            }
        ])

    }, [transX, offsetX])

    return {transX, onGestureHandle}

}

const PanComponent = () => {

    const {transX, onGestureHandle} = usePanGesture();

    return (

        <PanGestureHandler onGestureEvent={onGestureHandle} onHandlerStateChange={onGestureHandle}>

            <AView style={[style.knob, {transform: [{translateX: transX}]}]} />

        </PanGestureHandler>
    )
}

const InputRange = (minValue, maxValue, onChangeMin, onChangeMax) => {

    return <View style={style.container}>

        <View style={style.trilho} />
        <View>

            <Svg height='6' width={WIDTH}>

                <Line stroke='#0077ff' strokeWidth='12' x1={100} y1={0} x2={WIDTH} y2={0} />

            </Svg>

        </View>

        <PanComponent />

    </View>

};

const style = StyleSheet.create({

    container: {

        marginHorizontal: 40,
        justifyContent: 'center'
    },

    trilho: {

        backgroundColor: '#dfdfdf',
        height: 6,
        borderRadius: 6,
        width: WIDTH,
        marginTop: 24
    },

    knob: {

        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#fff',
        position: 'absolute',
        elevation: 5,
        shadowColor: '#000',
        shadowRadius: 4,
        shadowOffset: {

            height: 2,
            width: 0
        },
        shadowOpacity: 0.3
    }
});

export default InputRange;