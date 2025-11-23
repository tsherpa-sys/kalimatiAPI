import {Hero} from '../components/Hero'
import PropertyGrid from '../components/PropertyGrid';
import { properties } from '../data/properties';

const filtereProps = properties.splice(0,12)

function HavBar(){
   const items = ["Home", "Contact", "Support", "About Us"];

  return (
    <div className="flex items-center justify-center gap-6  text-black py-4">
      {items.map((item) => (
        <div
          key={item}
          className="font-20 cursor-pointer hover:text-yellow-300 transition font-medium"
        >
          {item}
        </div>
      ))}
    </div>
  );

}


function Logo(){
    return(
        <img className="w-20 h-20 m-3" src="../logo.png"></img>
    )
}

export function  Home(){
    return(
        <>
        <div className="flex align-center justify-evenly  bg-slate-300">
        <Logo/>
        <HavBar></HavBar>
        </div>
        <Hero/>
        <PropertyGrid properties={filtereProps}/>
        </>
       
       
    )
}