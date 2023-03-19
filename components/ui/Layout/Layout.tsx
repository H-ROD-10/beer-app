import Head from "next/head"
import { Footer } from "../Footer";
import { Navbar } from "../Navbar";



interface IProps{
    children: JSX.Element | JSX.Element[];
    title?: string;
}


const origin = (typeof window === 'undefined') ? '': window.location.origin


export const Layout = ({children, title}: IProps) => {
  return (
    <>
        <Head>
            <title>{title ? title :' Beer-App'}</title>
            <meta name='author' content='Hector Rodriguez' />
            <meta name="description" content={`Informacion sobre la Cerveza ${title}`} />
            <meta name="keywords" content={`${title}, cerveza, beer, artesanal, espumosa`} />
            <meta property="og:title" content={`Informacion sobre la cerveza ${title}`} />
            <meta property="og:description" content={`Pagina sobre ${title}`} />
            <meta property="og:image" content={`${origin}/images/banner.jpg`} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet"></link>
        </Head>
        <Navbar />

        {children}
  
        <Footer />
    </>
  )
}
