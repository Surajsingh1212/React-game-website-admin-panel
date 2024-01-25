import React from 'react'
import Header from '../section/header/Header'
import Footer from '../section/footer/Footer'
import Herosections from '../section/herosection/Herosections'
import PopularGame from '../section/populargame/PopularGame'
import Withdrawal from '../section/withdrawals&cards/Withdrawal'
import Table from '../section/winnertable/Table'
import Testimonial from '../section/textimonial/Testimonial'
import ShowAllgames from '../section/showgames/ShowAllgames'
import Deposite from '../section/deposite&play/Deposite'
import Refarandearn from '../section/refar/Refarandearn'
import Backtotop from '../section/backtotop/Backtotop'

const Index = () => {
  return (
  <>
  <Header/>
  <Herosections/>
  <PopularGame/>
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
