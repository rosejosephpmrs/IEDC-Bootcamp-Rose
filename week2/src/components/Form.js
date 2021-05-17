import React,{useState,useEffect} from 'react'
import '../styles/Form.css'
import {validateInfo} from './validateInfo'

export default function Form({setBalance,setData,page,categories,edit,setEdit}) {

    const [state,setState] = useState({id:Math.floor(Math.random()*1000),date:"",category:"",amount:"",note:"",type:page}) 
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
        if(Object.keys(errors).length===0 && submitting && !edit.id){
            setBalance((prevState)=> page==="earning"? prevState+ parseInt(state.amount): prevState-parseInt(state.amount))
            setData((prevState)=> [...prevState,state])
            setState({date:"",category:"",amount:0,note:"",type:page})
        }
        if(Object.keys(errors).length===0 && submitting && edit.id){
            setBalance((prevState)=> page==="earning"? prevState + parseInt(state.amount) - parseInt(edit.value.amount)
                                                     : prevState - parseInt(state.amount) + parseInt(edit.value.amount))
            setData((prevState)=> prevState.map( item => (item.id===edit.id? state : item) ))
            setState({date:"",category:"",amount:0,note:"",type:page})
            setEdit({id:null,value:{}})
        }
     },[errors]
    )

    useEffect(()=>{
        if(edit.value.type===page)
          setState({id:edit.id, date:edit.value.date, category:edit.value.category, amount:edit.value.amount, note:edit.value.note, type:page})
    },[edit])
    
    return (
        <div className="container">
            <div className="form" >
              <form className= {page==="earning"?"earning-form":"expense-form"} onSubmit={handleSubmit}>
                    <fieldset>
                         <legend>{page==="earning"?(edit.id?"Edit Earning":"Add Earning"):(edit.id?"Edit Expense":"Add Expense")}</legend>
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
