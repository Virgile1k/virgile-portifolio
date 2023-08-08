import React from "react";

interface DownloadCVButtonProps {
  cvFile: string;
}

const DownloadCVButton: React.FC<DownloadCVButtonProps> = ({ cvFile }) => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = cvFile;
    link.download = "myCV.pdf"; // Change this to your preferred file name
    link.click();
  };
  return (
    <button
     
      onClick={handleDownload}
    >
      Download CV
    </button>
  );
};
export default DownloadCVButton;