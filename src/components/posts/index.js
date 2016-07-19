import store from './store'

import { connect } from 'react-redux'

function ADD_POST(post) {
  return {
    type: 'ADD_POST',
    post
  }
}

let a = store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(ADD_POST({
  id: faker.random.uuid(),
  title: faker.lorem.sentence()
}))

export let Posts = ({list, dispatch}) => {
  return (
    <div>
      <h3>posts</h3>
      <button onClick={e => dispatch(ADD_POST({ title: faker.lorem.sentence(), id: faker.random.uuid() }))}>lalala</button>
      {list().map(({title, id}) => (
        <p key={id}>{title}</p>
      ))}
    </div>
  )
}

Posts.defaultProps = {
  list
}

Posts = connect()(Posts)

function list () {
  return _.times(10, n => new PostModel)
}

class PostModel {
  constructor() {
    return {
      id: faker.random.uuid(),
      title: faker.lorem.sentence()
    }
  }
}
