import { useLayoutEffect, useMemo, useRef } from "react";
import './animation.css';

export default function useAnimation(animateSelector:string,shownClass:string)
{
    const observer = useRef<IntersectionObserver>();
    const elementsRef = useRef<NodeListOf<Element>>();

    function refreshObserver()
    {
        elementsRef.current = document.querySelectorAll(animateSelector);
        if(observer.current)observer.current.disconnect();
        if(elementsRef.current.length == 0)return;
        observer.current = new IntersectionObserver((entries)=>{
            entries.forEach((element)=>{
                console.log(element);
                if(element.isIntersecting)
                {
                    element.target.classList.add(shownClass);
                }
                else
                {
                    element.target.classList.remove(shownClass);
                }
            })
        })
        elementsRef.current.forEach((element)=>{
            observer?.current?.observe(element);
        })
    }

    useMemo(()=>{
        refreshObserver();
    },[animateSelector])
    useLayoutEffect(()=>{
        refreshObserver();
    },[])

}