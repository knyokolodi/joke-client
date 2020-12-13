import React, { Fragment } from 'react';
import { Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { RouteComponentProps } from 'react-router-dom';
import Moment from 'react-moment';
import { gql, useQuery } from '@apollo/client';

import Loader from '../layouts/Loader';

interface JokeProps extends RouteComponentProps<{ category: string }> {}

const GET_RANDOM_JOKE = gql`
  query($category: String!) {
    getRandomJoke(category: $category) {
      created_at
      icon_url
      categories
      value
      url
    }
  }
`;

const Joke: React.FC<JokeProps> = ({ match }) => {
  const { category } = match.params;

  const { loading, data } = useQuery(GET_RANDOM_JOKE, {
    variables: { category },
  });

  return (
    <div>
      {loading ? (
        <Loader name='joke' />
      ) : (
        <Fragment>
          <h3>Joke</h3>
          <Card>
            {data != null ? (
              <Card.Body>
                <Card.Img
                  variant='top'
                  src={data.getRandomJoke.icon_url}
                  style={{ height: '80px', width: '80px' }}
                />
                <Card.Title className='py-2'>
                  <i className='fas fa-smile-beam' /> Chuck Norris{'  '}{' '}
                  {`( ${data.getRandomJoke.categories[0]})`}
                </Card.Title>
                <Card.Text>
                  <i className='fas fa-calendar' />{' '}
                  <Moment format='YYYY-MM-DD'>
                    {data.getRandomJoke.created_at}
                  </Moment>
                  <br />
                  <i className='fas fa-envelope' /> {data.getRandomJoke.value}
                </Card.Text>
                <LinkContainer to='/'>
                  <Button variant='primary'>Go back</Button>
                </LinkContainer>
                <a
                  href={data.getRandomJoke.url}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Button variant='secondary'>View more</Button>
                </a>
              </Card.Body>
            ) : (
              <h3>No joke found</h3>
            )}
          </Card>
        </Fragment>
      )}
    </div>
  );
};

export default Joke;
