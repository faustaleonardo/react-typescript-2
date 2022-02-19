import React from 'react';

type CounterProps = {
  incident: string;
};

type CounterState = {
  value: number;
};

type BasicCounterAction = {
  type: 'INCREMENT' | 'DECREMENT';
};

type SetCounterAction = {
  type: 'SET';
  payload: number;
};

type CounterAction = BasicCounterAction | SetCounterAction;

const reducer = (state: CounterState, action: CounterAction) => {
  switch (action.type) {
    case 'INCREMENT':
      return { value: state.value + 1 };
    case 'DECREMENT':
      return { value: state.value - 1 };
    case 'SET':
      return { value: action.payload };
    default:
      return state;
  }
};

const initialState = { value: 0 };

const Counter = ({ incident }: CounterProps) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const handleDecrement = () => {
    dispatch({ type: 'DECREMENT' });
  };
  const handleReset = () => {
    dispatch({ type: 'SET', payload: 0 });
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'SET', payload: +e.target.value });
  };

  return (
    <main className="Counter">
      <h1>Days Since Last Incident</h1>
      <p className="count">{incident}</p>
      <div>{state.value}</div>
      <section className="controls">
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDecrement}>Decrement</button>
      </section>
      <form>
        <input type="text" value={state.value} onChange={handleInputChange} />
      </form>
    </main>
  );
};

const Application = () => <Counter incident={'Incident'} />;

export default Application;
