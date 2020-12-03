import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  image: {
    position: 'relative',
    height: 200,
    margin: 5,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 200,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: 'cover',
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    opacity: 0,
    '&:hover, &$focusVisible': {
      opacity: 1,
      background: 'rgba(0, 0, 0, 0.3)'
    }
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));

export default function GameCard(props) {
  const { card, open, playerHasTurn } = { ...props };
  const classes = useStyles();
  const pictureUrl = `url(${`/resources/pictures/cards/${card}.jpg`})`;
  const defaultPictureUrl = `url(${`./resources/pictures/cards/0.jpg`})`;
  const [cardOpen, setCardOpen] = React.useState(open);
  const [cardPicture, setCardPicture] = React.useState(defaultPictureUrl);
  
  const vote = () => {
    console.log('Voting...')
      // TODO: Implement voting
  }

  const flipCard = () => {
    if(!!playerHasTurn) { 
      setCardOpen(!cardOpen)
    } else {
      // TODO: Implement voting: POST request to the API
      vote();
    }
  }

  React.useEffect(() => {
    let picture = defaultPictureUrl;
    if(!!cardOpen) {
      picture = pictureUrl
    }
    setCardPicture(picture);
  }, [cardOpen])

  return (
    <ButtonBase onClick={flipCard}
      focusRipple
      className={classes.image}
      focusVisibleClassName={classes.focusVisible}
      style={{
        width: 200,
        height: 270,
      }}
    >
      <span
        className={classes.imageSrc}
        style={{
          backgroundImage: cardPicture,
        }}
      />
      <span className={classes.imageBackdrop} />
      { !playerHasTurn && <span className={classes.imageButton}>
        <Typography
          component='span'
          color='inherit'
          className={classes.imageTitle}
        >
          {'Vote'}
          <span className={classes.imageMarked} />
        </Typography>
      </span> }
    </ButtonBase>
  );
}
