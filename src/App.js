import './App.css';
import { TypeAnimation } from 'react-type-animation';

function App() {
  return (
    <div className="App">
      <div class="text">
        Hello, I'm <span class="highlight">Srirahul M</span>.
        <br/>
        <TypeAnimation
          sequence={[
            `I'm a frontend developer.`,
            3000,
            `I'm a full-stack web developer.`,
          ]}
          repeat={false}
          cursor={false}
        />
      </div>
    </div>
  );
}

export default App;
