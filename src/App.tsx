import './App.css';
import Application from './components/application/Application';
import Counter from './components/counter/Counter';
import Skills from './components/skills/Skills';

function App() {
  const skills = ['React', 'JavaScript', 'TypeScript'];

  return (
    <div className='App'>
      <Application />
      <Skills skills={skills} />
      <Counter />
    </div>
  );
}

export default App;
