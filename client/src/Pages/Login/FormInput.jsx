export default function FormInput(props)
{
    return(
        <>
        <h2 className="text-light/75">{props.label}</h2>
        <input type={`${props.type}`} id={props.id} value={props.value} onChange={props.onChange}
        className={`${props.className} m-1 md:m-2 p-4 bg-darker rounded-lg text-light/75 outline-none
        focus:border-b-accent border-b-light/0 border-b-2 focus:rounded-b-none
        transition-all duration-500`}/>
        </>
    )
}