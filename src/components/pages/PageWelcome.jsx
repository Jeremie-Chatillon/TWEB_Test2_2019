import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import CenteredPaper from '../items/CenteredPaper';
import SimpleTab from '../items/SimpleTab';

const styles = {
  paper: {
    backgroundColor: 'rgba(255, 10, 0, 1)',
  },
};


const query = gql`
{
  users{
    id
  }
}
`;

const creatUserRows = data => data.map(u => [u.id]);

class PageWelcome extends Component {
  constructor(props) {
    super(props);
    document.title = 'Welcome';
  }

  render() {
    const { classes } = this.props;
    return (
      <CenteredPaper className={classes.paper}>
        <Query query={query}>
          {({ data, loading, error }) => {
            if (error) return 'Oups an error occured. Please check the console';
            if (loading) return 'Loading...';
            
            return (
              <SimpleTab
                header={['id']}
                rows={creatUserRows(data.users)}
              />
            );
          }}
        </Query>
        

      </CenteredPaper>
    );
  }
}

export default withStyles(styles)(PageWelcome);
