import { useParams } from 'react-router-dom';
import yoda from '../../assets/yoda.jpg';
import Post from './Post';
import { useEffect } from 'react';

export default function ProfilePage()
{
    const {id} = useParams();

    useEffect(()=>{
        //if id null goto current user
        //TODO
        //check if user exists
        //otherwise navigate to 404
    },[])

    let data = {};
    data.name = id;
    data.username = "@" + id;
    data.bio = "Day Dreamer 🤯✨";
    data.website = "kushagra-goyal-14.github.io";
    data.followers = 123;
    data.following = 123;
    data.buzzes = 4;

    const feeddata =
    {
        date:"15/07/23",
        text:"Yoda You can call me",
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
            <div className='card'>
                <div className='pattern h-48 rounded-xl'></div>
                <img src={yoda} className='object-cover w-32 h-32 border-8 border-dark relative -translate-y-16 translate-x-4 bg-accent rounded-full mr-4' alt="" />
                <div className='-mt-16'>
                    <h1 className='font-bold text-2xl'>{data.name}</h1>
                    <h2 className='text-light/50'>{data.username}</h2>
                </div>
                <h3 className='text-light/50 mt-4'>{data.bio}</h3>
                <a href={`https://${data.website}`} className='text-light/50'>{data.website}</a>
                <div className='flex mt-4 flex-wrap'>
                    <div className='card grow flex flex-col justify-center items-center'>
                        <h1 className='text-xl font-black'>{data.buzzes}</h1>
                        <h1>Buzzes</h1>
                    </div>
                    <div className='card grow flex flex-col justify-center items-center'>
                        <h1 className='text-xl font-black'>{data.followers}</h1>
                        <h1>Followers</h1>
                    </div>
                    <div className='card grow flex flex-col justify-center items-center'>
                        <h1 className='text-xl font-black'>{data.following}</h1>
                        <h1>Following</h1>
                    </div>
                </div>
            </div>
            <Post data={feeddata}></Post>
            <Post data={feeddata}></Post>
        </div>
    )
}