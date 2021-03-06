
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

// import 'semantic-ui-css/semantic.min.css';
import './App.css';



import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
// import Posts from './pages/Posts'


function App() {
  return (

      <Router>
        <Container>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
          {/* <Route exact path='./posts/:postId' component={Post} /> */}
        </Container>
      </Router>

  );
}

export default App;
