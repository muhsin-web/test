import logo from './logo.svg';
import './App.css';
import LeftSection from './components/LeftSection';
import RightSection from './components/RightSection';

function App() {
  return (
    <div className="App">
      <div className='container-b'>
        <div className='left'>
              <LeftSection />
        </div>

        <div className='right'>
              <RightSection />
        </div>
      </div>
    </div>
  );
}

export default App;
