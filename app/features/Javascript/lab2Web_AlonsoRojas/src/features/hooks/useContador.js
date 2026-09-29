import { useState } from "react";
import constants from "../constants/constants";

function useContador(nombres, setNombres) {
    const [mensaje, setMensaje] = useState("");

    function incrementar(nombre) {
        const nombreLimpio = nombre.trim();

        if (nombreLimpio === "") {
            setMensaje(constants.strNombreVacio);
            return false;
        }

        if (nombres.length >= constants.MAX) {
            setMensaje(constants.strSinCupos);
            return false;
        }

        setNombres(prev => prev.length < constants.MAX ? [...prev, nombreLimpio] : prev);
        setMensaje("");
        return true;
    }
    
    return {
        incrementar,
        mensaje
    }

}


export default useContador;
