import React from 'react';
import tableImg1 from '../../../assets/images/table-image-1.png'
import tableImg2 from '../../../assets/images/table-image-2.png'
import tableImg3 from '../../../assets/images/table-image-3.png'
import tableImg4 from '../../../assets/images/table-image-4.png'
import tableImg5 from '../../../assets/images/table-image-5.png'
import tableImg6 from '../../../assets/images/table-image-6.png'
import tableImg7 from '../../../assets/images/table-image-7.png'
import tableImg8 from '../../../assets/images/table-image-8.png'
import tableImg9 from '../../../assets/images/table-image-9.png'
import btc1 from '../../../assets/images/icon/btc-icon-2.png'
import etc from '../../../assets/images/icon/etc.png'
import dash from '../../../assets/images/icon/dash.png'
import trx from '../../../assets/images/icon/trx.png'

const Table = () => {
  return (
    <>
    <div className="latest-bets">
    <div className="overlay pt-120 pb-120">
        <div className="container ">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="section-header text-center">
                        <h5 className="sub-title">Latest Winners</h5>
                        <h2 className="title" style={{fontSize:'3.5rem',color:'white'}}>Latest Bets</h2>
                        <p>More and more winners are added every time! To locate the most recent winner's information</p>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="d-flex justify-content-center">
                        <ul className="nav" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="all-bets-tab" data-bs-toggle="tab"
                                    data-bs-target="#all-bets" type="button" role="tab"
                                    aria-controls="all-bets" aria-selected="true">All Bets</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="high-rollers-tab" data-bs-toggle="tab"
                                    data-bs-target="#high-rollers" type="button" role="tab"
                                    aria-controls="high-rollers" aria-selected="false">High Rollers</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="wager-contest-tab" data-bs-toggle="tab" data-bs-target="#wager-contest"
                                    type="button" role="tab" aria-controls="wager-contest" aria-selected="false">Wager Contest</button>
                            </li>
                        </ul>
                    </div>
                    <div className="tab-content mt-40">
                        <div className="tab-pane fade show active" id="all-bets" role="tabpanel" aria-labelledby="all-bets-tab">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">User</th>
                                            <th scope="col">Bet Id</th>
                                            <th scope="col">Bet Amount</th>
                                            <th scope="col">Multiplier</th>
                                            <th scope="col">Game</th>
                                            <th scope="col">Profit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg1} alt="#"/>
                                                    <span>Tom Bass</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Dice</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg2}  alt="#"/>
                                                    <span>Karl Day </span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={dash}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Poker</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={dash}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg3}  alt="#"/>
                                                    <span>Jon Arnold</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={etc}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Dice</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={etc}  alt="#"/>
                                                    <span className="loss">0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg4}  alt="#"/>
                                                    <span>Kim Clark</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Slot Machine</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg5}  alt="#"/>
                                                    <span>Sergio Roy</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={trx}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Dice</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={trx}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg6}  alt="#"/>
                                                    <span>Wm Dixon</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Bitclimber</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg7}  alt="#"/>
                                                    <span>Leo Berry</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={dash}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Dice</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={dash}  alt="#"/>
                                                    <span className="loss">0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg8}  alt="#"/>
                                                    <span>Ross Ryan</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={etc}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Dice</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={etc}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg9}  alt="#"/>
                                                    <span>Alton Ray</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Poker</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="high-rollers" role="tabpanel" aria-labelledby="high-rollers-tab">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">User</th>
                                            <th scope="col">Bet Id</th>
                                            <th scope="col">Bet Amount</th>
                                            <th scope="col">Multiplier</th>
                                            <th scope="col">Game</th>
                                            <th scope="col">Profit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg4}  alt="#"/>
                                                    <span>Kim Clark</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Slot Machine</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg5}  alt="#"/>
                                                    <span>Sergio Roy</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={trx}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Dice</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={trx}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg6}  alt="#"/>
                                                    <span>Wm Dixon</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Bitclimber</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg1} alt="#"/>
                                                    <span>Tom Bass</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Dice</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg2}  alt="#"/>
                                                    <span>Karl Day </span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={dash}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Poker</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={dash}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg3}  alt="#"/>
                                                    <span>Jon Arnold</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={etc}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Dice</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={etc}  alt="#"/>
                                                    <span className="loss">0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg7}  alt="#"/>
                                                    <span>Leo Berry</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={dash}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Dice</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={dash}  alt="#"/>
                                                    <span className="loss">0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg8}  alt="#"/>
                                                    <span>Ross Ryan</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={etc}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Dice</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={etc}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg9}  alt="#"/>
                                                    <span>Alton Ray</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Poker</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="wager-contest" role="tabpanel" aria-labelledby="wager-contest-tab">
                            <div className="table-responsive">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">User</th>
                                            <th scope="col">Bet Id</th>
                                            <th scope="col">Bet Amount</th>
                                            <th scope="col">Multiplier</th>
                                            <th scope="col">Game</th>
                                            <th scope="col">Profit</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg6}  alt="#"/>
                                                    <span>Wm Dixon</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Bitclimber</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg7}  alt="#"/>
                                                    <span>Leo Berry</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={dash}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Dice</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={dash}  alt="#"/>
                                                    <span className="loss">0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg8}  alt="#"/>
                                                    <span>Ross Ryan</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={etc}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Dice</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={etc}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg9}  alt="#"/>
                                                    <span>Alton Ray</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Poker</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg1} alt="#"/>
                                                    <span>Tom Bass</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Dice</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg2}  alt="#"/>
                                                    <span>Karl Day </span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={dash}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Poker</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={dash}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg3}  alt="#"/>
                                                    <span>Jon Arnold</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={etc}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Dice</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={etc}  alt="#"/>
                                                    <span className="loss">0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg4}  alt="#"/>
                                                    <span>Kim Clark</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Slot Machine</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={btc1}alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">
                                                <div className="icon-box">
                                                    <img src={tableImg5}  alt="#"/>
                                                    <span>Sergio Roy</span>
                                                </div>
                                            </th>
                                            <td>b799b8724b</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={trx}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                            <td>3.00X</td>
                                            <td className="game">Dice</td>
                                            <td>
                                                <div className="icon-box">
                                                    <img src={trx}  alt="#"/>
                                                    <span>0.00000051</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
    </>
  )
}

export default Table
