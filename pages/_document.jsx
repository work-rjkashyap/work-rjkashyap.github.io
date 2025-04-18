import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import React from 'react';
class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta
						name='description'
						content='Rajeshwar Kashyap is a FullStack Developer who specializes in building user friendly design exceptional digital experiences.'
					/>
					<link rel='icon' href='/favicon.png' />
					<html lang='en' />
					<Script id='google-analytics' strategy='afterInteractive'>
						{`window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());

							gtag('config', 'G-PKWH4TCGB5');
        `}
					</Script>
					<Script
						src='https://www.googletagmanager.com/gtag/js?id=G-PKWH4TCGB5'
						strategy='afterInteractive'
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
