import Routes from './routes'
import RepoProvider from './contexts/RepoContext';
import PageProvider from './contexts/pageContext';
import CounterProvider from './contexts/counterContext'; 

function App() {
  return (
    <CounterProvider>
      <PageProvider>
        <RepoProvider>
          <Routes />
        </RepoProvider>
      </PageProvider>
    </CounterProvider>
  );
}

export default App;
