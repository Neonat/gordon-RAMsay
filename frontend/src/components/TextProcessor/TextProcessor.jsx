import React, { useState } from 'react';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './TextProcess.css'; // Import custom CSS

const TextProcessor = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');

  const handleChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // Send the user input to the Flask backend
      const response = await fetch('http://localhost:5000/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputText }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Parse the JSON response
      const data = await response.json();

      // Display the response in the frontend
      setOutputText(data.response);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      setOutputText('Error: Could not fetch the response.');
    }
  };

  return (
    <Container className="mt-5">
      <h2 className="text-center mb-4">Hey! Feeling hungry?</h2>
      <Form>
        <InputGroup className="mb-3">
          <Form.Control
            type="text"
            value={inputText}
            onChange={handleChange}
            placeholder="What would you like to eat today?"
            aria-label="Text input"
            className="custom-input" // Add a class for custom styling
          />
          <Button
            variant="primary"
            id="submit-button"
            onClick={handleSubmit}
            className="circle-button" // Add a class for circular button
          >
            ↑
          </Button>
        </InputGroup>
      </Form>

      {outputText && (
        <div className="mt-4">
          <h4>Output:</h4>
          <pre className="output-area">{outputText}</pre>
        </div>
      )}
    </Container>
  );
};

export default TextProcessor;
