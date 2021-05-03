import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Home.css'
import Table from './Table'

export default function Home({bal,data}) {
    return (
        <section className="main-section">
            <div className="container">
                <div className="box">
                  <div className="add">
                      <h3 className="add-bar">+ ADD</h3>
                      <div className="add-inner">
                        <div className="earning">
                          <Link to="/earnings">  
                           <h4>Earning</h4>
                           <div className="earning-img"></div>
                          </Link> 
                        </div>
                      <div className="expense">
                        <Link to="/expenses">
                         <h4>Expense</h4>
                         <div className="expense-img"></div>
                        </Link>
                      </div>
                     </div>
                  </div>
                  <div className="total">
                    <h2>Total Balance </h2>
                    <p id="balance">{`₹${bal}`}</p>
                  </div>
                </div>
            </div>
            <Table data={data}/>
        </section>
    )
}
