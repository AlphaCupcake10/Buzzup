import ProfileCard , { ProfileCardType } from "../Common/ProfileCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../../Contexts/AuthContext";
import Post ,{PostType} from "../Common/Post";
import { useToast } from "../../Contexts/ToastContext";

export default function ProfilePage()
{
    const {id} = useParams();
    const auth = useAuth();
    const toast = useToast();
    const [profileData,setProfileData] = useState<ProfileCardType>(null);
    const [postData,setPostData] = useState<PostType[]>([]);

    useEffect(()=>{
        console.log("changed");
        getUser();
    },[id])

    useEffect(()=>{
        if(profileData)
            getPosts();
    },[profileData]);
    
    async function getUser()
    {
        let response = await auth?.APIFunctions.GetRequest(`user/${id}`,auth?.isAuthorized);
        if(response?.status == 200)
        {
            let profileData:ProfileCardType = response.data.data;
            setProfileData(profileData);
        }
        else if(response?.status == 404)
        {
            console.log("TODO TOAST PROFILE NOT FOUND");
            toast?.CreateToast({title:"User Not Found",body:"",mode:"Error"})
            setProfileData(null);
        }
        else
        {
            setProfileData(null);
        }
    }
    async function getPosts()
    {
        //TODO LIMIT POSTS FOR NOT AUTH
        let response = await auth?.APIFunctions.GetRequest(`/buzzes/${profileData?.id}/?start=0&limit=10`,auth.isAuthorized);
        console.log(response);
        if(response?.data?.data)
            setPostData(response?.data?.data);
    }

    return(
        <div className="overflow-y-auto overflow-x-hidden h-full">
            <ProfileCard data={profileData}/>
            {
                postData?.map((data,index)=><Post key={index} data={data}/>)
            }
        </div>
    )
}