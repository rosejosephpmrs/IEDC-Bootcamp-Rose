import React from 'react'
import Form from './Form'
import Table from './Table'

export default function Earnings({setBalance,data,setData}) {
    
    const categories = ["Checks, Coupons","Gifts","Salary","Lending, Renting","Rental Income","Refunds","Sale","Dues and grants","Interests, Dividends","Others"]

    return (
        <section>
            <Form page="earning" categories={categories} setBalance={setBalance} setData={setData}/>
            <Table data={data} page="earning" setBalance={setBalance} setData={setData} />
        </section>
    )
}
