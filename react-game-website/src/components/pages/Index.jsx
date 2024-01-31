import React from 'react'
import AviatorGame from '../section/aviatorgame/AviatorGame'
import Backtotop from '../section/backtotop/Backtotop'
import CardGame from '../section/cardgame/CardGame'
import ColourpickGame from '../section/colourpickgame/ColourpickGame'
import Deposite from '../section/deposite&play/Deposite'
import Footer from '../section/footer/Footer'
import Header from '../section/header/Header'
import Herosections from '../section/herosection/Herosections'
import Refarandearn from '../section/refar/Refarandearn'
import ShowAllgames from '../section/showgames/ShowAllgames'
import SlotmachineGame from '../section/lottery7game/SlotmachineGame'
import Testimonial from '../section/textimonial/Testimonial'
import WheelSpin from '../section/wheelspin/WheelSpin'
import Table from '../section/winnertable/Table'
import Withdrawal from '../section/withdrawals&cards/Withdrawal'

const Index = () => {
  return (
  <>
  <Header/>
  <Herosections/>
 {/* <PopularGame/> */}
  <WheelSpin/>
  <CardGame/>
  <SlotmachineGame/>
  <ColourpickGame/>
  <AviatorGame/>
  <Withdrawal/>
  <Testimonial/>
  <Deposite/>
  <Table/>
  <ShowAllgames/>
  <Refarandearn/>
  <Footer/>
  <Backtotop/>
  </>
  )
}

export default Index  
