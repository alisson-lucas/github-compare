import Routes from './routes'
import RepoProvider from './contexts/RepoContext';
import PageProvider from './contexts/pageContext';



function App() {
  return (
    <PageProvider>
      <RepoProvider>
        <Routes />
      </RepoProvider>
    </PageProvider>
  );
}

export default App;
