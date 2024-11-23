import MobileLayout from './components/common/MobileLayout';
import { createBrowserRouter } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([{ path: '/', elemet: <></> }]);

  return (
    <MobileLayout>
      <main>테스트</main>
    </MobileLayout>
  );
}

export default App;
