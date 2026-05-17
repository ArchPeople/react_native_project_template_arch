import { Navigator } from '@app/navigation';
import { store } from '@app/store';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { i18nInstance } from '@app/localization/i18n';

export default function App() {
  return (
    <Provider store={store}>
      <I18nextProvider i18n={i18nInstance}>
        <Navigator />
      </I18nextProvider>
    </Provider>
  );
}
