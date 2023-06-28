import { Router } from './Router';
import { useFetchData } from './hooks/useFetchData';

function App() {
  const { data, loading, error } = useFetchData('/data/mock.json');

  return (
    <div className="App">
      <Router data={data} loading={loading} error={error} />
    </div>
  )
}

export default App
