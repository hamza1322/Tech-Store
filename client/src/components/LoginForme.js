import React,{ useState } from 'react';


function LoginForme (Login,error)
{
   const [details,setDetails] = useState({name:"" , email:"",password:""}); 
   
   
   const submitHandler = e => {
      e.preventDefault();
      Login(details);
   };
   

   return(
        <form onSubmit={submitHandler}>
            <div className="form-inner">
                <h2>login</h2>
                
                {/* formulaire champ name  */}
                <div className="form-groupe">
                   <label htmlFor="name">Name:</label>  
                   <input type="text" name="name" id="name" onChange={e => setDetails({...details,name:e.target.value})} value={details.name}/>
                </div>
                
                {/* formulaire champ email */}
                <div className="form-groupe">
                   <label htmlFor="name">Email:</label>  
                   <input type="email" name="email" id="email" onChange={e => setDetails({...details,email:e.target.value})} value={details.email}/>
                </div>  
                
                {/* formulaire champ password */}
                <div className="form-groupe">
                   <label htmlFor="name">Password:</label>  
                   <input Password="text" name="Password" id="Password" onChange={e => setDetails({...details,password:e.target.value})} value={details.password}/>
                </div>
                
                {/* formulaire butoon de login */}
                <input type="submit" value="Login"/>  
            </div>
        </form>
    )
}

// exporter la fonction Loginforme pour app.js
export default LoginForme;