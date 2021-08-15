import "./App.css";
import Footer from './components/Footer';
import Main from './components/MainPage/Main';
import Header from './components/Header/Header';
import About from './components/About/About';
import Reviews from './components/Reviews/Reviews';
import WriteUs from './components/WriteUs/WriteUs';
import Contacts from './components/Contacts/Contacts';
import {BrowserRouter,Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
          <Route component={Main} exact path="/"></Route>
          <Route component={About} exact path="/about"></Route>
          <Route component={Reviews} exact path="/reviews"></Route>
          <Route component={WriteUs} exact path="/write_us"></Route>
          <Route component={Contacts} exact path="/contacts"></Route>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
