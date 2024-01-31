import React from 'react';
import logo from './logo.svg';
import './App.css';
import TestReport from './report';
import { PDFViewer } from '@react-pdf/renderer';
function App() {
  return (

      <PDFViewer style={{width:"100%" , height:"100vh"}}>
     <TestReport/>
     </PDFViewer>

  );
}

export default App;
