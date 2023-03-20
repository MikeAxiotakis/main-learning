import { Container, Box, Avatar, Typography, TextField, InputAdornment, Button } from "@mui/material";
import TextFields from "./TextFields";
import SelectFields from "./SelectFields";
import CheckboxField from "./CheckboxField";
import { useForm } from "react-hook-form";

export default function Form () {


  const {handleSubmit, control} = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <>
    <Container 
    
    >
      <Box sx={{display: 'flex', flexDirection: 'column', mt: '4rem', alignItems: 'center' }}>

   
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main', }} >

      </Avatar>
      <Typography component="h1">Sign Up</Typography>
      <Box noValidate component='form' onSubmit={handleSubmit(onSubmit)} sx={{ mt: '2rem'}} >
        <TextFields control={control} name='fullname' label="Full Name"/>
        <TextFields control={control} name='email' label="Email"/>
        <TextFields control={control} name='mobile' label="Mobile Phone" InputProps={{
          startAdornment: <InputAdornment position="start">+781</InputAdornment>,
          type: 'number'
        }} />
        <SelectFields control={control} name='country' label="Country"/>
        <TextFields control={control} name='password' label="Password"/>
        <TextFields control={control} name='confirmPassword' label="Comfirm Password"/>
        <CheckboxField />
        <Button type="submit"
fullWidth
variant="contained"
sx={{mt: 3, mb: 2}}
> Submit
        </Button>

        

      </Box>
      </Box>

    </Container>
    </>
  )
}