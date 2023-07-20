import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return <>
   
   <div className="container mx-auto font-sans">
    <NextNProgress color="#53BD95"/>
    <NavBar/>
       <main className="pb-32">
        <Component {...pageProps}/>
       </main>
    <Footer/>
   </div>
  </>
}
