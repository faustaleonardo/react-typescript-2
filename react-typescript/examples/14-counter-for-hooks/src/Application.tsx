import React, { ChangeEvent } from 'react';

type CounterProps = {
  incident: string;
};

const Counter = ({ incident }: CounterProps) => {
  const [count, setCount] = React.useState(0);

  const handleInc = () => {
    setCount(count + 1);
  };
  const handleDec = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };
  const handleCountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCount(+e.target.value);
  };

  return (
    <main className="Counter">
      <h1>Days Since Last {incident}</h1>
      <p className="count">{count}</p>
      <section className="controls">
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleDec}>Decrement</button>
      </section>
      <section className="controls">
        <form onSubmit={() => {}}>
          <label htmlFor="set-to">Set Count</label>
          <input
            id="set-to"
            type="number"
            value={count}
            onChange={handleCountChange}
          />
          <input type="submit" />
        </form>
      </section>
    </main>
  );
};

const Application = () => <Counter incident={'incident'} />;

export default Application;
