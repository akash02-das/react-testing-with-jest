import './App.css';
import Application from './components/application/Application';
import Counter from './components/counter/Counter';
import { MuiMode } from './components/mui/mui-mode';
import Skills from './components/skills/Skills';
import { AppProviders } from './providers/app-providers';

function App() {
  const skills = ['React', 'JavaScript', 'TypeScript'];

  return (
    <AppProviders>
      <div className='App'>
        <Application />
        <Skills skills={skills} />
        <Counter />
        <MuiMode />
      </div>
    </AppProviders>
  );
}

export default App;
