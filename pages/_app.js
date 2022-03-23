import '../styles/globals.css';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/react';

//REVIEW se hizo un Cache Provider que mande cada pagina a renderizar como propiedad initial al emotion server pero no se porque
const clientSideEmotionCache = createCache({ key: 'css' });
function MyApp({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
