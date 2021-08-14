import "./App.css";
import Footer from './components/Footer';
import Main from './components/MainPage/Main';
import Header from './components/Header/Header';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Switch>
        <Route component={Main} exact path="/"></Route>
        <Route component={About} exact path="/about"></Route>
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
