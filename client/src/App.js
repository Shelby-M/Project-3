
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
// import 'semantic-ui-css/semantic.min.css';
import './App.css';



import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Post from './pages/Post'
import Footer from './components/Footer';

const httpLink = createHttpLink({
  uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
  typePolicies: {
    Query: {
        fields: {
            getPosts: {
                merge(existing = [], incoming) {
                    return incoming;
                },
            },
        },
    },
    Post: {
        fields: {
            likes: {
                merge(existing = [], incoming) {
                    return incoming;
                },
            },
            comments: {
                merge(existing = [], incoming) {
                    return incoming;
                },
            },
        },
    },
},
}),
connectToDevTools: true,
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Navbar />
          <div className='containter'>
          <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path='./post/:postId' component={Post} />
          </Switch>
        </div>
        <Footer />
        </div>
      </Router>
      </ApolloProvider>
  );
}

export default App;
