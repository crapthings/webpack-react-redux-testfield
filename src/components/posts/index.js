export const Posts = ({list}) => (
  <div>
    <h3>posts</h3>
    {list().map(({title, id}) => (
      <p key={id}>{title}</p>
    ))}
  </div>
)

Posts.defaultProps = {
  list
}

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
