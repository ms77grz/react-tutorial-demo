import './App.css';
import './appStyles.css';
import Counter from './components/counter/Counter';
import ClickCounterTwo from './components/counter/ClickCounterTwo';
import HoverCounterTwo from './components/counter/HoverCounterTwo';

function App() {
  return (
    <div className='App'>
      <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>
    </div>
  );
}

export default App;
