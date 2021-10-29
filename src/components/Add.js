import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import {
  Alert as MuiAlert,
  Button,
  Fab,
  IconButton,
  Modal,
  Tooltip,
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Snackbar from '@mui/material/Snackbar';

const ContainerWrapper = styled(Container)(({ theme }) => ({
  width: 500,
  height: 550,
  backgroundColor: 'white',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  margin: 'auto',
  [theme.breakpoints.down('sm')]: {
    width: '100vw',
    height: '100vh',
  },
}));

const FabWrapper = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: 20,
  right: 20,
}));

const TextField1 = styled('div')(({ theme }) => ({
  marginBottom: theme.spacing(3),
}));

//   const TextField2 = styled('div')(({ theme }) => ({

//   }));

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Add() {
  const [open, setOpen] = useState(false);
  const [openAlert, setAlert] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setAlert(false);
  };
  return (
    <>
      <Tooltip title="Add" onClick={() => setOpen(true)}>
        <IconButton>
          <FabWrapper color="secondary">
            <AddIcon />
          </FabWrapper>
        </IconButton>
      </Tooltip>
      <Modal open={open}>
        <ContainerWrapper>
          <Box component="form" autoComplete="off" style={{ padding: '1rem' }}>
            <TextField1>
              <TextField
                id="standard-basic"
                label="Standard"
                variant="standard"
                size="small"
                style={{ width: '100%' }}
              />
            </TextField1>
            <TextField1>
              <TextField
                id="standard-basic"
                label="Multiline"
                multiline
                maxRows={8}
                variant="outlined"
                size="small"
                style={{ width: '100%' }}
              />
            </TextField1>
            <TextField1>
              <Button
                size="small"
                color="primary"
                variant="outlined"
                style={{ marginRight: 20 }}
                onClick={() => setAlert(true)}
              >
                Create
              </Button>
              <Button
                size="small"
                color="secondary"
                variant="outlined"
                onClick={() => setOpen(false)}
              >
                Cancel
              </Button>
            </TextField1>
          </Box>
        </ContainerWrapper>
      </Modal>
      <Snackbar open={openAlert} autoHideDuration={3000} onClose={handleClose}>
        <Alert>Heyy</Alert>
      </Snackbar>
    </>
  );
}
