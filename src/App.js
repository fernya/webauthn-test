import logo from './logo.svg';
import './App.css';
import TransportWebAuthn from "@ledgerhq/hw-transport-webauthn"

async function App2() {

  const transport = await TransportWebAuthn.create();
  
  console.log("Created");

//   transport.setScrambleKey("w0w");

//   const buf = Buffer.alloc(256);
// const len = buf.write("");
// // console.log(`${len} bytes: ${buf.toString('ascii', 0, len)}`);

  const r = await transport.send(0xb0, 0x01, 0x00, 0x00);

  if (!r) { 
    console.log("transport.send failed!");
  }

  let i = 0;
  const format = r[i++];
  
  console.log("i: ", i);
  console.log("format: ", format);

  // transport.setScrambleKey('w0w');

}

function App() {

  App2();

  return (
    <div className="App">
      <p>Almafa</p>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
