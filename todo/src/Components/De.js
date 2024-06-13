import { useEffect, useState } from "react";


function De(){
    let [data,setdata]=useState({})
    let [person,setperson]=useState([])
    useEffect(()=>{
        let localRecord = JSON.parse(localStorage.getItem("user"));
        if(localRecord == null)
        {
            setperson([])
        }
        else{
            setperson(localRecord)
        }
    },setperson)

    let getValue = (e)=>{
        let name = e.target.name;
        let value = e.target.value;
        let newdata = {...data,[name]:value}
        setdata(newdata)
        
    }
    let H= (e)=>{
        e.preventDefault();
       
        var newRacord = ([...person, data])
        setperson(newRacord);
        localStorage.setItem('user', JSON.stringify(newRacord));
    }
    return(
        <div>
              <form method="post" onSubmit={(e) =>H(e)}>
              <table>
                    <tr>
                        <td>Title</td>
                        <td><input type="text" name="title" onChange={(e)=>getValue(e)}/></td>
                    </tr>
                    <tr>
                        <td>Description</td>
                        <td><input type="text" name="description" onChange={(e)=>getValue(e)}/></td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="submit" name="submit" /></td>
                    </tr>
              </table>

              </form>
              <table>
                <tr>
                    <td></td>
                    <td>Title</td>
                    <td>Description</td>
                </tr>
                {person.map((v,i)=>{
                    return(

                    <tr>
                        <td>{++i}</td>
                        <td>{v.title}</td>
                        <td>{v.description}</td>
                    </tr>
                    )
                })}
              </table>
        </div>
    )
}
export default De;