import { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = (e) => {
    e.preventDefault();
    const alturaEmMetros = altura / 100;
    const imcCalculado = (peso / (alturaEmMetros ** 2)).toFixed(2);
    setImc(imcCalculado);
    setClassificacao(classificarIMC(imcCalculado));
  };

  const classificarIMC = (imc) => {
    if (imc < 18.5) return "Abaixo do peso";
    if (imc >= 18.5 && imc <= 24.9) return "Peso normal";
    if (imc >= 25 && imc <= 29.9) return "Sobrepeso";
    if (imc >= 30 && imc <= 34.9) return "Obesidade Grau I";
    if (imc >= 35 && imc <= 39.9) return "Obesidade Grau II";
    return "Obesidade Grau III";
  };

  return (
    <>
      <form onSubmit={calcularIMC}>
        <h1>Calculadora de IMC</h1>
        <input type="number" placeholder='Sua Altura (cm)' onChange={(e) => setAltura(e.target.value)} required />
        <input type="number" placeholder='Seu Peso (kg)' onChange={(e) => setPeso(e.target.value)} required />
        <button type='submit'>Calcular</button>
      </form>
      <div>
        {imc && (
          <>
            <h1>Seu IMC é: {imc}</h1>
            <h1>Sua Classificação: {classificacao}</h1>
          </>
        )}
        <table>
          <thead>
            <tr>
              <th>IMC</th>
              <th>Classificação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Menor que 18.5</td>
              <td>Abaixo do peso</td>
            </tr>
            <tr>
              <td>18.5 - 24.9</td>
              <td>Peso normal</td>
            </tr>
            <tr>
              <td>25.0 - 29.9</td>
              <td>Sobrepeso</td>
            </tr>
            <tr>
              <td>30.0 - 34.9</td>
              <td>Obesidade Grau I</td>
            </tr>
            <tr>
              <td>35.0 - 39.9</td>
              <td>Obesidade Grau II</td>
            </tr>
            <tr>
              <td>Maior que 40.0</td>
              <td>Obesidade Grau III</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
