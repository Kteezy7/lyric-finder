import "./App.css";
import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { ContextController } from "./context";

function App() {
  return (
    <ContextController>
      <Router>
        <>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index} />
              <Route exact path="/lyrics/tracks/:id" component={Lyrics} />
            </Switch>
          </div>
        </>
      </Router>
    </ContextController>
  );
}

export default App;
