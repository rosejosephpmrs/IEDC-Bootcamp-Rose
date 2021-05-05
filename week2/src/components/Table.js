import React from 'react'
import '../styles/Table.css'

export default function Table({data,page,setData,setBalance}) {
    
    const newData= page!=null? data.filter((item)=> item.type===page):data

    const deleteRecord = id=>{
        let removeArr = data.map((item)=>{
            if (item.id===id)
            setBalance((prev)=> page==="earning" ? prev-parseInt(item.amount) : prev + parseInt(item.amount))
              return item
        }).filter((item)=>item.id!==id)
        setData(removeArr)
      }
    
    return (
        <section>
        <div className="container">
            <table id="records">
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Category</th>
                    <th>Amount</th>
                    <th>Note</th>
                </tr>
                </thead>
                
                <tbody>
                    { 
                        newData.map((item,key)=> {return(
                        <tr key={key}>
                            <td>{item.date}</td>
                            <td>{item.category}</td>
                            { item.type==="expense"?
                              <td>{`- ₹${item.amount}`}</td>:
                              <td>{`+ ₹${item.amount}`}</td>
                            }
                            <td>{item.note}</td>
                            {   
                                page && <p className="delete" onClick={()=>{deleteRecord(item.id)}}>
                                          <i className="far fa-trash-alt"></i>
                                        </p>
                            }
                        </tr>)}
                        )
                    }
            </tbody> 
            </table>
            { newData.length===0 && <h1 className="no-records">No Records</h1>}
        </div>
        
    </section>
    )
}
