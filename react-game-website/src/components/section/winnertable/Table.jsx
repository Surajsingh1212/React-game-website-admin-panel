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
    const tableItem = [
        { image1: tableImg1, image2: btc1, name: 'Ujjwal Panday', betid: '3455dfd234', betamount: '000000100', multiplier: '2x', game: 'Wheel Spin', profit: '300.000000' },
        { image1: tableImg2, image2: btc1, name: 'Suraj Singh', betid: '33455d4fd234', betamount: '000000100', multiplier: '2x', game: 'color picker', profit: '300.000000' },
        { image1: tableImg3, image2: etc, name: 'Ankita Panday', betid: '343455dfd234', betamount: '000000100', multiplier: '2x', game: 'aviator ', profit: '200.000000' },
        { image1: tableImg4, image2: dash, name: 'Sandeep Maurya', betid: '345343dfd234', betamount: '000000100', multiplier: '2x', game: 'slot machine', profit: '300.000000' },
        { image1: tableImg5, image2: btc1, name: 'Manjay Yadav', betid: '3455dfd234', betamount: '000000100', multiplier: '2x', game: 'dice', profit: '400.000000' },
        { image1: tableImg6, image2: trx, name: 'Deepak Singh', betid: '34525dfd234', betamount: '000000100', multiplier: '2x', game: 'casino', profit: '300.000000' },
        { image1: tableImg7, image2: btc1, name: 'Akash Rai', betid: '34551dfd234', betamount: '000000100', multiplier: '2x', game: 'Wheel Spin', profit: '500.000000' },
        { image1: tableImg8, image2: trx, name: 'Resma Singh', betid: '34515dfd234', betamount: '000000100', multiplier: '2x', game: 'card game', profit: '30.000000' },
        { image1: tableImg9, image2: etc, name: 'Dvt Singh', betid: '34551dfd234', betamount: '000000100', multiplier: '2x', game: 'Wheel Spin', profit: '700.000000' },
    ]
    return (
        <>
            <div className="latest-bets">
                <div className="overlay pt-120 pb-120">
                    <div className="container ">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                <div className="section-header text-center">
                                    <h5 className="sub-title">Latest Winners</h5>
                                    <h2 className="title color-white pop-font-size2">Latest Bets</h2>
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
                                                aria-controls="high-rollers" aria-selected="false">Today Winner</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="wager-contest-tab" data-bs-toggle="tab" data-bs-target="#wager-contest"
                                                type="button" role="tab" aria-controls="wager-contest" aria-selected="false">Recent Winners</button>
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
                                                    {tableItem.map((item, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">
                                                                <div className="icon-box">
                                                                    <img src={item.image1} alt="#" />
                                                                    <span>{item.name}</span>
                                                                </div>
                                                            </th>
                                                            <td>{item.betid}</td>
                                                            <td>
                                                                <div className="icon-box">
                                                                    <img src={item.image2} alt="#" />
                                                                    <span>{item.betamount}</span>
                                                                </div>
                                                            </td>
                                                            <td>{item.multiplier}</td>
                                                            <td className="game">{item.game}</td>
                                                            <td>
                                                                <div className="icon-box">
                                                                    <img src={item.image2} alt="#" />
                                                                    <span>{item.profit}</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
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
                                                    {tableItem.map((item, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">
                                                                <div className="icon-box">
                                                                    <img src={item.image1} alt="#" />
                                                                    <span>{item.name}</span>
                                                                </div>
                                                            </th>
                                                            <td>{item.betid}</td>
                                                            <td>
                                                                <div className="icon-box">
                                                                    <img src={item.image2} alt="#" />
                                                                    <span>{item.betamount}</span>
                                                                </div>
                                                            </td>
                                                            <td>{item.multiplier}</td>
                                                            <td className="game">{item.game}</td>
                                                            <td>
                                                                <div className="icon-box">
                                                                    <img src={item.image2} alt="#" />
                                                                    <span>{item.profit}</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
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
                                                    {tableItem.map((item, index) => (
                                                        <tr key={index}>
                                                            <th scope="row">
                                                                <div className="icon-box">
                                                                    <img src={item.image1} alt="#" />
                                                                    <span>{item.name}</span>
                                                                </div>
                                                            </th>
                                                            <td>{item.betid}</td>
                                                            <td>
                                                                <div className="icon-box">
                                                                    <img src={item.image2} alt="#" />
                                                                    <span>{item.betamount}</span>
                                                                </div>
                                                            </td>
                                                            <td>{item.multiplier}</td>
                                                            <td className="game">{item.game}</td>
                                                            <td>
                                                                <div className="icon-box">
                                                                    <img src={item.image2} alt="#" />
                                                                    <span>{item.profit}</span>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
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
