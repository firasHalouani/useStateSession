import { useState } from "react";

function Form() {
  // we define two stateful variables, name and age
  // the argument taken by the useState are the default values of the name / age 
  // name = '', age = ''
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  // get the content of the input field for name then set the value accordingly
  const handleNameInputChange = () => {
    const n = document.getElementById('n').value
    console.log(n);
    setName(n);
  }

  // get the content of the age field for name then set the value accordingly
  const handleAgeInputChange = () => {
    const a = document.getElementById('a').value
    console.log(a);
    setAge(a);
  }

  // Define the submit behavior, preventDefault is used to prevent the default behavior
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      age
    });
  }

  // the jsx elements inside a form
  return (
    <div>
      <form>
        <input type="text" id="n" placeholder="name" onChange={handleNameInputChange} />
        <input type="number" id="a" placeholder="age" onChange={handleAgeInputChange} />
        <input type="submit" value="submit" onClick={handleSubmit} />
      </form>
    </div>
  )
}

export default Form;
