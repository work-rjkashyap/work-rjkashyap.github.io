import '../styles/globals.scss';
import NextNProgress from 'nextjs-progressbar';

import { ThemeProvider } from 'next-themes';
function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider attribute='class' enableSystem={false}>
			<NextNProgress options={{ easing: 'ease', speed: 500 }} />
			<Component {...pageProps} />
		</ThemeProvider>
	);
}

export default MyApp;
