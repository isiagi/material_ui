import React from 'react'
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Post from './Post';

const ContainerWrapper = styled(Container)(({ theme }) => ({
   paddingTop: theme.spacing(10),
//    height: '100vh'
  }));

export default function Feed() {
    
    return (
        <ContainerWrapper>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </ContainerWrapper>
    )
}