import Write from "./Components/Project"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import WritePage from "./Pages/Write" 
import HomePage from "./Pages/Home"


function App() {

  return (
    <BrowserRouter>
      <div className="app_container">
        <Write />
        <div className="content_container">
          <Routes>
            <Route path='/' element={< HomePage/>}/>
            <Route path="/Write" element={<WritePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App
