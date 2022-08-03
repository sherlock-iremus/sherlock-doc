import { RefreshOutlined } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

function QueryParamPicker({args, setArgs, loading}) {
    const [tempArgs, setTempArgs] = useState(args);

    const onChange = (event) => {
        tempArgs.find(param => param[0] === event.target.name)[1] = event.target.value;
        setTempArgs(tempArgs)
    }
    
    const onClick = (e) => {
        e.preventDefault();
        setArgs([...tempArgs])
    }

    return <form onSubmit={onClick}>
        <Stack spacing={2}>
            {tempArgs.map((argument) => 
                <TextField key={argument[0]} disabled={loading} label={argument[0]} name={argument[0]} onChange={onChange} defaultValue={argument[1]}/>
            )}
            <Button type="submit" variant="contained" endIcon={<RefreshOutlined />}>
                refresh
            </Button>
        </Stack> 
    </form>
}

export default QueryParamPicker;
