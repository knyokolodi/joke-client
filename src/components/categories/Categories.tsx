import React, { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Row, Card, Col } from 'react-bootstrap';

import { JokeContext } from '../../context/Joke';
import Loader from '../layouts/Loader';

const GET_CATEGORIES = gql`
  query {
    getCategories {
      categories
    }
  }
`;

const Categories: React.FC = () => {
  const { getCategories } = useContext(JokeContext);

  const { loading, data } = useQuery(GET_CATEGORIES, {
    onCompleted(data) {
      getCategories(data.getCategories.categories);
    },
  });

  return (
    <div>
      {loading ? (
        <Loader name='categories' />
      ) : (
        <Fragment>
          <h3>Categories</h3>
          <Row>
            {data != null ? (
              data.getCategories.categories.map(
                (category: string, i: number) => {
                  return (
                    <Col key={i} md='3' className='py-2'>
                      <Link to={`/joke/${category}`}>
                        <Card>
                          <Card.Body>
                            <Card.Title className='py-2'>
                              {`${category
                                .charAt(0)
                                .toUpperCase()}${category.slice(1)}`}
                            </Card.Title>
                          </Card.Body>
                        </Card>
                      </Link>
                    </Col>
                  );
                }
              )
            ) : (
              <h3>No records found</h3>
            )}
          </Row>
        </Fragment>
      )}
    </div>
  );
};

export default Categories;
