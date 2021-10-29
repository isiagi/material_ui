import React from 'react';
import Container from '@mui/material/Container';
import { Home } from '@mui/icons-material';
import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ContainerWrapper = styled(Container)(({ theme }) => ({
  height: '100vh',
  color: 'white',
  paddingTop: theme.spacing(10),
  position: 'sticky',
  top: 0,
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up('sm')]: {
    backgroundColor: 'white',
    color: '#555',
    border: '1px solid #999'
  }
}));

const Wrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  [theme.breakpoints.up('sm')]: {
    marginBottom: theme.spacing(3),
    cursor: 'pointer',
  },
}));

const HomeIcon = styled(Home)(({theme}) => ({
    marginRight: theme.spacing(1),
    [theme.breakpoints.up('sm')]: {
        fontSize: '18px',
       }
}))

const Text = styled(Typography)(({ theme }) => ({
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
       display: 'none',
      }
}));

export default function LeftBar() {
  return (
    <ContainerWrapper>
      <Wrapper>
        <HomeIcon />
        <Text>Homepage</Text>
      </Wrapper>
      <Wrapper>
        <HomeIcon />
        <Text>Homepage</Text>
      </Wrapper>
      <Wrapper>
        <HomeIcon />
        <Text>Homepage</Text>
      </Wrapper>
      <Wrapper>
        <HomeIcon />
        <Text>Homepage</Text>
      </Wrapper>
      <Wrapper>
        <HomeIcon />
        <Text>Homepage</Text>
      </Wrapper>
      <Wrapper>
        <HomeIcon />
        <Text>Homepage</Text>
      </Wrapper>
    </ContainerWrapper>
  );
}
