import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import './assets/css/style.css';
import FullLayout from './components/adminpanel/layout/FullLayout';
import Addpyment from './components/adminpanel/pages/Addpyment';
import AdminGames from './components/adminpanel/pages/AdminGames';
import AdminLottery from './components/adminpanel/pages/AdminLottery';
import Changepassword from './components/adminpanel/pages/Changepassword';
import ColorpickGame from './components/adminpanel/pages/ColorpickGame';
import FundConverstion from './components/adminpanel/pages/FundConverstion';
import ManageUsers from './components/adminpanel/pages/ManageUsers';
import Profile from './components/adminpanel/pages/Profile';
import Totalpayment from './components/adminpanel/pages/Totalpayment';
import Wheelplay from './components/adminpanel/pages/Wheelplay';
import Withdraw from './components/adminpanel/pages/Withdraw';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import ErrorPage from './components/pages/ErrorPage';
import GameRules from './components/pages/GameRules';
import Games from './components/pages/Games';
import Index from './components/pages/Index';
import Login from './components/pages/Login';
import Lottery from './components/pages/Lottery';
import LotteryDetails from './components/pages/LotteryDetails';
import Privacypolicy from './components/pages/Privacypolicy';
import Signup from './components/pages/Signup';
import Termandconditions from './components/pages/Termandconditions';
import SlotMachine from './components/adminpanel/pages/SlotMachine';
import Cardprediction from './components/adminpanel/pages/Cardprediction';
import DiceGame from './components/adminpanel/pages/DiceGame';
import AviatorGame from './components/adminpanel/pages/AviatorGame';

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
        <Route path='/gamerules' element={<GameRules />} />
        {/*protected Route for users  */}
        <Route path='/admin' element={<ProtectedRouteForUser><FullLayout /></ProtectedRouteForUser>}>
          <Route index path='games' element={<ProtectedRouteForUser><AdminGames /></ProtectedRouteForUser>} />
          <Route path='profile' element={<ProtectedRouteForUser><Profile /></ProtectedRouteForUser>} />
          <Route path='changepassword' element={<ProtectedRouteForUser><Changepassword /></ProtectedRouteForUser>} />
          <Route path='lottery' element={<ProtectedRouteForUser><AdminLottery /></ProtectedRouteForUser>} />
          <Route path='wheelplay' element={<ProtectedRouteForUser><Wheelplay /></ProtectedRouteForUser>} />
          <Route path='addpayment' element={<ProtectedRouteForUser><Addpyment /></ProtectedRouteForUser>} />
          <Route path='referrals' element={<ProtectedRouteForUser><ManageUsers /></ProtectedRouteForUser>} />
          <Route path='totalpayment' element={<ProtectedRouteForUser><Totalpayment /></ProtectedRouteForUser>} />
          <Route path='withdrawpayment' element={<ProtectedRouteForUser><Withdraw /></ProtectedRouteForUser>} />
          <Route path='colourpick' element={<ProtectedRouteForUser><ColorpickGame /></ProtectedRouteForUser>} />
          <Route path='fundconversion' element={<ProtectedRouteForUser><FundConverstion /></ProtectedRouteForUser>} />
          <Route path='slotmachine' element={<ProtectedRouteForUser><SlotMachine /></ProtectedRouteForUser>} />
          <Route path='cardprediction' element={<ProtectedRouteForUser><Cardprediction /></ProtectedRouteForUser>} />
          <Route path='dice' element={<ProtectedRouteForUser><DiceGame /></ProtectedRouteForUser>} />
          <Route path='aviator' element={<ProtectedRouteForUser><AviatorGame /></ProtectedRouteForUser>} />
        </Route>
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Router>
  )
}

export default App

// create protect route for user 
export const ProtectedRouteForUser = ({ children }) => {
  const user = localStorage.getItem('user')
  if (user) {
    return children
  }
  else {
    return <Navigate to={'/login'} />
  }
}
