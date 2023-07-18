import yoda from '../../assets/yoda.jpg';
import Post from './Post';
import User from './User';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function BuzzPage()
{

    const {id} = useParams();

    useEffect(()=>{
        //TODO
        //check if buzz exists
        //otherwise navigate to 404
    },[])

    const feeddata =
    {
        date:"15/07/23",
        text:"Yoda You can call me" + id,
        hasLiked:true,
        likeCount:100,
        commentCount:100,
        shareCount:100,
        user:
        {
            name : "Lakshman",
            username : "@notlxm"
        }
    }

    
    return(
        <div className='grow flex flex-col overflow-scroll'>            
            <Post data={feeddata}>
                <div className='mt-4'>
                    <hr className='border border-light/10' />
                    <User className='mt-4'></User>
                    <p className='text-light/75 mt-2'>Always with you, it cannot be done.</p>
                    <p className='text-xs text-light/50'>26/12/23</p>
                </div>
            </Post>
        </div>
    )
}