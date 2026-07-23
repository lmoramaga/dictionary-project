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
          <Dictionary defaultKeyword="sunset" />
        </main>

        <footer className="App-footer">
          <small>
            Coded by{" "}
            <a
              href="https://github.com/lmoramaga"
              target="_blank"
              rel="noreferrer"
            >
              Lina Moramaga
            </a>{" "}
            and is{" "}
            <a
              href="https://github.com/lmoramaga/dictionary-project"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              open-sourced
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
