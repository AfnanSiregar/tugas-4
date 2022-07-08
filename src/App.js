import logo from './logo.svg';
import './App.css';

function Tombol(props) {
  function munculAlert() {
    alert(`Anda telah mengklik tombol ${props.nama}`);
  }
  return <button onClick={munculAlert}>{props.nama}</button>
}

function App() {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div>
            <Tombol nama="Muzayyin" />
            <Tombol nama="Burhan" />
            <Tombol nama="Rozin" />
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
