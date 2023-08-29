import './App.css';
import Application from './components/application/Application';
import Skills from './components/skills/Skills';

function App() {
  const skills = ['React', 'JavaScript', 'TypeScript'];

  return (
    <div className='App'>
      <Application />
      <Skills skills={skills} />
    </div>
  );
}

export default App;
