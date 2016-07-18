import { Link } from 'react-router'

export default (props) => (
  <div>
    <header id="layout-header">
      <Link to='/' activeClassName='active' onlyActiveOnIndex={true}>home</Link>
      <Link to='/about' activeClassName='active'>about</Link>
      <Link to='/posts' activeClassName='active'>posts</Link>
      <Link to='/users' activeClassName='active'>users</Link>
    </header>
    <main id="layout-main">{props.children}</main>
  </div>
)
