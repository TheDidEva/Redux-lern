import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { addCustomerAction, removeCustomerAction } from './store/customerReducer';
import { fetchCustomers } from './store/asyncACtion/customers';

function App() {
  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);//state.cash.cash - перший cash це назва нашого редюсера яка заданa в /store/index.js
  console.log(cash);

  const customer = useSelector(state => state.customer.customers);
  console.log(customer);



  const addCash = (cash) => {
    dispatch({ type: "ADD_CASH", payload: cash })
  }

  const getCash = (cash) => {
    dispatch({ type: "GET_CASH", payload: cash })
  }

  const addCustomer = (name) => {
    const customer = {
      name,
      id: Date.now()
    }
    dispatch(addCustomerAction(customer))
  }

  const removeCustome = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  }


  return (
    <div className="App">
      <div>
        <div style={{ fontSize: '3em' }}>{cash}</div>
        <br />


        <div>
          <button onClick={() => addCash(Number(prompt()))}>Add cash</button>
          <button onClick={() => getCash(Number(prompt()))}>Get cash</button>
        </div>
      </div>

      <div>
        {customer.length > 0 ?
          <div>
            {customer.map(custome =>
              <div onClick={() => removeCustome(custome)}>{custome.name}</div>
            )}
          </div>
          :
          <div>
            Zero customer
          </div>
        }
        <button onClick={() => addCustomer(prompt())}>Add customer</button>
      </div>


      <br />
      <button onClick={() => dispatch(fetchCustomers())}>get customer from DB</button>

    </div >
  );
}

export default App;
