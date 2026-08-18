import { useState } from "react";
function Formdata(){
    const[formData , setFormData] = useState({
        name:"",
        email:"",
        password:""
    })

    // function handleChange(event){
    //     if(event.target.name === "name"){
    //         setFormData((prev)=>({
    //             ...prev,
    //             name : event.target.value
    //         }))
    //     }
    //     if(event.target.name === "email"){
    //         setFormData((prev)=>({
    //             ...prev,
    //             email : event.target.value
    //         }))
    //     }
    //     if(event.target.name === "password"){
    //         setFormData((prev)=>({
    //             ...prev,
    //             password : event.target.value
    //         }))
    //     }
        
    function handleChange(event){
        const {name , value } = event.target 
        setFormData((prev)=>({
            ...prev , 
            [name] : value 
        }))
    }
    

    return(
        <>
        <h1>Name :{formData.name}</h1>
        <input type="text" placeholder="Enter Your name" value ={formData.name} name = "name" onChange={handleChange}/>

        <h1> Email :{formData.email}</h1>

        <input type="email" placeholder="Enter Your email" value ={formData.email} name = "email" onChange={handleChange}/>

        <h1> Password:{formData.password}</h1>

        <input type="password" placeholder="Enter Your password" value ={formData.password} name = "password" onChange={handleChange}/>
        
        
        </>
    )

}

export default Formdata