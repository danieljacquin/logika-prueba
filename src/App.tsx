import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import ToastNotification from './components/ui/ToastNotification';
import TankStackQueryProvider from './providers/TankStackQueryProvider';
import store from './redux/store';
import { router } from './routes/router';

function App() {
  return (
    <>
      <Provider store={store}>
        <TankStackQueryProvider>
          <ToastNotification />
          <RouterProvider router={router} />
        </TankStackQueryProvider>
      </Provider>
    </>
  );
}

export default App;
