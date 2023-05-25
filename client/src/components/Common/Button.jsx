function Button(props)
{
    let {id,label,type} = props;
    if(!label)
    {
        label = "BUTTON";
    }
    return(
        <div className="mt-6">
            <button className="w-full rounded-xl p-3 bg-accent font-bold">{label}</button>
        </div>
    )
}

export default Button;