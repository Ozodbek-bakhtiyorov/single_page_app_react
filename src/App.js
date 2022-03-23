import ScrollToTop from './components/ScrollTotop';
import { Main } from './layouts';
import { useAos } from './hooks/UseAos';
function App() {
  useAos()
  return (
    <div>
      <ScrollToTop/>
      <Main/>
    </div>
  );
}

export default App;
