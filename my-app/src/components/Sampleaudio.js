import React, { useState } from "react";
import SpeechRecognition from "@speechly/speech-recognition-polyfill";

const Sampleaudio = () => {
  const [transcript, setTranscript] = useState("");

  const startRecognition = () => {
    const recognition = new SpeechRecognition();
    recognition.onresult = (event) => {
      setTranscript(event.results[0][0].transcript);
    };
    recognition.start();
  };

  const stopRecognition = () => {
    const recognition = new SpeechRecognition();
    recognition.stop();
  };

  return (
    <div>
      <button onClick={startRecognition}>Start Recognition</button>
      <button onClick={stopRecognition}>Stop Recognition</button>
      <p>{transcript}</p>
    </div>
  );
};

export default Sampleaudio;