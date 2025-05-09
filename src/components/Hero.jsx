import React, { useRef } from 'react';

const Hero = () => {
  const fileInputRef = useRef(null);

  const handleClick = () => fileInputRef.current.click();

  const handleUpload = (e) => {
    if (e.target.files.length > 0) {
      alert(`File "${e.target.files[0].name}" uploaded successfully!`);
    }
  };

  return (
    <section className="text-center p-5 text-white fade-in bg-black">
      <h1 className="display-4 fw-bold">Turn Unused Software into Profit</h1>
      <p className="lead mt-3">Sell your extra software licenses quickly and securely.</p>
      <button onClick={handleClick} className="btn btn-light btn-lg mt-3">
        Sell My Licenses
      </button>
      <input type="file" ref={fileInputRef} style={{ display: 'none' }} onChange={handleUpload} />
    </section>
  );
};

export default Hero;