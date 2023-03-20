import { FormControl, MenuItem, TextField } from "@mui/material";

export default function SelectFields({ label, ...otherProps }) {
  return (
    <>
      <FormControl fullWidth sx={{ mb: "1rem" }}>
        <TextField
          required
          select
          label={label}
          {...otherProps}
          variant="filled"
        >
          <MenuItem value=''>None</MenuItem>
          <MenuItem value='us'>us</MenuItem>
          <MenuItem value='india'>india</MenuItem>
          <MenuItem value='greece'>greece</MenuItem>


        </TextField>
      </FormControl>
    </>
  );
}
