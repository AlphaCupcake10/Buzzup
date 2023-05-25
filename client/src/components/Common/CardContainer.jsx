function CardContainer(props)
{
    return(
        <div className={`flex flex-col bg-dark rounded-3xl m-1 border border-white/20 overflow-clip ${props.className}`}>
          {props.children}
        </div>
    )
}
export default CardContainer;