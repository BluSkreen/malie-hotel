import { Navbar, Home, Footer } from "./components";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginProvider } from "./utils/LoginContext";
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
// import { setContext } from "@apollo/client/link/context";
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
  // link: authLink.concat(httpLink),
});
// const authLink = setContext((_, { headers }) => {
//   // get the authentication token from local storage if it exists
//   const token = localStorage.getItem("id_token");
//   // return the headers to the context so httpLink can read them
//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   };
// });

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="bg-primary w-full overflow-hidden">
        <LoginProvider>
          <Router>
            <Navbar />

            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>

            <Footer />
          </Router>
        </LoginProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
