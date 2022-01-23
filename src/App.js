
import './App.css';
import './style/header.css'
import './style/globalPage.css'
import './style/userContent.css'
import './style/newPlay.css'
import './style/dice.css'
import './style/winner.css'
import './style/addScore.css'


import Header from './components/header';
import GlobalPage from './components/globalPage';


function App() {


  return (
    <div className="App">
      <Header />
      <GlobalPage/>
    </div>
  );
}

export default App;
