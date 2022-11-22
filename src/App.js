import { useEffect, useState } from 'react';
import Currency from './component/currency'
import axios from 'axios';
import './style.css'

function App() {

  const [ currency , setCurrency ] = useState([])
  const [ fromcurrency , setFromcurrency] = useState('USD')
  const [ tocurrency , setTocurrency] = useState('THB')

  const [amount,setAmount] = useState(1)
  const [exchangerate,setExchangerate] = useState(0)

  const [checkfromcurrency , setcheckfromcurrency] = useState(true)
  const [ getdate, setGetdate ] = useState('')
  
  let fromAmount, toAmount

  if (checkfromcurrency){
    fromAmount = amount
    toAmount = (amount*exchangerate).toFixed(2)
  } else {
    toAmount = amount
    fromAmount = (amount/exchangerate).toFixed(2)
  }
  
  const baseURL = `https://api.exchangerate-api.com/v4/latest/${fromcurrency}` 

  
  useEffect(()=>{
    getdataaxios()
  },[fromcurrency , tocurrency])


  const getdataaxios = async() =>{
    const response = await axios.get(baseURL)
    console.log(response.data)
    setGetdate(response.data.date)
    setCurrency([...Object.keys(response.data.rates)])
    setExchangerate(response.data.rates[tocurrency])
  }

  const amountFromCurrency=(e)=>{
    setAmount(e.target.value)
    setcheckfromcurrency(true)
  }

  const amountToCurrency=(e)=>{
    setAmount(e.target.value)
    setcheckfromcurrency(false)
  }


  return(
    <div class='container d-flex flex-column align-items-center p-5 w-75 text-center'>
      <h1 class='fs-1 fw-semibold mt-1 mt-md-5 mx-5 text-dark position-static'> Currency Exchange</h1>
      <h3 class='fs-6 fw-light text-secondary mx-5'>  exchange rate for transfer your money  </h3>
      
      <div class=' p-4 mt-2 mt-md-5 d-flex flex-column flex-nowrap flex-md-row min-vw-50'>
        <Currency 
        currency = {currency} 
        change = {fromcurrency}
        newa = {(e)=>setFromcurrency(e.target.value)}
        amount = {fromAmount}
        onChange = {amountFromCurrency}
        direction = 'from'
        />
        
        <Currency 
        currency = {currency} 
        change = {tocurrency}
        newa = {(e)=>setTocurrency(e.target.value)}
        amount = {toAmount}
        onChange = {amountToCurrency}
        direction = 'to'
        />
      </div>
      <div class = 'container d-flex flex-column mt-2 mt-md-5 pt-4 pt-sm-5'>
        <label> {getdate} </label>
        <div class = 'd-flex flex-column flex-md-row justify-content-center'>
        <label class= 'fw-light fs-6' > Provider: </label>
        <a href="https://www.exchangerate-api.com/"  target="_blank" rel="noopener noreferrer" 
        class='fw-light text-decoration-none text-secondary ' > https://www.exchangerate-api.com/ 
        </a>
        </div>
        </div>
    </div>
  )
}
export default App;