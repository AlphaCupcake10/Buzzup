import useMousePosition from "../../../Hooks/useMousePosition";

export default function Cursor()
{
    const mousePosition = useMousePosition();
    return(
        <div style={{left:mousePosition.x,top:mousePosition.y}} className='rounded-full accent-gradient -z-50 spin bg-white h-[250px] md:h-[500px] aspect-square fixed'/>
    )
}