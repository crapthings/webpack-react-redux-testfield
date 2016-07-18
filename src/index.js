import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router'

import * as Components from './components'

const App = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Components.Layout}>
      <IndexRoute component={Components.Home} />
      <Route path="/about" component={Components.About} />
      <Route path="/posts" component={Components.Posts} />
      <Route path="/users" component={Components.Users} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
