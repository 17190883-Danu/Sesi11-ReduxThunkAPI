import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import { decrement, increment } from "./features/counter/counterSlice";
import UserList from "./features/users/UserList";
import AuthLoginForm from "./features/auth/AuthLoginForm";
function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.counter.value)
  // const [data, setData] = useState(null)
  return (
    <div className="App">
      <header className="App-header">
        <AuthLoginForm />
        <UserList />
      </header>
    </div>
  );
}

export default App;
