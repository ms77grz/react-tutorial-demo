import './App.css';
import './appStyles.css';
import styles from './appStyles.module.css';
import Inline from './components/Inline';

function App() {
  return (
    <div className='App'>
      <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Inline />
    </div>
  );
}

export default App;
