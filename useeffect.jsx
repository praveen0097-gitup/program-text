import {useState,useEffect } from "react";

function StateExample2(){
    const [user,setUser]=useState('react')
    useEffect(() => {setTimeout(()=>{
    console.log("hrllo")},3000
)},[user])

const changeName = () =>{
    setUser('js')
}
return(
    <>
    <h1>{user}</h1>
    <button onClick={changeName}>changeName</button>
    </>
)
}
export default StateExample2;