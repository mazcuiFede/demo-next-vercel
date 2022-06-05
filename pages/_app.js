import "../styles/index.css"
import Head from "next/head"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title key="title">Soy Desarrollador</title>
        <meta key="description" name="description" content="Contactame!" />
      </Head>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img
              className="rounded"
              alt="hero"
              src="https://www.zenziya.com/a/i/assets/img/logo.png"
            />
          </a>
        </div>
      </header>
      <Component {...pageProps} />
    </>
  )
}
