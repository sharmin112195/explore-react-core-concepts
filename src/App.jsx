import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './BookStore'


function App() {
  const [count, setCount] = useState(0)

  const actor = ['Sakib', 'Raj', 'shuvo','salman']
  const singers = [
    {id:1, name:'Dr. Mahfuzur Rahman', age:68},
    {id:2, name:'Eva Rahman', age:38},
    {id:3, name:'Imran Mahabub', age:35},
    {id:4, name:'Kona', age:36}
  ]

  const books =[
    {id:1, name:'Physics', price:100},
    {id:2, name:'Math', price:120},
    {id:3, name:'Chemistry', price:130},
    {id:4, name:'Biology', price:140}
    
  ]
  return (
    <>
      
      <h2>Vite + React</h2>
      <BookStore books = {books}></BookStore>
      {
        singers.map(singer => <Singer singer={singer}></Singer>)
      }
      
      <Actor name={"Tahasan"}></Actor>
      {
        actor.map(actor => <Actor name={actor}></Actor>)
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Concept" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Person></Person>
      <Person></Person>
      <Student grade='7' score='99'></Student>
      <Student></Student>
      <Developer></Developer>
      <Device name='Laptop' price='55'></Device>
      <Device name='Mobile' price='17'></Device>
      <Device name='Watch' price='3'></Device> */}
     
      
    </>
  )
}
function Person(){
  const age = 25;
  const money = 20;
  const person = {name:'sarfaraj' , age:10}
  return <h2>I am a {person.name} with age:{age + money}</h2>
}
const {grade=1,score=0} = {grade:'7', score:'99'}
console.log(grade,score)
function Student(){
  return(
    <div className='student'>
      <h3>This is a student</h3>
      <p>Class:{grade}</p>
      <p>Score:{score}</p>
    </div>
  )
}
function Developer(){
  const developerStyle ={
    margin:'20px',
    padding:'20px',
    border:'2px solid purple',
    borderRadius:'10px'
  }
  return(
    <div style={developerStyle}>
      <h5>Devo devo</h5>
      <p>Coding:</p>
    </div>
  )
}
function Device(props){
  console.log(props)
  return(
    <h2>This device:{props.name} price:{props.price}</h2>
  )
}
export default App
