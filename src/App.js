import Reset from './Reset';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';


function App() {

  const dispatch = useDispatch()

  const counter = useSelector(state => state)

  const plus = () => {
    dispatch({
      type: 'plus',
      payload: 5,
    })
  }
  const minus = () => {
    dispatch({
      type: 'minus',
    })
  }


  return (
    <div className="App">
      {counter}
      <>
      <button onClick={plus}>
        Plus
      </button>
      <button onClick={minus}>
        minus
      </button>
      <Reset/>
      </>
    </div>
  );
}

export default App;
