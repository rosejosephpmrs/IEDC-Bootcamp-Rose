import React from 'react'
import Form from './Form'
import Table from './Table'

export default function Earnings({balance,setBalance,data,setData}) {
    
    const categories = ["Checks, Coupons","Gifts","Salary","Lending, Renting","Rental Income","Refunds","Sale","Dues and grants","Interests, Dividends","Others"]

    return (
        <section>
            <Form page="earning" categories={categories} balance={balance} setBalance={setBalance} data={data} setData={setData}/>
            <Table data={data} page="earning" />
        </section>
    )
}
