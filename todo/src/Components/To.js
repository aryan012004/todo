import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


function To() {

    let [data1, setData1] = useState([]);
    let [to,setto]=useState({});

    let [user,setuser]=useState([])
   
    
    
    let deleteData = (id) => {
        let pos = data1.findIndex(v => v.id == id);
        data1.splice(pos, 1);
        setData1(data1);
        
    }
    let getValue= (e)=>{
      let name= e.target.name
      let value = e.target.value
      setto({...to,[name]:value});
    }

    let Tododata = (e) => {
        e.preventDefault()
        var obj = {
            task: e.target.task.value,
            date: e.target.date.value,
            category: e.target.category.value,
            id: Math.round(Math.random() * 1000)
        }
        var newRacord = ([...data1, obj]);
        setData1(newRacord);
        axios.post("http://localhost:3000/todo/",to)
        .then((res)=>
        {
            console.log("d")
        })

        e.target.task.value = ""
        e.target.date.value = ""
    }
    var color = ""
    return (
        <div>

            <div>
                <h1 style={{textAlign:'center'}}>To-Do List</h1>
                <form method="post" onSubmit={(e) => Tododata(e)}>
                    <table border={1} cellPadding="25px" style={{backgroundColor:'#2bbacf',margin:'0 auto'}}>
                        <tr>
                            <td>Enter Your Task :</td>
                            <td><textarea type="text" name="task" style={{height:'50px'}}onChange={(e) =>getValue(e)}/></td>
                        </tr>
                        <tr>
                            <td>Enter Task  category :</td>
                            <td>
                                <select name="category"style={{height:'30px'}}onChange={(e) =>getValue(e)}>
                                    <option value="Personal">Personal Task</option>
                                    <option value="Office">Office Task</option>
                                    <option value="Family">Family Task</option>
                                    <option value="Other">Other Task</option>
                                </select>

                            </td>
                        </tr>
                        <tr>
                            <td>Enter Task Date :</td>
                            <td><input type="date" name="date" onChange={(e) =>getValue(e)}/></td>
                        </tr>

                        <tr>
                            <td><input   style={{backgroundColor:'#ff7cea', padding:'10px 20px', borderRadius:'5px', fontSize:'18px', fontWeight:'600'}} type="submit" /></td>
                        </tr>
                        <Link to='viewtodo' style={{textDecoration:'none',color:'black',textAlign:'center'}}>View Todo List</Link>
                    </table>
                </form>
                 <br/><br/><br/>
            </div>

            {data1.map((v, i) => {
                return (
                    <div>

                        <p style={{ display: "none" }}>
                            {v.category == 'Personal' ?
                                color = "green"
                                : v.category == 'Office' ?
                                    color = "gray"
                                : v.category == 'Family' ?
                                        color = "red"
                                : v.category == 'Other' ?
                                            color = "orange"
                                        :
                                            alert = "color is not define"
                            }
                        </p>
                        <div className="Task" style={{ backgroundColor: color,height:'321px',width:'432px' }}>
                            <div className="heading">
                                <h4>Date : {v.date}</h4>
                                <button onClick={(e) => deleteData(v.id)}>❌</button>
                            </div>
                            <h1>{v.category}Task :</h1>
                            <p>{v.task}</p>
                        </div>
                    </div>
                )
            })}

        </div >

    )
}

export default To;