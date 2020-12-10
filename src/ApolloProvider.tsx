import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider as Provider,
} from '@apollo/client';
import React from 'react';

const client = new ApolloClient({
  uri: 'https://pure-taiga-20336.herokuapp.com/',
  cache: new InMemoryCache(),
});

export default function ApolloProvider(props: any) {
  return <Provider client={client} {...props} />;
}
