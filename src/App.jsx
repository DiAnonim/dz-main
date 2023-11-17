import './App.css';
import Counter from './components/Counter/Counter';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
        <Counter></Counter>
      </div>
    </Provider>
  );
}

export default App;
