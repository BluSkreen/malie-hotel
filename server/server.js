const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const { authMiddleware } = require("./utils/auth");

const { typeDefs, resolvers } = require("./schemas");
const db = require("./config/connection");
const { Reservation } = require("./models");
const { makeReservation } = require("./webhooks/index");

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
});
const stripe = require('stripe')('pk_test_51MS6bZCzq6l4n83nCqy7oVDR7LifHKUuEYQRG4Ja0gUiIU0KthzJeD7nr090nmAgHs9hkhAK0Dkks06gI4TC00rs00nuv84CYX');

// This is your Stripe CLI webhook secret for testing your endpoint locally.
// const endpointSecret = "whsec_234db6f1bf5247050818477e5b438ed17b3aab52ca2dcba4cb92d65539dfd314";
const endpointSecret = "whsec_YZE2oaS9d8ikBJJYQsk9DRhg6AvCGaWe";

//const endpointSecret = process.env.STRIPESECRET;

app.use(express.urlencoded({ extended: false }));
// app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
    const sig = request.headers['stripe-signature'];
    //console.log("sig");
    //console.log(sig);

    let event;

    console.log("req body")
    console.log(request.body);
    if(request.body.type == 'payment_intent.succeeded'){
        console.log(request.body.data.object.metadata);
        console.log("payment success");
        makeReservation(request.body.data.object.metadata);

    } else if (request.body.type == 'payment_intent.canceled' || 'payment_intent.canceled') {
        console.log("not successful");
    }

    //return response.status(200);
    try {
        event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
        console.log("event");
        console.log(event);
    } catch (err) {
        response.status(400).send(`Webhook Error: ${err.message}`);
        return;
    }

    // Return a 200 response to acknowledge receipt of the event
    response.json({received: true});
});

// Create a new instance of an Apollo server with the GraphQL schema
const startApolloServer = async (typeDefs, resolvers) => {
  await server.start();
  server.applyMiddleware({ app });

  db.once("open", () => {
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(
        `Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      );
    });
  });
};


// Call the async function to start the server
startApolloServer(typeDefs, resolvers);

