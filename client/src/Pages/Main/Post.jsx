import User from './User';
import yoda from '../../assets/yoda.jpg';
import { useEffect, useState } from 'react';

export default function Post(props)
{
    let data = props.data;

    let [hasLiked,setHasLiked] = useState(false);
    let [likeCount,setLikeCount] = useState(data.likeCount);

    useEffect(()=>{
        setHasLiked(data.hasLiked);
        if(data.hasLiked)
        {
            setLikeCount(data.likeCount-1)
        }
    },[])



    if(!data)return<></>

    function liked()
    {
        //API CALL HERE
        setHasLiked(!hasLiked);
    }

    return (
    <div className='card'>
        <User className='mb-4' data={data.user}></User>
        <img className='max-h-64 w-full object-cover mb-4 rounded-xl' src={yoda} alt="" />
        <p className='text-light/75'>{data?.text}</p>
        <p className='pt-4 text-xs text-light/50'>{data?.date}</p>
        <hr className='mt-4 border border-light/10' />
        <div className='mt-4 flex justify-between md:px-20'>
            <button onClick={liked} className='flex items-center transition-all active:scale-90'>
                <span className={`material-icons ${hasLiked?"text-liked":""}`}>{hasLiked?"favorite":"favorite_border"}</span>
                <h1 className='font-bold text-xs ml-2'>{likeCount + ((hasLiked)?1:0)}</h1>
            </button>
            <button className='flex items-center hover:text-accent transition-all active:scale-90'>
                <span className="material-icons">comment</span>
                <h1 className='font-bold text-xs ml-2'>{data.commentCount}</h1>
            </button>
            <button className='flex items-center hover:text-accent transition-all active:scale-90'>
                <span className="material-icons">ios_share</span>
                <h1 className='font-bold text-xs ml-2'>{data.shareCount}</h1>
            </button>
        </div>
        {props.children}
    </div>
    )
}