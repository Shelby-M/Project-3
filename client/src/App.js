
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import'semantic-ui-css/semantic.min.css';
import './App.css';

import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Footer from './Footer';
import Post from './Post';


function App() {
  return (
    <main className='App'>
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/post" component={Post} />
        </Router>
    <Navbar />
    <Home />
    <Footer />
    <Post />
  </main>
  );
}

export default App;

// export default function App() {
//   return (
//     <main>
//       <Navbar />
//       <About />
//       <Home />
//       <Footer />
//       <Post />
//     </main>
//   );
// }

