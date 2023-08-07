import styles from './AudioVis.module.css'

type AudioVisualizerPropsType = {className?:string,count:number,timePeriodFactor:number,randomFactor:number,hueRotateFactor:number}
export default function AudioVisualizer({className,count,randomFactor,timePeriodFactor,hueRotateFactor}:AudioVisualizerPropsType) {
    return (
        <div className={`card w-full p-2 h-56 ${styles.random} ${className}`}>
            <div className="bg-darker w-full p-4 h-full rounded-md flex items-center justify-between">
                {
                    (()=>{
                        let arr = [];
                        for(let i = 0 ; i < count ; i++)
                        {
                            arr.push(<div key={i} style={{filter:`hue-rotate(${i/count*360*hueRotateFactor}deg)`,animationDelay:`${i*timePeriodFactor + Math.random()*randomFactor}ms`}} className={`${styles.bar} w-2 h-0 bg-accent rounded-full`}></div>)
                        }
                        return arr;
                    })()
                }
            </div>
        </div>
    );
}
