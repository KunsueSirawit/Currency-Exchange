const Currency = (props) => {

    const {currency , change , newa, amount, onChange , choice  ,direction} = props

    return(
        <div class='p-2' >
            <label class='text-secondarsy fs-6 fw-light text-start '> {direction} </label>
            <select class='form-select w-100 min-vw-25  ' value={change} onChange = {newa}>
                {currency.map((data,keys)=>{
                    return <option  value={choice}> {data} </option>
                })}
            </select>
            
            <input class = 'form-control-plaintext  fs-1' type="number"  min="0"  id="postfix" value={amount} onChange = {onChange} />
        </div>
    )
}

export default Currency