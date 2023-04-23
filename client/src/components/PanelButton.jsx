function PanelButton(props)
{
    return(
        <div className="p-4 flex items-center 
        hover:font-bold hover:bg-accent grow hover:grow-[8]
        cursor-pointer select-none transition-all duration-300 ">
          <span className="material-symbols-outlined">{props.icon}</span>
          <h1 className="ml-6">{props.label}</h1>
        </div>
    );
}
export default PanelButton;