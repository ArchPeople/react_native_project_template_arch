import { Navigator } from '@app/navigation';
import { store } from '@app/store';
import { Provider } from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { i18nInstance } from '@app/localization/i18n';
import { QueryClientProvider } from '@tanstack/react-query';
import { query } from '@core/services/query';

export default function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={query.client}>
        <I18nextProvider i18n={i18nInstance}>
          <Navigator />
        </I18nextProvider>
      </QueryClientProvider>
    </Provider>
  );
}
