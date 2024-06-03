import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Bio from './components/Bio/Bio';
import Projects from './components/Projects/Projects'
function App() {
  return (
    <div className="App">
    <Header/>
    <Main/>
    <div className='flex-container'>
      <Bio/>
      <Projects/>
    </div>
    </div>
  );
}

export default App;
