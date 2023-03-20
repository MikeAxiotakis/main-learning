import { Button, FormControl, TextField } from "@mui/material";
import { Controller } from "react-hook-form";

export default function TextFields({ label, control, name, ...otherProps }) {
  return (
    <>
      <FormControl fullWidth sx={{ mb: "1rem" }}>
        <Controller 
        name={name}
        control={control}
        render={({field}) => (<TextField required label={label} {...field} {...otherProps} variant="filled" />)}
        />
        
      </FormControl>
    </>
  );
}
