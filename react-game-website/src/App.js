import React from 'react';
import './assets/css/style.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Index from './components/pages/Index';
import Signup from './components/pages/Signup';
import Login from './components/pages/Login';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Games from './components/pages/Games';
import Lottery from './components/pages/Lottery';
import LotteryDetails from './components/pages/LotteryDetails';
import Privacypolicy from './components/pages/Privacypolicy';
import Termandconditions from './components/pages/Termandconditions';
import Tournament from './components/pages/Tournament';
import TournamentDetails from './components/pages/TournamentDetails';
import TournamentsResults from './components/pages/TournamentsResults';
import ErrorPage from './components/pages/ErrorPage';
import FullLayout from './components/adminpanel/layout/FullLayout';
import Dashboard from './components/adminpanel/pages/Deshboard';
import Profile from './components/adminpanel/pages/Profile';
import Changepassword from './components/adminpanel/pages/Changepassword';
import AdminGames from './components/adminpanel/pages/AdminGames';
import AdminLottery from './components/adminpanel/pages/AdminLottery';
import Wheelplay from './components/adminpanel/pages/Wheelplay';
import Addpyment from './components/adminpanel/pages/Addpyment';
import Invoice from './components/adminpanel/pages/Invoice';
import Managelottery from './components/adminpanel/pages/Managelottery';
import ManageUsers from './components/adminpanel/pages/ManageUsers';
import ManangeGames from './components/adminpanel/pages/ManangeGames';
import Totalpayment from './components/adminpanel/pages/Totalpayment';
import Withdraw from './components/adminpanel/pages/Withdraw';

const App = () => {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/home' element={<Index />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/games' element={<Games />} />
        <Route path='/lottery' element={<Lottery />} />
        <Route path='/lotterydetails' element={<LotteryDetails />} />
        <Route path='/privacypolicy' element={<Privacypolicy />} />
        <Route path='/termandcondition' element={<Termandconditions />} />
        <Route path='/tournament' element={<Tournament />} />
        <Route path='/tournamentdetails' element={<TournamentDetails />} />
        <Route path='/tournamentsresults' element={<TournamentsResults />} />
        <Route path='/admin' element={<FullLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='profile' element={<Profile/>} />
          <Route path='changepassword' element={<Changepassword/>} />
          <Route path='games' element={<AdminGames/>} />
          <Route path='lottery' element={<AdminLottery/>} />
          <Route path='wheelplay' element={<Wheelplay/>} />
          <Route path='addpayment' element={<Addpyment/>} />
          <Route path='invoice' element={<Invoice/>} />
          <Route path='managelottery' element={<Managelottery/>} />
          <Route path='manageusers' element={<ManageUsers/>} />
          <Route path='managegames' element={<ManangeGames/>} />
          <Route path='totalpayment' element={<Totalpayment/>} />
          <Route path='withdrawpayment' element={<Withdraw/>} />
        </Route>
        <Route path="/*" element={<ErrorPage />}/>
      </Routes>
    </Router>
  )
}

export default App
