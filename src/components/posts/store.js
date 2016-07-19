import { createStore } from 'redux'

const initState = [{
  id: faker.random.uuid(),
  title: faker.lorem.sentence()
}, {
  id: faker.random.uuid(),
  title: faker.lorem.sentence()
}]

function state(state = initState, action) {
  switch (action.type) {
    case 'ADD_POST':
      let posts = state
      posts.push(action.post)
      return posts
    default:
      return state
  }
}

let store = createStore(state)

module.exports = store
