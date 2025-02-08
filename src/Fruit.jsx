import { useState } from 'react';
import './Fruit.css'
function Fruit() {

  // fruit is a stateful variable containing a string value 
  const [fruit, setFruit] = useState('');

  // fruitslist is an array for strings of fruits
  const [fruitList, setFruitList] = useState([]);

  // this is a map function to dynamically build list elements from the values of the fruitList array 
  const displayFruits = () => fruitList.map((fruit, key) => <li key={key}>{fruit}</li>)

  // take the input field of fruit and get the contents of the input
  const handleInput = () => {
    const fruitValue = document.getElementById('fruit').value;
    setFruit(fruitValue);
  }

  // define the submit behavior for the form
  const handleSubmit = (e) => {
    e.preventDefault()
    setFruitList([...fruitList, fruit])
  }


  // the elements are in here, className is used along with css ;)
  return (
    <div>
      <div>
        <form>
          <input type='text' id='fruit' onChange={handleInput} />
          <input type='submit' value='Add fruit' onClick={handleSubmit} />
        </form>
      </div>
      <h1 className="h1">Fruits: </h1>
      <ul>
        {displayFruits()}
      </ul>
    </div>
  )
}
export default Fruit;
