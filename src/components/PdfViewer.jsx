// src/components/PdfViewer.js
import React, { useState, useRef  } from "react";
import { Document, Page } from "react-pdf";
import HTMLFlipBook from "react-pageflip";
import { ClipLoader } from "react-spinners";


const PdfViewer = ({ fileUrl }) => {
  const [numPages, setNumPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pageNumber, setPageNumber] = useState(1); // Track current page

  const flipBook = useRef(null);  
  const goToNextPage = () => {    flipBook.current.pageFlip().flipNext();  };
  const goToPreviousPage = () => {    flipBook.current.pageFlip().flipPrev();  };

  const onDocumentLoadSuccess = (pdf) => {
    setNumPages(Array.from(Array(pdf.numPages)));
    setLoading(false);
  };
  const onDocumentLoadFailed = () => {
    console.log("Falied");
    // setLoading(false)
  };
  return (
    <div className="w-full mx-auto flex justify-center items-center py-8">
      <div className="rounded-lg bg-zinc-600   shadow-lg w-4/5  relative flex justify-center">
        {loading && (
          <div className="absolute inset-0 flex justify-center items-center">
            <ClipLoader color="#3490dc" size={50} />
          </div>
        )}
        <Document
          file={fileUrl}
          onLoadSuccess={onDocumentLoadSuccess}
          onLoadError={onDocumentLoadFailed}
          className={"flex justify-center bg-slate-500"}
        >
          <HTMLFlipBook
            width={500}
            height={700}
            className="shadow-md border "
            showCover={1}
            mobileScrollSupport={true}
            ref={flipBook}
          >
          {numPages.map((el, index) => (                         
              <div  >
                <Page
                  pageNumber={index + 1}
                  className="rounded-lg shadow-lg"
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  height={700}    
              
                />
              </div>
            )
            )} 
          </HTMLFlipBook>
        </Document>
        
        <div className="flex justify-between mt-4">
          <button
            onClick={goToPreviousPage}
            className="bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600"
          >
            Previous Page
          </button>
          <button
            onClick={goToNextPage}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Next Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default PdfViewer;
