import './App.css';
import Routes from './routes'
import RepoProvider from './contexts/RepoContext';



function App() {
  return (
    <RepoProvider>
      <Routes />
    </RepoProvider>
  );
}

export default App;
