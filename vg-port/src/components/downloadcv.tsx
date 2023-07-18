import React from 'react';
import myCV from '../assets/docs/ndayambajecv.pdf';

interface Props {
  cvUrl: string; 
}

const DownloadCVButton: React.FC<Props> = ({cvUrl}) => {

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = myCV;
    link.download = 'ndayambajecv.pdf'; 
    document.body.appendChild(link)
    link.click();
    document.body.removeChild(link);
  }

  return (
    <button onClick={handleDownload}>
      Download My CV
    </button>
  );
}

export default DownloadCVButton;