import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ResultType1 from './ResultType1';
import ResultType2 from './ResultType2';
import ResultType3 from './ResultType3';
import ResultType4 from './ResultType4';
import Home from './Home';
import Edong from './Edong';
import FinalResult from './final'; 

function App() {
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/" element={<ResultType1 />} />
        <Route path="/result1" element={<ResultType1 />} />
        <Route path="/result2" element={<ResultType2 />} />
        <Route path="/result3" element={<ResultType3 />} />
        <Route path="/result4" element={<ResultType4 />} />
        <Route path="/edong" element={<Edong />} />
        <Route path="/final" element={<FinalResult />} /> 
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
