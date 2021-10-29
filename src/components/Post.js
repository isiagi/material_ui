import React from 'react';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import im from './1.jpg';

// const ContainerWrapper = styled(Container)(({ theme }) => ({

//   }));
const CardWrapper = styled(Card)(({ theme }) => ({
    marginBottom: theme.spacing(5)
  }));

const MediaWrapper = styled(CardMedia)(({ theme }) => ({
    //media querry missing
}));

export default function Post() {
  return (
    <CardWrapper>
      <MediaWrapper component="img" image={im} alt="hello" />
      <CardContent>
        <Typography gutterBottom variant="h5">My First Post</Typography>
        <Typography variant="body2">
          lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor
          sit amet, consectetur adip lorem lorem ipsum dolor sit amet,
          consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip
          lorem lorem ipsum dolor sit amet, consectetur adip lorem
          lorem ipsum dolor sit amet, consectetur adip lorem lorem ipsum dolor
          sit amet, consectetur adip lorem lorem ipsum dolor sit amet,
          consectetur adip lorem lorem ipsum dolor sit amet, consectetur adip
          lorem lorem ipsum dolor sit amet, consectetur adip lorem
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">Share</Button>
        <Button size="small" color="primary">Learn More</Button>
      </CardActions>
    </CardWrapper>
  );
}
