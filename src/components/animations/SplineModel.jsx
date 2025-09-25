import Spline from '@splinetool/react-spline';
import {cn} from "@utils";

export default function SplineModel({url,className,setLoading}) {
  const handelLoad=()=>{
    setLoading(false);
    console.log("spline model is loaded");
  }
  
  return (
    <div className={cn("w-screen h-screen fixed inset-0",className)}>
        <Spline scene={url} onLoad={handelLoad}  />
    </div>
  );
}
