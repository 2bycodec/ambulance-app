import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from './components/nav.jsx';
import Head  from './components/head.jsx';
import Feature from './components/feat.jsx';
import Statistic from'./components/stats.jsx';
import FAQ from './components/faq.jsx';
import Footer from './components/foot';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<div>
    <Nav/>
    <Head/>
    <Feature/>
    <Statistic/>
    <FAQ/>
    <Footer/>
</div>
    );