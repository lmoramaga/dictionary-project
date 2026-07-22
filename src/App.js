import logo from "./SheCodes logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo img-fluid" />
        </header>
        <main>
          <Dictionary />
        </main>
        <small>
          <footer className="App-footer">
            Coded by{" "}
            <a href="https://github.com/lmoramaga" target="blank">
              Lina Moramaga
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/lmoramaga/dictionary-project"
              target="blank"
            >
              {" "}
              open-sourced
            </a>
          </footer>
        </small>
      </div>
    </div>
  );
}
