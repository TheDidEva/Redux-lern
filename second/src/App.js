import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { asyncIncrementCreator, asyncDecrementCreator, decrementCreator, incrementCreator } from './store/countReducer';
import { fetchtUsers } from './store/userReducer';

function App() {
  const count = useSelector(state => state.countReducer.count);
  const users = useSelector(state => state.userReducer.users)
  const dispatch = useDispatch();



  return (
    <div className="App">
      <div>{count}</div>

      <div>
        <button onClick={() => dispatch(asyncIncrementCreator())}>Incr</button>
        <button onClick={() => dispatch(asyncDecrementCreator())}>DECR</button>
        <button onClick={() => dispatch(fetchtUsers())}>GET USER</button>
      </div>

      <div>
        {users.map(user =>
          <div>
            {user.name}
          </div>
        )}
      </div>

    </div>
  );
}

export default App;
