import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Emplois du temps Institut Notre Dame de Meudon</h1>
      </header>
      <h1 style="text-align: center;" class="title">Emploi du temps</h1>
      <div id="menu">
        <ul id="onglets">
          <li id="T1" onclick="showTT(this.id)">-T1-</li>
          <li id="T2" onclick="showTT(this.id)">-T2-</li>
          <li id="T3" onclick="showTT(this.id)">-T3-</li>
          <li id="T4" onclick="showTT(this.id)">-T4-</li>
          <li id="T5" onclick="showTT(this.id)">-T5-</li>
          <li id="T6" onclick="showTT(this.id)">-T6-</li>
        </ul>
      </div>
      <script src="app.js"></script>
      <footer>
        <p style="font-size: 18px;">
          &copy; Copyrights reserved 2022-2023 <br />
          Contacts : <a href="mailto:jans.guillope@indpeda.fr">jans.guillope@indpeda.fr</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
