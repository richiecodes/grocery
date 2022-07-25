import { ChakraProvider } from '@chakra-ui/react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { Provider as SupabaseProvider } from 'react-supabase'
import supabase from './supabase';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <SupabaseProvider value={supabase}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </SupabaseProvider>
);
