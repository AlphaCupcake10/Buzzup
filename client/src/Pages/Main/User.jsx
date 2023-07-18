import yoda from '../../assets/yoda.jpg';
import { useAuth } from '../../Contexts/AuthContext';
export default function User(props)
{
    const {userdata} = useAuth();
    
    let className = props.className;
    let data = props.data;
    if(!data)//fetch current user
    {
        data = userdata;
        data.name = userdata.username;
        userdata.username = userdata.username;
    }
    return(
        <div className={`${className} flex`}>
            <img src={yoda} className='object-cover w-14 h-14 bg-accent rounded-full mr-4'></img>
            <div className='flex flex-col justify-center'>
                <h1 className='font-bold'>{data.name}</h1>
                <h2 className='text-light/50 text-xs'>@{data.username}</h2>
            </div>
            {props.children}
        </div>
    )
}