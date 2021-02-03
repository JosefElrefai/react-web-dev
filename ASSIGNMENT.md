# Brief

A client named Balloons Inc has requested that we design and develop a virtual store-front for the web, that works on both mobile and desktop devices. The web app should allow users to browse through their catalog of inflatable balloon designs, and select which balloons they 
wish to purchase -- a typical shopping cart solution.

At this stage we are only providing a prototype, so while responsive design is required, it doesn't have to look perfectly nice on all platforms, and there's no requirement for integrating with any payment gateways or other such functionality, just demonstrating the most basic of flows.

The client's IT team has specified that they require us to meet certain code quality standards. They require that we use React and TypeScript, and consume the data using GraphQL. They also require that we follow "best practices" in regards to how we architect the app.

The client has supplied a demonstration service hosted at https://balloons.thetc.se/ -- however, some endpoints are buggy and will return an error on every 3 requests. We'll need to handle that.

You can access the playground and documentation at https://balloons.thetc.se/playground. The GraphQL endpoint is https://balloons.thetc.se/graphql.

# Goals

After reviewing the API data available to us, it seems apparent that we need:

- A way to see all the balloons
  - This list or table should be paginated and filterable in some way
- A way to see details of a balloon
  - This should show all available details
  - This should also allow a user to add a quantity of this balloon to their "shopping cart"
- A "shopping cart" to review selected balloons for purchase
  - A purchase button should exist but it doesn't have to do anything, it's a prototype!

# Constraints

You must use the [`urql`](https://formidable.com/open-source/urql/docs/) library as the GraphQL client. If you need to use a REST endpoint for some reason (you absolutely may not need it for this assignment), use the in-built `window.fetch` function.

You may use any CSS tooling you choose, or none at all. Show us what you prefer.

You must use TypeScript and React for this assignment.

# Assessment criteria

This is what we are looking to assess with this assignment:

- Implementation of the client's needs as described
- Reasoning about data provided by client
- Code quality and error handling
- Ability to make discrete and reusable components
- State handling
- Responsive design
- Structuring frontend code in a reasonable manner (i.e., it follows common conventions, is easy to understand, is extensible if that seems useful, etc.)

Things that are not being assessed and will not be penalised:

- Code testing
- Code documentation (please do provide a `README` explaining how to run your code however)
- Minor bugs in the functionality of your solution (if you know of some bugs that you won't be able to fix in time, feel free to mention them to us)
- Security of the API
- Little mistakes, typos, etc.
- Sending us any questions or comments via email

---

Best of luck! If you have any questions or comments, we'd love to hear it. Shoot your contact an email and we'll see what we can do.
