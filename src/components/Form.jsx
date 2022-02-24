import React from 'react'
import { Grid,Paper, Avatar, TextField, Button, Typography,Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
//import FormControlLabel from '@mui/material/FormControlLabel';
//import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
const Login=({handleChange})=>{
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const[phone,setPhone]=useState('');
  const [gender, setGender] = useState('');
  const[adhar,setAdhar]=useState('');
  const [error, setError] = useState(false);
 
//   // States for checking the errors
  const [submitted, setSubmitted] = useState(false);
    const handleName = (e) => {
            setName(e.target.value);
            setSubmitted(false);
         //   console.log(e.target.value)
          };
          const handleEmail = (e) => {
                setEmail(e.target.value);
                setSubmitted(false);
              };   
          const handlePhone=(e)=>{
              setPhone(e.target.value);
              setSubmitted(false);
          }       
          
          const handleGender=(e)=>{
            setGender(e.target.value);
            setSubmitted(false);
        } 

        const handleAdhar=(e)=>{
            setAdhar(e.target.value);
            setSubmitted(false);
        } 
          // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' ) {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };
 
  

    const paperStyle={padding :40,height:'80vh',width:300, margin:"20px auto"}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle={margin:'8px 0'}
    return(
        <div>
        <Grid>
            <Paper elevation={10} style={paperStyle} >
                <Grid align='center'>
                     <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Register </h2>
                </Grid>
      
               
                <TextField label='name' placeholder='Enter name' fullWidth required onChange={handleName}/>
                <TextField label='email' placeholder='Enter email'  fullWidth required onChange={handleEmail}/>
                <TextField label='phone' placeholder='Enter phone' fullWidth required onChange={handlePhone}/>
                <TextField label='gender' placeholder='Enter gender' fullWidth required onChange={handleGender}/>
                <TextField label='Adhar' placeholder='Enter Adharno' fullWidth required onChange={handleAdhar}/>

                
                <Button  onClick={handleSubmit} type='submit'  color='primary' variant="contained" style={btnstyle} fullWidth>submit</Button>
                
               
                
            </Paper>
        </Grid>
        </div>
    )
}

export default Login

