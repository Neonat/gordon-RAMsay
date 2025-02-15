import React, { useState } from 'react';
import '../components/'

const TextProcessor = () => {
    // State to store input and output 
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');

    // Function to handle input change 
    const handleChange = (event) => {
        setInputText(event.target.value);
    };

    const handleSubmit = () => {
        const reversedText = inputText.split('').reverse().join('');
        setOutputText(reversedText);
    };

    return (
        <div className='container mt-5'>
            <h2>Text Processor</h2>
            <div className="mb-3">
                <label htmlFor="inputText" className="form-label">
                Enter Text:
                </label>
                <input
                type="text"
                className="form-control custom-input"
                id="inputText"
                value={inputText}
                onChange={handleChange}
                placeholder="Type something here..."
                />
            </div>
            <button className="btn btn-primary" onClick={handleSubmit}>
                Submit
            </button>
            <div className="mt-4">
                <h4>Output:</h4>
                <p className="output-area">{outputText}</p>
            </div>
        </div>
    );
};

export default TextProcessor;