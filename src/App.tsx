import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';

import Header from './components/layouts/Header';
import About from './components/about/About';
import Footer from './components/layouts/Footer';
import Joke from './components/joke/Joke';
import Categories from './components/categories/Categories';

import { JokeProvider } from './context/Joke';
import ApolloProvider from './ApolloProvider';

const Main = styled.div`
  min-height: 85vh;
  margin-top: 10px;
`;

const App: React.FC = () => {
  return (
    <JokeProvider>
      <ApolloProvider>
        <Router>
          <Header />
          <Main>
            <Container>
              <Route path='/' exact component={Categories} />
              <Route path='/about' exact component={About} />
              <Route path='/joke/:category' exact component={Joke} />
            </Container>
          </Main>
          <Footer />
        </Router>
      </ApolloProvider>
    </JokeProvider>
  );
};

export default App;
