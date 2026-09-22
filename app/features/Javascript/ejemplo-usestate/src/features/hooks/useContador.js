import { COUNTER_CONSTANT_VALUES } from "../constants/contador.constants"

function useContador(setContador) {

    function handleIncrement() {
        setContador(prev => prev + COUNTER_CONSTANT_VALUES.INCREMENT_VALUE)
    }

    function handleDecrement() {
        setContador(prev => prev - COUNTER_CONSTANT_VALUES.DECREMENT_VALUE)
    }

    return {
        handleIncrement, handleDecrement
    }
}

export default useContador;
