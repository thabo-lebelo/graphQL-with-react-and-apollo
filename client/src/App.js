import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
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
      <div className="container">
        <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto', marginTop: 20 }} />
        <Launches />
      </div>
    </ApolloProvider>
  );
}

export default App;
