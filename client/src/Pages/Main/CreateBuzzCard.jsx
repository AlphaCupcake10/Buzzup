import User from './User';
import { useEffect, useRef, useState } from 'react';

export default function CreateBuzzCard(props)
{    
    const textareaRef = useRef(null);
    let [bodyText,setBodyText] = useState("");

    useEffect(() => {
        textareaRef.current.style.height = "0px";
        const scrollHeight = textareaRef.current.scrollHeight;
        textareaRef.current.style.height = scrollHeight + "px";
    }, [bodyText]);

    return (
        <div className={`${props.className}`}>
            <User className=''></User>
            <textarea ref={textareaRef} value={bodyText} onChange={e=>{setBodyText(e.target.value);}} rows="1" placeholder="What's on your Mind?"
            className='w-full mt-4 bg-dark overflow-hidden p-4 outline-none resize-none
            focus:border-b-accent border-b-light/10 border-b-2 transition-colors duration-500
            ' ></textarea>
        
            <hr className='-mt-2 border border-light/10' />
            <div className='mt-4 flex justify-between'>
                <button className='flex items-center justify-center'>
                    <span className={`material-icons`}>attach_file</span>
                </button>
                <button className='bg-accent px-4 py-2 rounded-lg font-black hover:brightness-95 active:scale-95 transition-transform duration-300'>BUZZ</button>
            </div>
        </div>
    )
}