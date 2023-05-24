function InputField(props)
{
    const {id,label,type,onChange,value} = props;
    return(
        <div className="my-6">
            <label htmlFor={id} className="text-light/50">{label}</label>
            <input id={id} value={value} onChange={onChange} type={type} autoComplete="off" className="rounded-xl p-3 w-full bg-darker border border-white/20  outline-none  focus:border-accent"/>
        </div>
    )
}

export default InputField;