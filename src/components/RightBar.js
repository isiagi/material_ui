import React from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import { Typography } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import im from './1.jpg';

const ContainerWrapper = styled(Container)(({ theme }) => ({
  paddingTop: theme.spacing(10),
  // [theme.breakpoints.down('sm')]: {
  //   display: 'none',
  // }
}));

export default function RightBar() {
  return (
    <ContainerWrapper>
      <Typography>Online Friends</Typography>
      <AvatarGroup max={4}>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
        <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
        <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
      </AvatarGroup>
      <Typography>Gallery</Typography>
      <ImageList sx={{ width: 295, height: 450 }} cols={2} rowHeight={164}>  
          <ImageListItem>
            <img
              src={im}
              srcSet={im}
              alt={'item.title'}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={im}
              srcSet={im}
              alt={'item.title'}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={im}
              srcSet={im}
              alt={'item.title'}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={im}
              srcSet={im}
              alt={'item.title'}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={im}
              srcSet={im}
              alt={'item.title'}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={im}
              srcSet={im}
              alt={'item.title'}
              loading="lazy"
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src={im}
              srcSet={im}
              alt={'item.title'}
              loading="lazy"
            />
          </ImageListItem>
      </ImageList>
    </ContainerWrapper>
  );
}
