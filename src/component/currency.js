const Currency = (props) => {

    const {currency , change , newa, amount, onChange , choice  ,direction} = props

    return(
        <div className='p-2' >
            <label className='text-secondarsy fs-6 fw-light text-start '> {direction} </label>
            <select className='form-select w-100 min-vw-25  ' value={change} onChange = {newa}>
                {currency.map((data,keys)=>{
                    return <option value={choice} key={keys}> {data} </option>
                })}
            </select>
            
            <input className = 'form-control-plaintext  fs-1' type="number"  min="0"  id="postfix" value={amount} onChange = {onChange} />
        </div>
    )
}

export default Currency