import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import ConnectedAward from './pages/ConnectedAward';
import CelebratedTechies from './pages/CelebratedTechies';
import VotingCategories from './pages/VotingCategories';
import Voting from './pages/Voting';
import Power from './pages/Power';
import Donate from './pages/Donate';
import FutureEdition from './pages/FutureEdition';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} exact/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/connectedawards' element={<ConnectedAward/>}/>
        <Route path='/celebratedtechies' element={<CelebratedTechies/>}/>
        <Route path='/votingcategories' element={<VotingCategories/>}/>
        <Route path='/voting' element={<Voting/>}/>
        <Route path='/power' element={<Power/>}/>
        <Route path='/donate' element={<Donate/>}/>
        <Route path='/futureedition' element={<FutureEdition/>}/>
      </Routes>
    </div>
  );
}

export default App;
