import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
//import './App.css'
import Headline from './components/Headline'
import Paragraph from './components/Paragraph'
//import Button from './components/Button'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const firstHeadline = "Das ist meine erste Überschrift"
  const firstColor = "red"

  return (
    <div>
      <Headline
        myColor={firstColor}
        myHeadlineText={firstHeadline}
      />
      <Headline
        myColor="blue"
        myHeadlineText="Hier ist die Überschrift von Dimi"
      />
      <Headline
        myColor="green"
        myHeadlineText="Das ist für Kaho!"
      />
      <Paragraph
        myText="Das ist mein Text !!!"
        myColor="blue" />
      <Paragraph myText="Das ist mein Text Org" myColor="orange" />
      <Paragraph myText="Das ist mein Text Purple" myColor="purple" />
      <h1>Hallo Techstarter!</h1>
      <p>Das ist ein normaler Text</p>
      {/* 
      <Button
        url="https://www.google.com"
        text="Go to Google" />
      <Button
        url="https://www.yahoo.com"
        text="Go to Yahoo" />
      */}
      <div style={{ display: "flex", gap: "16px" }}>
        <Button variant="primary" disabled>Primary</Button>
        <Button variant="secondary">Primary</Button>
        <Button variant="success">Success</Button>
      </div>
    </div>
  )
}

export default App
