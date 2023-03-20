import { FormControlLabel, Checkbox } from "@mui/material"

function CheckboxField() {
  return (
    <div>
        <FormControlLabel control={<Checkbox defaultChecked />} label="I agree to all of the terms. every term" />
    </div>
  )
}
export default CheckboxField