import React,{ useState } from "react";
import './IMCCalculator.css';
import InputMask from "react-input-mask";
import { FaReact } from "react-icons/fa";

<link rel="icon" type="image/x-icon" href="%PUBLIC_URL%/favicon.ico" />

const IMCCalculator = () => {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [result, setResult] = useState(null);
    const [category, setCategory] = useState('');
    
    const getCategory = (imc) => {
        if (imc < 18.5){
            return "Peso abaixo do normal.";
        }else if (imc >= 18.5 && imc <= 24.9 ) {
            return "Peso considerado na faixa saudável.";
        }else if (imc >= 25 && imc <= 29.9) {
            return "Peso na faixa do sobrepeso.";
        }else if (imc >= 30 && imc <= 34.9) {
            return "Peso na faixa da obesidade grau 1.";
        }else if (imc >= 35 && imc <= 39.9){
            return "Peso na faixa da obesidade grau 2.";
        }else if (imc >= 40){
            return "Peso na faixa da obesidade grau 3.";
        }else {
            return '';
        }
    };


    const handleCalculate = () => {
        if (weight && height && parseFloat(weight) > 0 && parseFloat(height.replace(',', '.')) > 0){
            const cleanWeight = parseFloat(weight.replace(',', '.'));
            const cleanHeight = parseFloat(height.replace(',', '.'));

            const imc = (cleanWeight/ (cleanHeight * cleanHeight)).toFixed(2);
            setResult(imc);
            setCategory(getCategory(parseFloat(imc)));
        } else {
            setResult(null);
            setCategory('');
        }
    };

    return (
        <div className="imc-container">
        <div className="imc-calculator">
            <h1>Calculadora IMC</h1>
            <div className="input-group">
                <label className="blue-label">Peso (Kg):</label>
                <InputMask
                mask="999.9"
                maskChar= ""
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div className="input-group">
            <label className="blue-label">Altura (cm):</label>
            <InputMask
            mask="9.99"
            maskChar=""
            value={height}
            onChange={(e) => setHeight(e.target.value)}
             />
            </div>
            <button className="calculate-button" onClick={handleCalculate}>Calcular IMC</button>
            {result !== null && (
                <div className="result">
                    <h2>Seu IMC é: {result} Kg/m²</h2>
                    <p>{category}</p>
                </div>
            )}
        </div>
        <div className="additional-info">
             <h2>O que é o IMC</h2>
                <p>O Índice de Massa Corporal (IMC) é uma ferramenta que oferece uma visão geral da relação entre peso e altura de uma pessoa. No entanto, é crucial compreender que a saúde é influenciada por vários fatores, e o IMC é apenas um dos indicadores.</p>
                <h2>Interpretação do IMC</h2>
                <p>O IMC é classificado em diferentes categorias, cada uma indicando uma faixa geral de peso. Lembre-se de que o IMC é apenas uma medida inicial e não leva em conta todos os fatores individuais de saúde. As categorias são:</p>
                <ul>
                    <li>Abaixo de 18,5: Peso abaixo do normal.</li>
                    <li>18,5 a 24,9: Peso considerado na faixa saudável.</li>
                    <li>25 a 29,9: Peso na faixa do sobrepeso.</li>
                    <li>30 a 34,9: Peso na faixa da obesidade grau 1.</li>
                    <li>35 a 39,9: Peso na faixa da obesidade grau 2.</li>
                    <li>Acima de 40: Peso na faixa da obesidade grau 3.</li>
                </ul>
        </div>
    </div>
    
    );
};

export default IMCCalculator;