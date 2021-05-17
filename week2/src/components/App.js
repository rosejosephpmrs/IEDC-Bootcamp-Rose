import React,{useState} from 'react'
import Navbar from './Navbar/Navbar'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import Home from './Home'
import Earnings from './Earnings'
import Expenses from './Expenses'
import Records from './Records'

function App(){

    const [balance,setBalance]=useState(0)
    const [data,setData]=useState([])
    const [edit,setEdit] = useState({id:null,value:{}})

    return (
      <div>
        <Router>
          <Navbar/>
          <Switch>
            <Route path='/' exact ><Home bal={balance} data={data}/></Route>
            <Route path='/earnings'><Earnings setBalance={setBalance} data={data} setData={setData} edit={edit} setEdit={setEdit}/></Route>
            <Route path='/expenses'><Expenses setBalance={setBalance} data={data} setData={setData} edit={edit} setEdit={setEdit}/></Route>
            <Route path='/records'><Records data={data}/></Route>
          </Switch>
        </Router>
       
      </div>
    )
}
export default App;