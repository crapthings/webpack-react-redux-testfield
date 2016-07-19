import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router'

import { Provider } from 'react-redux'

import * as Components from './components'

import store from './components/posts/store'

const App = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Components.Layout}>
        <IndexRoute component={Components.Home} />
        <Route path="/about" component={Components.About} />
        <Route path="/posts" component={Components.Posts} />
        <Route path="/users" component={Components.Users} />
      </Route>
    </Router>
  </Provider>
)

ReactDOM.render(<App />, document.getElementById('app'))
