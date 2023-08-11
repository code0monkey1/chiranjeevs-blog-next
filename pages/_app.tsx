import type { AppProps, NextWebVitalsMetric } from 'next/app';
import { GoogleAnalytics, event } from 'nextjs-google-analytics';
import NextNProgress from 'nextjs-progressbar';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import '../styles/globals.css';

export function reportWebVitals({
  id,
  name,
  label,
  value,
}: NextWebVitalsMetric) {
  event(name, {
    category: label === 'web-vital' ? 'Web Vitals' : 'Next.js custom metric',
    value: Math.round(name === 'CLS' ? value * 1000 : value), // values must be integers
    label: id, // id unique to current page load
    nonInteraction: true, // avoids affecting bounce rate.
  });
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="container mx-auto font-sans ml-5">
        <GoogleAnalytics trackPageViews={{ ignoreHashChange: true }} />
        <NextNProgress color="#53BD95" />
        <NavBar />
        <main className="pb-32">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  );
}
