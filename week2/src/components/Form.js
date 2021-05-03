import React,{useState,useEffect} from 'react'
import '../styles/Form.css'
import {validateInfo} from './validateInfo'

export default function Form({balance,setBalance,data,setData,page,categories}) {

    const [state,setState] = useState({date:"",category:"",amount:"",note:"",type:page}) 
    const [errors,setErrors]= useState({})
    const [submitting,setSubmitting]=useState(false)

    const handleChange= (e)=>{
        const {name,value} = e.target
       setState({...state,[name]:value})
    }
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        setErrors(validateInfo(state))
        setSubmitting(true)
    }
    useEffect(()=>{
        if(Object.keys(errors).length===0 && submitting){
            setBalance((prevState)=> page==="earning"? prevState+ state.amount: prevState-state.amount)
            setData((prevState)=> [...prevState,state])
            setState({date:"",category:"",amount:0,note:"",type:page})
        }
     },[errors]
    )

    return (
        <div className="container">
            <div className="form" >
              <form className= {page==="earning"?"earning-form":"expense-form"} onSubmit={handleSubmit}>
                    <fieldset>
                         <legend>{page==="earning"?"Add Earning":"Add Expense"}</legend>
                         <div className="date">
                         <label htmlFor="date">Date: </label>
                            <input 
                              type="date"
                              name="date"
                              placeholder="dd-mm-yyyy"
                              value = {state.date}
                              onChange={handleChange}
                              autoComplete="off"
                            />
                            {errors.date && <p>{errors.date}</p>}
                         </div>
                         <div className="category">
                            <label htmlFor="category">Category: </label>
                            <select  name="category" value= {state.category} onChange={handleChange}>
                                <option defaultValue>Select category</option>
                                {
                                   categories.map((item,key)=>{
                                       return(
                                        <option value={item} key={key}>{item}</option> 
                                       )
                                   })
                                }
                            </select>
                            {errors.category && <p>{errors.category}</p>}
                         </div>
                         <div className="amt">
                            <label htmlFor="amount">Amount: </label>
                            <input 
                              type="number"
                              name="amount"
                              placeholder="Enter the amount"
                              value={state.amount}
                              onChange={handleChange}
                              autoComplete="off"
                            />
                            {errors.amount && <p>{errors.amount}</p>}
                        </div>
                         <div className="note">
                         <label htmlFor="note">Note: </label>
                            <input 
                              type="text"
                              name="note"
                              placeholder="Enter a note"
                              value={state.note}
                              onChange={handleChange}
                              autoComplete="off"
                            />
                        </div>
                         <button>ADD</button>
                    </fieldset>
                </form>
            </div>
         </div>
    )
}
