import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Route exact path="/" component={Home} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/blog" component={Blog} />
        <Route exact path="/joblistings" component={JobListings} />
        <Route exact path="/login" component={Login} />

         */}

       <div>
       <Footer />
       </div>
       </div>
    </Router>
  
 
    
  );
}

export default App;
