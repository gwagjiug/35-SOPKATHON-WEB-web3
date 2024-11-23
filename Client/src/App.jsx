import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Main, CheckRoutine, PostRoutine, List, Edit } from './pages';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Main /> },
    { path: '/post', element: <PostRoutine /> },
    { path: '/check', element: <CheckRoutine /> },
    { path: '/list', element: <List /> },
    { path: '/edit', element: <Edit /> },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
