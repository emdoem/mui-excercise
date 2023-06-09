import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Button from '@mui/material/Button';
import { Icon, IconButton, Container, Card, CardContent, CardActions, Typography, CardHeader, Avatar, CardMedia } from '@mui/material';
// mui replaced JSS with TSS in v5, needed to expand dependencies
import { makeStyles } from 'tss-react/mui';
import { useState } from "react";


// output of makeStyles called as a function
const useStyles = makeStyles()({
  media: {
    height: 200
  },
  // using !important bc of breaking changes in MUI v5 - default margin overwriting mine
  readMore: {
    marginLeft: "auto !important"
  },
  avatar: {
    backgroundColor: "orangered"
  },
  card: {
    margin: "10px"
  },
  activeHeart: {
    color: "red"
  }
})

// keep as function and use hooks to handle 'favorite' state
function ArticleCard({ authorName, joinedDate }) {
    
  const {classes} = useStyles();
  const [isFavorite, setFavorite] = useState(false);
  
  // define handler for heart-clicking
  const handleHeart = () => {
    setFavorite(!isFavorite);
  }

  const initials = authorName[0];

  return (
    <Card className={classes.card}>
      <CardHeader
        title={authorName}
        subheader={`Joined ${joinedDate}`}
        avatar={<Avatar className={classes.avatar}>{initials}</Avatar>}
      />
      <CardMedia
        className={classes.media}
        image="https://picsum.photos/600/400"
      />
      <CardContent>
      <Typography variant="h6">Clickbait title!</Typography>
      <Typography variant="body2">Some fascinating stinkpiece on a hot topic...</Typography>
      </CardContent>
      <CardActions>
        <IconButton>
          <Icon 
            className={!isFavorite || classes.activeHeart} 
            onClick={handleHeart}
          >favorite</Icon>
        </IconButton>
        <IconButton>
          <Icon>share</Icon>
        </IconButton>
        <Button 
          className={classes.readMore} 
          variant="outlined" 
          color="primary"
        >Read more</Button>
      </CardActions>
    </Card>
  )
};

function App() {

  return (
    <div className="App">
      <CssBaseline />
      <Container>
        <ArticleCard
          authorName="John Doe" 
          joinedDate="2019-06-08"
        />
        <ArticleCard
          authorName="Mateusz Maj" 
          joinedDate="bonkers!"
        />

      </Container>
    </div>
  );
}

export default App;
