import { useNavigate } from 'react-router-dom';
// import yoda from '../../assets/yoda.jpg'
import Shimmer from './Shimmer';
import User from './User';
import { useEffect, useState } from 'react';
import { useAuth } from '../../Contexts/AuthContext';

export type PostType = {username:string,name:string,id:string,userId:string,title:string,content:string,createdAt:string,totalLikes:number,totalComments:number,isLiked:boolean|null} | null | undefined
type PropsType = {data?:PostType,children?:React.ReactNode,hideCommentButton?:boolean};
export default function Post(props:PropsType)
{
    const auth = useAuth();
    const [data,setData] = useState<PostType>();

    useEffect(()=>{
        if(props.data)
            setData(props.data);
    },[props.data])

    const reactNavigator = useNavigate();
    if(!data)return <Shimmer shimmerType='card'></Shimmer>

    function commentClicked()
    {
        reactNavigator(`/buzz/${data?.id}`)
    }

    async function likeToggle()
    {
        if(!data)return;

        //API Call
        let response = await auth?.APIFunctions.PostRequest(`/likes/toggle?modelId=${data.id}&modelType=Buzz`,{userId:props.data?.id},true);
        console.log(response);
        if(response.status == 201)
        {
            let isLiked = !data?.isLiked;
            let totalLikes = data?.totalLikes + (isLiked?1:-1);
            setData({...data,totalLikes:totalLikes,isLiked:isLiked});
        }
    }

    return(
        <div className='card'>
            <User data={{name:data.name,username:data.username}}></User>
            {/* <img className='w-full max-h-[30rem] object-contain mt-4 rounded-xl' src={yoda} alt="" /> */}
            <h1 className='font-bold text-xl mt-4'>{data.title}</h1>
            <p className='text-light/75'>{data.content}</p>
            <p className='pt-4 text-xs text-light/50'>{data.createdAt}</p>
            <hr className='mt-4 border border-light/10' />
            <div className='relative mt-4 flex justify-between md:px-20'>
                <button onClick={likeToggle} className='flex items-center transition-all active:scale-90'>
                    <span className={`material-icons ${data.isLiked?"text-liked":""}`}>{data.isLiked?"favorite":"favorite_border"}</span>
                    <h1 className='font-bold text-xs ml-2'>{data.totalLikes}</h1>
                </button>
                {(!props.hideCommentButton)?(
                <button onClick={commentClicked} className='flex items-center hover:text-accent transition-all active:scale-90'>
                    <span className="material-icons">comment</span>
                    <h1 className='font-bold text-xs ml-2'>{data.totalComments}</h1>
                </button>
                ):("")}
                <button className='flex items-center relative hover:text-accent transition-all active:scale-90'>
                    <span className="material-icons">share</span>
                </button>
            </div>
            {props.children}
        </div>
    )
}