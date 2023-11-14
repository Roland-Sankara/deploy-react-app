import {useState} from "react";
import InputElement from "./components/InputElement";
import QuoteCard from "./components/QuoteCard";
import {Rating} from "@mantine/core"

function App(){
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');

  function handleChange(event){
    let element = event.target
    let password = process.env.APP_PASSWORD

    if(element.id == "email" && password.length > 5){
      setEmail(element.value)
    }else{
      setNumber(element.value)
    }
  }

  return (
    <div>
      <form className="w-full md:w-7/12 m-auto bg-[teal] md:bg-[#E57C23] text-white p-2 md:p-16 text-[30px] flex gap-8 mt-[2rem] rounded-lg font-mono flex-col md:flex-row">
        <InputElement id="email" type="email" label="Email" value={email} func={handleChange}/>
        <InputElement id="number" type="number" label="Number" value={number} func={handleChange} max={5}/>
      </form>

      <div className="w-1/2 m-auto">
        <QuoteCard/>
        <Rating defaultValue={2} className="py-8"/>
      </div>

    </div>
  )
}

export default App;