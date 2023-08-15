import { useEffect, useState } from "react";

export default function useMousePosition() {
  const [mousePosition, setMousePosition] = useState<{x:number,y:number}>({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMoveHandler = (event:MouseEvent) => {
      const { clientX, clientY } = event;
      setMousePosition((prev)=>{
        prev.y += (clientY-prev.y)/20;
        prev.x += (clientX-prev.x)/20;
        return {...prev};
      });
    };
    document.addEventListener("mousemove", mouseMoveHandler);

    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
    };
  }, []);

  return mousePosition;
}