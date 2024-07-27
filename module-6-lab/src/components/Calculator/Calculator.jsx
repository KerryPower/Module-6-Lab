import { useState } from 'react';

export default function Calculator() {
    const [num1, setNum1] = useState('');
    const [num2, setNum2] = useState('');
    const [result, setResult] = useState('');

    const handleNum1Input = (e) => {
        setNum1(e.target.value);
    };

    const handleNum2Input = (e) => {
        setNum2(e.target.value);
    };

    const handlebuttonClick = (op) => {
        calculateResult(op);
    }

    const disabledButton = !num1 || !num2;

    const calculateResult = (op) => {
        let a = parseFloat(num1);
        let b = parseFloat(num2);

        let res;
        switch (op) {
            case '+':
                res = a + b;
                break;
            case '-':
                res = a - b;
                break;
            case '*':
                res = a * b;
                break;
            case '/':
                if (b === 0) {
                    setResult("Can't Divide by zero");
                    return;
                }
                res = a / b;
                break;
            default:
                return;
        }

        setResult(res.toString());
    };

    return (
        <div className="calculator">
            <h2>Simple Calculator</h2>
            <div>
                <input type="number" value={num1} onChange={handleNum1Input} />
                <br />
                <input type="number" value={num2} onChange={handleNum2Input} />
                <br />
                <button disabled={disabledButton} onClick={() => handlebuttonClick('+')}>+</button>
                <button disabled={disabledButton} onClick={() => handlebuttonClick('-')}>-</button>
                <button disabled={disabledButton} onClick={() => handlebuttonClick('*')}>*</button>
                <button disabled={disabledButton} onClick={() => handlebuttonClick('/')}>/</button>
                <br />
                <label htmlFor="result">Result</label>
                <input type="text" id="result" value={result} readOnly />
            </div>
        </div>
    );
}
