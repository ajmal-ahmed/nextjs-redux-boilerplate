import { useSelector, useDispatch } from 'react-redux'
import clockActions from '../redux/clockModule/index'

const Counter = () => {
  const count = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    <div>
      <h1>
        Count: <span>{count}</span>
      </h1>
      <button onClick={() => dispatch(clockActions.incrementCount())}>+1</button>
      <button onClick={() => dispatch(clockActions.decrementCount())}>-1</button>
      <button onClick={() => dispatch(clockActions.resetCount())}>Reset</button>
    </div>
  )
}

export default Counter
