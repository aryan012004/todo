import { useEffect, useState } from "react";

function Person()
{
    let [person, setperson] = useState([]);
    let [persondata,setpersondata] = useState({});
    let [active,setActive] = useState(false);
    let [position,setPosition] = useState(-1);

    let [hobbydata, setHobbydata] =useState([]);
    let [personerror, setPersonerror] =useState({});



    let [city, setcity] =useState(["Surat","Mumbai","Ahemdabad","Vadodara"])

    useEffect(function () {
        setTimeout(()=>{
            let localData = JSON.parse(localStorage.getItem('personDetails'));
            if (localData == null) {
                setperson([]);
            }
            else {
                setperson(localData);
            }
        },1000)
        
    })

    let handleSubmit=(e)=>{
        e.preventDefault();

        let imgType =["image/jpg","image/jpeg","image/png"];

        if(e.target.username.value =="")
        {
            setPersonerror({...personerror,["username"]:"username is required"});
        }
        else if(e.target.username.value.length<=3)
        {
            setPersonerror({...personerror,["username"]:"username is 2 or more character required"});
        }
        else if(e.target.email.value == "")
        {
            setPersonerror({...personerror,["email"]:"email is required"});
        }
        else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(e.target.email.value)))
        {
            setPersonerror({...personerror,["email"]:"enter valid email"});
        }
        else if(e.target.gender.value == "")
        {
            setPersonerror({...personerror,["gender"]:"please select one any gender"});
        }
        else if(hobbydata.length == 0)
        {
            setPersonerror({...personerror,["hobby"]:"please select any hobby"});
        }
        else if(e.target.city.value == "")
        {
            setPersonerror({...personerror,["city"]:"please select city"});
        }
        else if(e.target.message.value == "")
        {
            setPersonerror({...personerror,["message"]:"message is required"});
        }
        else if(e.target.message.value.length > 5)
        {
            setPersonerror({...personerror,["message"]:"message is  5 or more charecter"})
        }
        else if(e.target.image.value =="")
        {
            setPersonerror({...personerror,["image"]:"upload image"})
        }
        else if(!imgType.includes(e.target.image.files[0].type))
        {
            setPersonerror({...personerror,["image"]:"please SELECT only JPG,JPEG,PNG"})
        }
       
        else{
            setPersonerror({...personerror,["username"]:""});
            setPersonerror({...personerror,["email"]:""});
            setPersonerror({...personerror,["gender"]:""});
            setPersonerror({...personerror,["hobby"]:""});
            setPersonerror({...personerror,["city"]:""});
            setPersonerror({...personerror,["message"]:""});
            setPersonerror({...personerror,["image"]:""});
            if(active)
            {
                let newdata=[...person];
                newdata[position]=persondata;
                setperson(newdata);
                localStorage.setItem('personDetails', JSON.stringify(newdata));
                setActive(false);
                setPosition(-1);
            }
            else
            {
                let iddata={...persondata,["id"] : Math.round(Math.random()*1000)};
                setpersondata(iddata);
                let newperson = [...person, iddata];
                setperson(newperson);
                localStorage.setItem('personDetails', JSON.stringify(newperson));
            }


            setpersondata({});
            setHobbydata([]);

            e.target.image.value="";
        }
        
    }

    let getInputChange=(e)=>{
            let name= e.target.name;
            let value= e.target.value;

            if(name == "image")
            {
               value = value.substr(12,value.length);
            }

            if(name == "hobby")
            {
                if(e.target.checked == true)
                {
                    hobbydata= [...hobbydata , value];
                    setHobbydata(hobbydata);
                }
                else{
                    let pos= hobbydata.findIndex((v)=>v==value);
                    hobbydata.splice(pos,1);
                    setHobbydata(hobbydata);
                    hobbydata = hobbydata;
                }
            }

            if(name == "username")
            {
                if(value == "")
                {
                    setPersonerror({...personerror,["username"]:"username is required"});
                }
                else if(value.length<=3)
                {
                    setPersonerror({...personerror,["username"]:"username is 2 or more character required"});
                }
                else 
                {
                    setPersonerror({...personerror,["username"]:""})
                }
            }
            else if(name == "email")
            {
                if(value == "")
                {
                    setPersonerror({...personerror,["email"]:"email is required"});
                }
                else if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)))
                {
                    setPersonerror({...personerror,["email"]:"enter valid email"});
                }
                else 
                {
                    setPersonerror({...personerror,["email"]:""})
                }
            }
            else if(name == "gender")
            {
                if(value != "")
                {
                    setPersonerror({...personerror,["gender"]:""})
                }
            }
            else if(name == "hobby")
            {
                if(hobbydata.length == 0)
                {
                    setPersonerror({...personerror,["hobby"]:"please select any hobby"});
                }
                else  if(hobbydata.length >0)
                {
                    setPersonerror({...personerror,["hobby"]:""})
                }
            }
            else if(name == "city")
           {
                if(value == "")
                {
                    setPersonerror({...personerror,["city"]:"please select city"});
                }
                else{
                    setPersonerror({...personerror,["city"]:""});
                }
           }
            else if(name == "message")
            {
                if(value == "")
                {
                    setPersonerror({...personerror,["message"]:"message is required"});
                }
                else  if(value.length > 5)
                {
                    setPersonerror({...personerror,["message"]:"message is  5 or more charecter"})
                }
                else
                {
                    setPersonerror({...personerror,["message"]:""});
                }
            }
            else if(name == "image")
            {
                if(value != "")
                {
                    setPersonerror({...personerror,["image"]:""});
                }
            }

            if(name == "hobby")
            {
                let hh =[...hobbydata];
                setpersondata({...persondata,[name]:hh.toString()});
            }
            else
            {
                setpersondata({...persondata,[name]:value});
            }
    }

    let Deleterecord=(id)=>{
        let pos = person.findIndex(v => v.id == id);
        person.splice(pos, 1);
        setperson(person);

        localStorage.setItem('personDetails', JSON.stringify(person));
        let localData = JSON.parse(localStorage.getItem('personDetails'));
        setperson(localData);
    }

    let Updaterecord=(id)=>{
            let pos = person.findIndex(v => v.id == id);

            let hobby=person[pos]['hobby'].split(",");
            setHobbydata(hobby);

            setpersondata(person[pos]);
            setActive(true);
            setPosition(pos);
    }

    return(
        <>
            <h1 style={{textAlign:"center"}}>Person Details</h1>

            <form method="post" onSubmit={(e)=>handleSubmit(e)} >
                <table border="1" align="center"style={{backgroundColor:'aqua ',height:'400px',width:'600px',fontSize:'20px'}}>
                    <tr>
                        <td>Enter Username</td>
                        <td>
                            <input type="text" name="username" value={persondata.username ? persondata.username:""}  onChange={(e)=>getInputChange(e)}/>
                            <span style={{color:"red"}}>{personerror.username?personerror.username:""}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter Email</td>
                        <td>
                            <input type="text" name="email" value={persondata.email ? persondata.email:""} onChange={(e)=>getInputChange(e)}/>
                            <span style={{color:"red"}}>{personerror.email?personerror.email:""}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Select Gender</td>
                        <td>
                            <input type="radio" name="gender" value="male" checked={persondata.gender=='male'?"checked":false} onChange={(e)=>getInputChange(e)}/>Male
                            <input type="radio" name="gender" value="female" checked={persondata.gender=='female'?"checked":false} onChange={(e)=>getInputChange(e)}/>Female
                            <span style={{color:"red"}}>{personerror.gender?personerror.gender:""}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Select Hobby</td>
                        <td>
                            <input type="checkbox" name="hobby" value="Reading" checked={persondata.hobby ? persondata.hobby.includes('Reading') == true ? "checked":false:false} onChange={(e)=>getInputChange(e)}/>Reading
                            <input type="checkbox" name="hobby" value="Music" checked={persondata.hobby ? persondata.hobby.includes('Music') == true ? "checked" :false :false} onChange={(e)=>getInputChange(e)}/>Music
                            <input type="checkbox" name="hobby" value="Singing" checked={persondata.hobby ? persondata.hobby.includes('Singing') == true ? "checked" :false :false} onChange={(e)=>getInputChange(e)}/>singing
                            <span style={{color:"red"}}>{personerror.hobby?personerror.hobby:""}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Select City</td>
                        <td>
                            <select name="city"  onChange={(e)=>getInputChange(e)}>
                                <option value="">--select city --</option>
                                {city.map((v)=>{
                                    return(
                                        <option value={v} selected={persondata.city?persondata.city == v ? "selected":false:false}>{v}</option>
                                    )
                                })}
                            </select>
                            <span style={{color:"red"}}>{personerror.city?personerror.city:""}</span>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter Message</td>
                        <td><textarea name="message" onChange={(e)=>getInputChange(e)} value={persondata.message?persondata.message:""}></textarea>
                        <span style={{color:"red"}}>{personerror.message?personerror.message:""}</span>
                        </td>
                       
                    </tr>
                    <tr>
                        <td>Upload Image</td>
                        <td><input type="file" name="image" onChange={(e)=>getInputChange(e)} />
                            {persondata.image ? <img src={require("../assets/images/" + persondata.image)} height={100}/> : "" }
                            <span style={{color:"red"}}>{personerror.image?personerror.image:""}</span>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td><input type="Submit" name="submit" value={active?"Edit Details":"Add Details"}/></td>
                    </tr>
                </table>
            </form>
            <br/><br/><br/><br/>
            <h1 style={{textAlign:"center"}}>Print Data</h1>

            <table border="1" align="center">
                <tr>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Gender</td>
                    <td>Hobby</td>
                    <td>City</td>
                    <td>Message</td>
                    <td>Image</td>
                    <td>Action</td>
                </tr>
                {person.map((v, i) => {
                    return (
                        <tr>
                            <td>{v.username}</td>
                            <td>{v.email}</td>
                            <td>{v.gender}</td>
                            <td>{v.hobby}</td>
                            <td>{v.city}</td>
                            <td>{v.message}</td>
                            <td>{v.image ? <img src={require("../assets/images/"+v.image)} height={100}/> : "" }</td>

                            <td>
                                <button onClick={(id)=>Deleterecord(v.id)}>Delete</button> ||
                                <button onClick={(id)=>Updaterecord(v.id)}>Update</button>
                            </td>
                        </tr>
                    )
                })}
            </table>
        </>
    )
}

export default Person;