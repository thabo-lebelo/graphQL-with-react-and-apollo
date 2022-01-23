import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Launches from './components/Launches'
import './App.css';
import logo from './logo.png';

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className="container">
                    <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto', marginTop: 20 }} />
                    <Switch>
                        <Route exact path="/"><Launches /></Route>
                    </Switch>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
