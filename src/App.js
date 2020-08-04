import React from 'react';
import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom';
import './App.css';
import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'
import ArticlesListPage from './pages/articlesListPage'
import ArticlePage from './pages/articlePage'
import NotFoundPage from './pages/notFoundPage' 
import NavBar from './navbar'


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div id="page-body">
          <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/about" component={AboutPage}  />
              <Route path="/articles-list" component={ArticlesListPage}  />
              <Route path="/article/:name" component={ArticlePage}  />
              <Route component={NotFoundPage} />
          </Switch>
      
        </div>
      </div>
    </Router>
  );
}

export default App;
