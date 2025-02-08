import { useState } from 'react';
import './Fruit.css'
function Fruit(){
    const [fruit,setFruit]=useState('');
    const [fruitList,setFruitList]=useState([]);
    const displayFruits = ()=> fruitList.map((fruit,key)=><li key={key}>{fruit}</li>)

    const handleInput=()=>{
        const fruitValue = document.getElementById('fruit').value;
        setFruit(fruitValue);
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        setFruitList([...fruitList,fruit])
    }
    return (
        <div>
            <div>
                <form>
                    <input type='text' id='fruit' onChange={handleInput}/>
                    <input type='submit' value='Add fruit' onClick={handleSubmit}/>
                </form>
            </div>
            <h1 className="h1">Fruits : </h1>
            <ul>
                {displayFruits()}
            </ul>
        </div>
    )
}
export default Fruit;