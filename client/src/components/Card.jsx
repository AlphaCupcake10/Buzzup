function Card(props)
{
    return(
        <div className={`flex flex-col bg-dark rounded-3xl p-6 m-1 border border-white/20 + ${props.className}`}>
          {props.children}
        </div>
    )
}
export default Card;