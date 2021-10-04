import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import Services from "./components/Services/Services";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Enroll from "./components/Enroll/Enroll";

function App() {
    return (
        <div className="App">
            <Router>
                {/* header section  */}
                <Header />

                {/* all components  */}
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/home">
                        <Home />
                    </Route>
                    <Route exact path="/services">
                        <Services />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/enroll">
                        <Enroll />
                    </Route>

                    {/* Not found component.if it is bad link,then the component show on the UI */}
                    <Route exact path="*">
                        <NotFound />
                    </Route>
                </Switch>

                {/* footer section  */}
                <Footer />
            </Router>
        </div>
    );
}

export default App;
