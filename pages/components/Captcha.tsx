import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
`;

const Question = styled.div``;

const ResultContainer = styled.span`
  min-height: 48px;
  display: flex;
`;

const ResultText = styled.input`
  width: 2rem;
  color: #fff;
  background: #000;
  font-weight: 400;
  white-space: nowrap;
  word-break: break-word;
  resize: none;
  outline: none;
  border: 0;
  padding-bottom: 3px;
  border-bottom: 2px solid;
  &:-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }
`;

const Button = styled.button`
  background: radial-gradient(50% 50% at 50% 50%, #ff3f70 0, rgba(255, 67, 106, 0.82) 100%);
  box-shadow: 0 4px 14px rgba(255, 63, 112, 0.48);
  border-radius: 10px;
  font-size: 1rem;
  text-align: center;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border: none;
  min-height: 48px;

  &:hover {
    box-shadow: 0 4px 28px rgba(255, 63, 112, 0.48);
  }

  & > h1 {
    font-size: 1rem;
    background-color: #fff;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin: 0;
    text-align: center;
  }
`;

const Captcha = () => {
  const a = Math.floor(Math.random() * 10);
  const b = Math.floor(Math.random() * 10);
  const [result, changeResult] = useState();

  const handleChange = (e: Event | undefined) => {
    changeResult(e?.target?.value);
  };

  return (
    <Container>
      <Question />
      <ResultContainer>
        <ResultText type="number" value={result} onChange={handleChange} placeholder="3" />
      </ResultContainer>
      <Button disabled={a + b === result}>
        <h1>Contact me!</h1>
      </Button>
    </Container>
  );
};

export default Captcha;
