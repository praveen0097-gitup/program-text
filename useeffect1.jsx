import { useEffect, useState } from "react"

const sampleData = [
    {name: 'akil', age: 2, location:'chennai'},
    {name: 'zafer', age: 5, location:'chennai'}
]

function Table1(){
    const [data,setData] = useState([]);
    useEffect(( )=> {
        console.log("done");
        setTimeout(()=>{
            setData(sampleData)

        },3000);
    });
    return (
        <table>
            <tr>
                <th>Name</th>
                <th>age</th>
                <th>location</th>
            </tr>
        
        {data.length === 0 && <td>loading....</td>}
        {data.map((dat) => (
            <tr>
                <td>{dat.name}</td>
                <td>{dat.age}</td>
                <td>{dat.location}</td>
            </tr>
      
        )
        )}
        </table>
    )

}

export default Table1;