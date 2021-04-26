import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from "@components/footer";
import Header from "@components/header";
import Home from "@pages/home";
import Search from "@pages/search";
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
