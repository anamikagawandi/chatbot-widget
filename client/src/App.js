import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';
import ChatWidget from './components/ChatWidget/ChatWidget';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <div className="widget flex-col">
      <ChatWidget></ChatWidget>
      </div>
    </div>
  );
}

export default App;
