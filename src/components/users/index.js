export const Users = ({list}) => (
  <div>
    <h3>users</h3>
    <table>
      <thead>
        <tr>
          <th>username</th>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>
          {list().map(({username, id}) => (
            <p key={id}>{username}</p>
          ))}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
)

Users.defaultProps = {
  list
}

function list () {
  return _.times(10, n => new UserModel)
}

class UserModel {
  constructor() {
    return {
      id: faker.random.uuid(),
      username: faker.internet.userName()
    }
  }
}
