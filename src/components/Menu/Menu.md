```jsx
var createHistory = require('history').createMemoryHistory;
var Router = require('react-router').Router;
const pages = [{
    node: {
      fields: {
        slug: '/about/',
        prefix: 1,
      },
      frontmatter: {
        title: 'About',
      },
    }
  }];
var history = createHistory();

<Router history={history}>
  <Menu pages={pages} path='/'/>
</Router>
```
