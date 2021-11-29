import AuthContextComponent from '../context/AuthContext';
import Nav from '../components/Nav';
import Signin from '../components/Signin';
import './App.css';

function App() {
  return (
    <AuthContextComponent>
      <div className='App'>
        <Nav />
        <Signin />
      </div>
    </AuthContextComponent>
  );
}

export default App;
