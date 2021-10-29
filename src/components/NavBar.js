import React, { useState } from 'react';
import InputBase from '@mui/material/InputBase';
import { AppBar, Toolbar } from '@mui/material';
import Typography from '@mui/material/Typography';
import { styled, alpha } from '@mui/material/styles';
import Search from '@mui/icons-material/Search';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import { Cancel } from '@mui/icons-material';

const ToolBar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const CancelIcon = styled(Cancel)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  }
}));

const IconWrapper = styled('div', {
  shouldForwardProp: (propName) => propName !== 'isRed',
})(({ theme, isRed }) => ({
  alignItems: 'center',
  display: isRed ? 'none' : 'flex',
}));

const Badged = styled(Badge)(({ theme }) => ({
  marginRight: theme.spacing(2),
}));

const SearchMoboIcon = styled(Search)(({ theme }) => ({
  marginRight: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const Searh = styled('div', {
  shouldForwardProp: (propName) => propName !== 'isRed',
})(({ theme, isRed }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  borderRadius: theme.shape.borderRadius,
  width: '50%',
  [theme.breakpoints.down('sm')]: {
    display: isRed ? 'flex' : 'none',
    width: '70%'
  },
}));

const Root = styled('div')(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
}));

const Roo = styled('div')(({ theme }) => ({
  display: 'block',
  [theme.breakpoints.up('sm')]: {
    display: 'none',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  marginLeft: theme.spacing(1),
}));

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <AppBar position="fixed">
        <ToolBar>
          <Root>
            <Typography variant="h6">Nalwanga</Typography>
          </Root>
          <Roo>
            <Typography variant="h6">Patu</Typography>
          </Roo>
          <Searh isRed={open}>
            <Search />
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
            <CancelIcon onClick={() => setOpen(false)} />
          </Searh>
          <IconWrapper isRed={open}>
            <SearchMoboIcon onClick={() => setOpen(true)} prop />
            <Badged color="secondary" badgeContent={4}>
              <Mail />
            </Badged>
            <Badged color="secondary" badgeContent={2}>
              <Notifications />
            </Badged>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </IconWrapper>
        </ToolBar>
      </AppBar>
    </div>
  );
}
