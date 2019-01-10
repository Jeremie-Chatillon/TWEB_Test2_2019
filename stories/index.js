import React from 'react';
import { storiesOf } from '@storybook/react';

import Movie from '../src/components/items/Movie';

storiesOf('TEST', Movie)
  .add('Movie', () => (
    <Movie 
      
    />
  ))
  .add('with some emoji', () => (
    <Button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></Button>
  ));   