
import Nova1 from './Nova1';
import Nova2 from './Nova2';
import Nova3 from './Nova3';
import Nova4 from './Nova4';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tag from './Tag.js';
import './global.css';





function App() {

 
  return (
   
   <Router>
    <div className="App">
     
    <Tag />
   <Routes>

  
   
     <Route path={'/'} element={<Nova1 />} />
     <Route path={'/page2'} element={<Nova2 />} />
     <Route path={'/page3'} element={<Nova3 />} />
     <Route path={'/page4'} element={<Nova4 />} />
    
     
     
   

   
</Routes>


    
    </div>
  </Router>
  
  );
}





export default App;
