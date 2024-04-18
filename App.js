
import './App.css';
import React, { useState } from 'react';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [gender, setGender] = useState("");
  const [resume, setResume] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
        firstName,
        lastName,
        email,
        phoneNo,
        gender,
        resume,
     
    );
    window.alert(`Hello ${firstName} ${lastName}!! Your form submitted.`)
    handleReset(e);

   
};

const handleReset = (e) =>
{
  e.preventDefault();
  setFirstName("");
  setLastName("");
  setEmail("");
  setPhoneNo("");
  setGender("");
  setResume(null);
  const fileInput = document.getElementById("file");
  if (fileInput) {
    fileInput.value = "";
  }
};
  return (
   
    <>
    <div className="WholeBody">
     <p id="fr">Form For Submission</p>
     <br/>
     <form>
     <label htmlFor="firstName">First Name*:</label><br/>
     <input type="text" id="Name" name="firstName" value={firstName}
                        onChange={(e) =>
                            setFirstName(e.target.value)
                        }
                        placeholder="Enter First Name"
                        required /><br/>
     
     <label htmlFor="lastName">Last Name*:</label><br/>
     <input type="text" id="Name" name="lastName" value={lastName}
                        onChange={(e) =>
                            setLastName(e.target.value)
                        }
                        placeholder="Enter Last Name"
                        required /><br/><br/>

     <label htmlFor="email">Email*:</label><br/>
     <input type="text" id="Name" name="email" value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        placeholder="Enter your email"
                        required /><br/>

     <label htmlFor="phoneNo">Contact*:</label><br/>
     <input type="text" id="Name" name="contact" value={phoneNo}
                        onChange={(e) =>
                            setPhoneNo(e.target.value)
                        }
                        placeholder="Enter your phoneNo"
                        required /><br/><br/>

     <label htmlFor="firstName">Gender*:</label><br/><br/>
     <input
                        type="radio"
                        name="gender"
                        value="male"
                        id="male"
                        checked={gender === "male"}
                        onChange={(e) =>
                          setGender(e.target.value)
                      }
                        
                    />
                    Male

                    <input
                        type="radio"
                        name="gender"
                        value="Female"
                        id="Female"
                        checked={gender === "Female"}
                        onChange={(e) =>
                          setGender(e.target.value)
                      }
                    />
                    Female
                    <input
                        type="radio"
                        name="gender"
                        value="Other"
                        id="other"
                        checked={gender === "Other"}
                        onChange={(e) =>
                          setGender(e.target.value)
                      }
                        
                    />
                    Other
                    <br/>
                    <br/>
                    <label htmlFor="file">Upload your resume*:</label>
                   
                    <input
                        type="file"
                        name="file"
                        id="file"
                        onChange={(e) =>
                          setResume(e.target.files[0])
                      }
                        placeholder="Enter Upload File"
                        required
                    />
                    <br/>
                    <br/>

        <button className ="reset" type="reset" onClick={(e) =>  handleReset(e)}>Reset</button>


        <button className ="submit" type="submit" onClick={(e) =>  handleSubmit(e)}>Submit</button>

     </form>

     </div>

    </>
  );
}

export default App;
