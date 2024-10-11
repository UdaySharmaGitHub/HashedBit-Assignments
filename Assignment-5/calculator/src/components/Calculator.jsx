import { Keys } from "./Keys";
import { useState } from "react";
export const Calculator = () => {
  const keys = [
    "AC",
    "C",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    ".",
    "0",
    "Equals",
  ];

  const [result, setResult] = useState(false);
  const [display, setDisplay] = useState('');

const maxLength = 15;
const handleButtonClick = (value) => {
   setResult(false)
   if(display.length >= maxLength){ alert("Max lenght Limit Reached"); setDisplay('');}
   if(value==='AC'){
    setDisplay('')
   }else if(value==='C'){
    setDisplay(display.slice(0,-1))
   }else if(value==='%'){
    setDisplay((parseFloat(display)/100).toString())
   }else if(value==='Equals'){
    setDisplay(eval(display).toString())
   }else if(value==='.'){
    if(!display.includes('.')){
      setDisplay(display+'.')
    }
   }else{
    setDisplay(display+value)
   }

};

  return (
    <div className="min-w-[380px] bg-black flex flex-col gap-4 p-4 rounded-2xl">
      <div className="text-right text-whit overflow-x-auto bg-[#141414] min-h-[100px] flex justify-end items-end p-4 rounded-2xl">
       <div className="text-3xl">
       {display}
       </div>
      </div>
      <div className="grid grid-cols-4 gap-[0.3rem]">
        {keys.map((value, index) => (
          <Keys key={index} label={value} keyClass={value==='Equals'} onButtonClick={handleButtonClick} />
        ))}
      </div>
    </div>
  );
};
