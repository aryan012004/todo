import { useState,useEffect } from "react"
import axios from "axios";
function Viewtodos()
{
    let [data1, setData1] = useState([]);
    useEffect(()=>{
        let getData=()=>{
           axios.get("http://localhost:3000/todo")
              .then((res)=>{
                let data = res.data
                setData1(data)
                console.log(data)
              })
              .catch((err)=>{
               console.log('something wrong')
              })
           }
           getData();
      })
      var color = ""
    return(
        <div>
            <h1>View Todo List</h1>
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
                                {/* <button onClick={(e) => deleteData(v.id)}>❌</button> */}
                            </div>
                            <h1>{v.category}Task :</h1>
                            <p>{v.task}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Viewtodos;