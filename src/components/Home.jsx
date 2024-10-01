// src/components/Home.js
import React from 'react';
import PdfViewer from './PdfViewer';
import { pdfjs } from 'react-pdf';
import path from '/CES_ALGORICA_52.pdf'


pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const Home = () => {
  // const pdfUrl = '../../public/README.pdf'; 
  const pdfUrl = path; 
    // const pdfUrl = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

  return (
    <div className="container mx-auto py-8">
      <PdfViewer fileUrl={pdfUrl} />
    </div>
  );
};

export default Home;
