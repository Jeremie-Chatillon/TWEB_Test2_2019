import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Favorite from '@material-ui/icons/Favorite';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  card: {
    maxWidth: 200,
  },
  media: {
    height: 300,
  },
};


/*
  Container pour 1 film
*/
function Movie(props) {
  const { classes, title, image, date, gender, selected } = props;

  const posterUrl = `https://image.tmdb.org/t/p/w500/${image}`;

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={posterUrl}
          title="Film Image"
          alt={title}
        />
        <CardContent>
          {title && (
            <Typography variant="h6">
              {title}
            </Typography>
          )}
          {date && (
            <Typography variant="subtitle1">
              Sortie: {date}
            </Typography>
          )}
          {gender && (
            <Typography variant="subtitle1">
              genre: {gender.map(val => (
                val.name + ' '
              ))}
            </Typography>
          )}

          <Avatar className={classes.avatar}>
            {selected ?
              <Favorite/>
              :
              <FavoriteBorder />
            }
          </Avatar>

        </CardContent>

      </CardActionArea>
    </Card>
  );
}

Movie.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string,
  image: PropTypes.string.isRequired,
  date: PropTypes.string,
  gender: PropTypes.string,
  selected: PropTypes.bool
};

Movie.defaultProps = {
  title: null,
  date: null,
  gender: null,
  selected: false,
}

export default withStyles(styles)(Movie);