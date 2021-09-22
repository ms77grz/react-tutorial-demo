import './App.css';
import './appStyles.css';
import ComponentC from './components/context/ComponentC';
import { UserProvider } from './components/context/userContext';

function App() {
  return (
    <div className='App'>
      <UserProvider value='Vishwas'>
        <ComponentC />
      </UserProvider>
    </div>
  );
}

export default App;
