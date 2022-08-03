import './App.css';
import React, {useState} from 'react';
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
import PastEditions from './pages/PastEditions';
import {Route, Routes} from 'react-router-dom';


function App() {
  const votings= [
    {
        name: 'Adewale Akinola',
        votes: 750,
        category: 'Exceptional Data Analyst'
    },
    {
        name: 'Adewale Akinola',
        votes: 750,
        category: 'Exceptional Data Analyst'
    },
    {
        name: 'Akintunde Femi',
        votes: 240,
        category: 'Exceptional Data Analyst'
    },
    {
        name: 'Rachael Joy',
        votes: 620,
        category: 'Promising Data Analyst'
    },
    {
        name: 'Sulaimon Mohamed',
        votes: 350,
        category: 'Promising Data Analyst'
    },
    {
        name: 'Akinola Tolulope',
        votes: 450,
        category: 'Promising Data Analyst'
    },
    {
        name: 'Adewale Akinola',
        votes: 750,
        category: 'Exceptional Data Analyst'
    },
    {
        name: 'Adewale Akinola',
        votes: 750,
        category: 'Exceptional Data Analyst'
    },
    {
        name: 'Akintunde Femi',
        votes: 240,
        category: 'Exceptional Data Analyst'
    },
    {
        name: 'Rachael Joy',
        votes: 620,
        category: 'Promising Data Analyst'
    },
    {
        name: 'Sulaimon Mohamed',
        votes: 350,
        category: 'Promising Data Analyst'
    },
    {
        name: 'Akinola Tolulope',
        votes: 450,
        category: 'Promising Data Analyst'
    },
    {
        name: 'Adewale Akinola',
        votes: 750,
        category: 'Exceptional Data Analyst'
    },
    {
        name: 'Akinola Tolulope',
        votes: 450,
        category: 'Promising Data Analyst'
    },
    {
        name: 'Sulaimon Mohamed',
        votes: 350,
        category: 'Promising Data Analyst'
    },
    {
        name: 'Adewale Akinola',
        votes: 750,
        category: 'Exceptional Data Analyst'
    },
    {
        name: 'Sulaimon Mohamed',
        votes: 350,
        category: 'Promising Data Analyst'
    },
    {
        name: 'Adewale Akinola',
        votes: 750,
        category: 'Exceptional Data Analyst'
    },
    {
        name: 'Akintunde Femi',
        votes: 240,
        category: 'Exceptional Data Analyst'
    },
    {
        name: 'Rachael Joy',
        votes: 620,
        category: 'Promising Data Analyst'
    },
]
const [search, setSearch] = useState(votings);
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home votings={votings} search={search} setSearch={setSearch}/>} exact/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/connectedawards' element={<ConnectedAward/>}/>
        <Route path='/celebratedtechies' element={<CelebratedTechies/>}/>
        <Route path='/votingcategories' element={<VotingCategories votings={votings} search={search} setSearch={setSearch}/>}/>
        <Route path='/votingcategories/voting' element={<Voting votings={votings} search={search} setSearch={setSearch}/>}/>
        <Route path='/power' element={<Power/>}/>
        <Route path='/donate' element={<Donate/>}/>
        <Route path='/futureedition' element={<FutureEdition/>}/>
        <Route path='/pasteditions' element={<PastEditions/>}/>
      </Routes>
    </div>
  );
}

export default App;
