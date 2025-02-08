import { useState } from "react";

function Form(){
    const [name,setName]= useState('');
    const [age,setAge]= useState('');

    const handleNameInputChange = ()=>{
        const n = document.getElementById('n').value
        console.log(n);
        setName(n);
    }
    const handleAgeInputChange = ()=>{
        const a = document.getElementById('a').value
        console.log(a);
        setAge(a);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log({
            name,
            age
        });
        
    }
    return(
        <div>
            <form>
                <input type="text" id="n" placeholder="name" onChange={handleNameInputChange}/>
                <input type="number" id="a" placeholder="age" onChange={handleAgeInputChange}/>
                <input type="submit" value="submit" onClick={handleSubmit}/>
            </form>
        </div>
    )
}
export default Form;