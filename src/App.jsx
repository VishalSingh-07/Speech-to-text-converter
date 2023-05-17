import "regenerator-runtime/runtime";
import React, { useState } from "react";
import useClipboard from "react-use-clipboard";
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import "./App.css";
const App = () => {
  const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();
  const [isCopied, setCopied] = useClipboard(transcript, {
    successDuration: 1000,
  });
  const startListening = () =>
    SpeechRecognition.startListening({ continuous: true, language: "en-IN" });

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }
  return (
    <div className="container">
      <h2>Speech To Text Converter</h2>
      <br />
      <p>
        A React hook that converts speech from the microphone to text and makes it available to your
        React components.
      </p>
      <div className="main-content">{transcript}</div>
      <div className="btn-style">
        <button onClick={setCopied}>{isCopied ? "Copied!" : "Copy to clipboard"}</button>
        <button onClick={startListening}>Start Listening</button>
        <button onClick={SpeechRecognition.stopListening}>Stop Listening </button>
      </div>
    </div>
  );
};

export default App;
