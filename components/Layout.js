import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<meta charSet="utf-8" />
		    <meta name="viewport" content="width=device-width, initial-scale=1" />
		    <meta name="description" content="Разработка адаптивных лендингов за $100" />
		    <meta name="msapplication-TileColor" content="#171717" />
		    <meta name="msapplication-config" content="./favicon/browserconfig.xml" />
		    <meta name="theme-color" content="#171717" />
		    <meta property="og:type" content="website" />
		    <meta property="og:url" content="https://aliiev.vercel.app" />
		    <meta property="og:site_name" content="А. Алиев - Разработка лендингов"/>
		    <meta property="og:description" content="Лендинг можно считать парадной дверью вашего бизнеса, через которую входит потенциальный клиент. Ваша страница приветствует посетителя и отвечает на все его вопросы о вашей деятельности, представляет Ваше решение для реализации вопросов клиента." />
		    <meta property="og:image" content="https://aliiev.vercel.app/og-image/main.png"/>
		    <meta property="og:image:width" content="1200" />
		    <meta property="og:image:height" content="600" />
		    <meta name="twitter:card" content="summary_large_image" />
		    <meta property="twitter:domain" content="aliiev.vercel.app" />
		    <meta property="twitter:url" content="https://aliiev.vercel.app" />
		    <meta name="twitter:title" content="А. Алиев - Разработка лендингов" />
		    <meta name="twitter:description" content="Лендинг можно считать парадной дверью вашего бизнеса, через которую входит потенциальный клиент. Ваша страница приветствует посетителя и отвечает на все его вопросы о вашей деятельности, представляет Ваше решение для реализации вопросов клиента." />
		    <meta name="twitter:image" content="https://aliiev.vercel.app/og-image/main.png" />
		    <title>А. Алиев - Разработка лендингов</title>
		    <link rel="apple-touch-icon" sizes="180x180" href="./favicon/apple-touch-icon.png" />
		    <link rel="icon" type="image/png" sizes="32x32" href="./favicon/favicon-32x32.png" />
		    <link rel="icon" type="image/png" sizes="16x16" href="./favicon/favicon-16x16.png" />
		    <link rel="manifest" href="./favicon/site.webmanifest" />
		    <link rel="mask-icon" href="./favicon/safari-pinned-tab.svg" color="#171717" />
		    <link rel="shortcut icon" href="./favicon/favicon.ico" />
			</Head>
			<Navbar />
			<main>{ children }</main>
		</>
	)
}