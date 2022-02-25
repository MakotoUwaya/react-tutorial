import { render, screen } from '@testing-library/react';

import Information from '@/information/index';
import { ThemeProvider } from '@/providers/Theme';

jest.mock('@/firebase', () => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const firebaseApp = require('firebase/app');
  const app = firebaseApp.initializeApp({ projectId: 'test' });
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const firestore = require('firebase/firestore');
  return { db: firestore.getFirestore(app) };
});

test('information render', () => {
  render(
    <ThemeProvider>
      <Information />
    </ThemeProvider>
  );
  const linkElement = screen.getByText(/Collection: Loading.../i);
  expect(linkElement).toBeInTheDocument();
});
