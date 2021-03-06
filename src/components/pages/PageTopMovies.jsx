import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import CenteredPaper from '../items/CenteredPaper';
import Movie from '../items/Movie';

const styles = {
  paper: {
    backgroundColor: 'rgba(255, 10, 0, 1)',
  },
};

const query = gql`
{
    popularMovies(page: $page){
      page,
      total_results,
      total_pages,
      results {
        title
        release_date
        poster_path
        genres{
          name
        } 
      }
    }
  
}
`;

class PageTopMovies extends Component {
  constructor(props) {
    super(props);
    document.title = 'Top movies';
    this.state = {
      page: 0,  // page courante
    }
  }

  /*
  componentWillMount() {
    this.setState({
      films: films.push(this.loadFilm),
    })
  }

  loadMoarFilm = () => {

  }

  loadFilm = () => {
    return (
      <Query query={query} variables={this.state.page}>
        {({ data, loading, error }) => {
          if (error) return 'Oups an error occured. Please check the console';
          if (loading) return 'Loading...';
          console.info(data);
        }}
      </Query>)
  }
  */

  render() {
    const { classes } = this.props;
    return (
      <CenteredPaper className={classes.paper}>
        <Typography variant="h3" color="secondary">Top Movies</Typography>
        {/* Je n'arrice pas à passer le paramètre page */}
        <Query query={query} variables={{ page: this.state.page }}>
          {({ data, loading, error }) => {
            if (error) return 'Oups an error occured. Please check the console';
            if (loading) return 'Loading...';
            data.data.results.map(val =>(
              <Movie
                key={val.title}
                title={val.title}
                image={val.poster_path}
                date={val.release_date}
                gender={val.genres}
              />
            ))
          }}
        </Query>
      </CenteredPaper>
    );
  }
}

export default withStyles(styles)(PageTopMovies);
