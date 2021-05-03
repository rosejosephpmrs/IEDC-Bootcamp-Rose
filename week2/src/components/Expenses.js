import React from 'react'
import Form from './Form'
import Table from './Table'

export default function Expenses({balance,setBalance,data,setData}) {

    const categories =["Food","Shopping","Housing","Transportation","Vehicle","Entertainment","Communication","Investments","Financial Expenses","Others"]

    return (
        <section>
            <Form page="expense" categories ={categories} balance={balance} setBalance={setBalance} data={data} setData={setData}/>
            <Table data={data} page="expense" />
        </section>
    )
}
