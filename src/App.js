
import './App.css';


//'use client'
//import { gql, useQuery } from "@apollo/client"

// const GET_LOCATIONS = gql`
//   query GetLocations {
//     locations {
//       id
//       name
//       description
//       photo
//     }
//   }
// `;

// ;

function App() {

  //const { loading, error, data } = useQuery(GET_LOCATIONS)
  return (
    <div className="App">
      <header className="App-header">
        <p>Choo Choo! This is an example of a create-react-app site running on Railway.</p>

        <p>{`API KEY is ${process.env.REACT_APP_API_KEY}`}</p>
        <a className="App-link" href="https://react.dev/learn" target="_blank" rel="noreferrer noopener">Learn React</a>
      </header>
    </div>
  );
}

export default App;
