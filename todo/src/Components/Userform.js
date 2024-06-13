import { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';


function Userform()
{
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
    let inputValue = (e)=>{
        let name= e.target.name
        let value = e.target.value
        let newdata = {...data,[name]:value}
        setdata(newdata)
        
    }
    let Review = (e)=>{
    e.preventDefault();
      
    var newRacord = ([...person, data])
    setperson(newRacord);
    localStorage.setItem('user', JSON.stringify(newRacord));
       
      
       
    }
    return(
        <div>
          
          <Container>
          <Form method="post" onSubmit={(e)=>Review(e)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control type="text" name="title" placeholder="Enter title" onChange={(e)=>inputValue(e)}/>
               
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control type="text" name="description" placeholder="Enter title" onChange={(e)=>inputValue(e)}/>
                
            </Form.Group>
            <Form.Label>Rating</Form.Label>
            <Form.Control type="text" name="rating" placeholder="review " onChange={(e)=>inputValue(e)}/>

           
            <Button variant="primary" type="submit">
                Submit
            </Button>
    </Form>
    <table>
                <tr>
                    <td>#</td>
                    <td>Title</td>
                    <td>Description</td>
                
                    <td>Rating</td>
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
        </Container>
        </div>
    )
}

export default Userform;