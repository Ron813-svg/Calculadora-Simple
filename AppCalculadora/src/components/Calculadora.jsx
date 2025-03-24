import React, {useState} from "react";
import './Calculadora.css'

const Calculadora = () => {
    const [num1, setNum1] = useState('')
    const [num2, setNum2] = useState('')
    const [result, setResult] = useState(null)

    const handleSum = () => {
        const sum = parseFloat(num1) + parseFloat(num2)
        setResult(sum)
    };
    const handleRes = () => {
        const res = parseFloat(num1) - parseFloat(num2)
        setResult(res)
    };
    const handleDiv = () => {
        const res = parseFloat(num1) / parseFloat(num2)
        setResult(res)
    };
    const handleMult = () => {
        const res = parseFloat(num1) * parseFloat(num2)
        setResult(res)
    };


    return (
        <div className="calculadora">
            <h1>Calculadora</h1>
            <input
                type="number"
                placeholder="Número 1"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input
                type="number"
                placeholder="Número 2"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <button onClick={handleSum}>Sumar</button>
            <br/>
            <button onClick={handleRes}>Restar</button>
            <br/>
            <button onClick={handleDiv}>Dividir</button>
            <br/>
            <button onClick={handleMult}>Multiplicar</button>
            <br/>
            {result !== null && <h1>Resultado: {result}</h1>}
        </div>
    );


}
export default Calculadora