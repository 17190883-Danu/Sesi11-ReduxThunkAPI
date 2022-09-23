import { useDispatch, useSelector} from "react-redux";
import { fetchUsers } from "./userSlice";
import {Container, Button, Table} from "react-bootstrap";
const UserList = () => {
  const allUser = useSelector((state) => state.users.entities);
  const dispatch = useDispatch();
  const doFetchUsers = () => {
    dispatch(fetchUsers())
  }

  console.log('allUser', allUser);

  return (
    <Container>
      <div>
        <Button onClick={doFetchUsers}>Get Post</Button>
      </div>
      <Table striped bordered hover>
        <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        </thead>
        
        <tbody>
        {allUser.map((user, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>{user?.title}</td>
            <td>{user?.body}</td>
          </tr>
        ))}
        </tbody>
      </Table>
    </Container>
  )
}

export default UserList;