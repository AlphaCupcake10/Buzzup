import FormButton from '../Login/FormButton';
import { Link } from "react-router-dom";

export default function NotFound404(props)
{    
    let label;
    if(props.label)label = props.label;
    else label = "GO HOME";

    let to;
    if(props.to)to = props.to;
    else to = "/";

    return(
        <div className='grow flex flex-col overflow-scroll'>            
            <div className="card grow flex flex-col items-center justify-center">
                <h1 className='text-7xl md:text-9xl font-black'>404</h1>
                <h1 className='text-xl md:text-2xl font-bold'>PAGE NOT FOUND</h1>
                <Link to={to}><FormButton className='mt-4 w-48 md:w-80'>{label}</FormButton></Link>
            </div>
        </div>
    )
}