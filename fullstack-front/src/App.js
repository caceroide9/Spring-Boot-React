import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import EditUser from './users/Edit';
import ViewUser from './users/ViewUser';
import IndexUser from './users/IndexUser'
import IndexPto from './point/IndexPto';
import AddPoint from './point/AddPoint';
import EditPoint from './point/EditPoint';
import ViewPoint from './point/ViewPoint';
import IndexPublicacion from './publicacion/IndexPublicacion';
import ViewPublicacion from './publicacion/ViewPublicacion';
import EditPublicacion from './publicacion/EditPublicacion';
import AddPublicacion from './publicacion/AddPublicacion';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/edituser/:id' element={<EditUser/>}/>
        <Route exact path="/viewuser/:id" element={<ViewUser />} />
        <Route exact path="/index" element={<IndexUser />} />
        <Route exact path="/indexPto" element={<IndexPto />} />
        <Route exact path='/addPto' element={<AddPoint/>}/>
        <Route exact path='/editpoint/:id' element={<EditPoint/>}/>
        <Route exact path="/viewpoint/:id" element={<ViewPoint />} />
        <Route exact path="/indexPublicaciones" element={<IndexPublicacion />} />
        <Route exact path="/viewpublicaciones/:id" element={<ViewPublicacion />} />
        <Route exact path="/editpublicacion/:id" element={<EditPublicacion />} />
        <Route exact path="/addPublicacion" element={<AddPublicacion />} />

        

        
        

      </Routes>
      

      </Router>
      
      
    </div>
  );
}

export default App;
