import {
  Navbar,
  Home,
  Footer,
  GolfCourse,
  Rooms,
  Payment,
  Food,
  Admin,
} from "./components";

import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LoginProvider } from "./utils/LoginContext";
import { DateProvider } from "./utils/DateContext";
// const [email, setEmail] = useState("");
// const [password, setPassword] = useState("");
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";

import { setContext } from "@apollo/client/link/context";
const httpLink = createHttpLink({
  uri: "/graphql",
});
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});
const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});
function App() {
  return (
    <ApolloProvider client={client}>
      <div className="bg-primary w-full overflow-hidden">
        <LoginProvider>
          <DateProvider>
            <Router>
              <Navbar />

              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/golfCourse" element={<GolfCourse />} />
                <Route exact path="/rooms" element={<Rooms />} />
                <Route exact path="/payment" element={<Payment />} />
                <Route exact path="/food" element={<Food />} />
                <Route exact path="/admin" element={<Admin />} />
              </Routes>

              <Footer />
            </Router>
          </DateProvider>
        </LoginProvider>
      </div>
    </ApolloProvider>
  );
}

export default App;
