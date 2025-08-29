import { Navigator } from '@app/navigation';
import { store } from '@app/store';
import { Provider } from 'react-redux';

export default function App() {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
}
