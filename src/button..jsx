import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';

export default function BasicButtons() {
    let handelclick = ()=>{
        console.log("clicked")
    }
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text" onClick={handelclick}>Text</Button>
      <Button variant="contained" startIcon={<DeleteIcon />}  onClick={handelclick} color='success'>Delete</Button>
      <Button variant="outlined"  onClick={handelclick} size='small'> Outlined </Button>
      <Button  variant="contained"  startIcon={<SendIcon/>}> Sent </Button>
    </Stack>
  );
}