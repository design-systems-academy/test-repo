```js
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
  <div style={{ transform: 'translate3d(0, 0, 0)', height: '50px' }}>
    <Header path='/' pages={pages} />
  </div>
</Router>

```
