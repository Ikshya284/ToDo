import React from 'react'

import { BrowserRouter, Route, Routes} from "react-router-dom";
import TodoPage from './pages/todoPage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<TodoPage/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
