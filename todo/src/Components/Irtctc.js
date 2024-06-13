






function Irctc()
{
    return(
        <>
            {/* <div className="d-flex align-center justify-center">
                <img src={require("../assets/images/logo.jpg")} />
                <img src={require("../assets/images/logo2.jpg")} />
            </div> */}

            <div className="text-center name">
               <a href="#">User Registration</a>
            </div>

            <div>
                <form>
                    <fieldset>
                        <legend>Individual Registration</legend>

                        <label>User ID*</label>
                        <input type="text" placeholder="Enter Your UserId" style={{marginLeft:"20px"}}/><br/><br/>

                        <label>Password*</label>
                        <input type="password" placeholder="Enter Your Password" style={{marginLeft:"20px"}}/><br/><br/>

                        <label>Conform Password*</label>
                        <input type="password" placeholder="Enter Your Conform Password" style={{marginLeft:"20px"}}/><br/><br/>

                        <label>Security Question*</label>
                        <select>
                            <option value="select question">select question</option>
                            <option value="What is your pet name?">What is your pet name?</option>
                            <option value="What was the name of first schoon?">What was the name of first schoon?</option>
                            <option value="What is your favorite past-time?">What is your favorite past-time?</option>
                            <option value="What is your fathers middle name?">What is your fathers middle name?</option>
                        </select><br/><br/>

                        <label>Security Answer*</label>
                        <input type="text" placeholder="Enter Your Security answer" style={{marginLeft:"20px"}}/><br/><br/>
                    
                        <label>Language*</label>
                        <select>
                           <option>Select Language</option>
                           <option>Gujarati</option>
                           <option>English</option>
                           <option>Hindi</option>

                        </select><br/><br/>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default Irctc;