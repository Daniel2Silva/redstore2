import React, { useEffect, useRef, useState } from 'react';
const Teste = () => {
  const [isVisible, setIsVisible] = useState(false);

  let testRef = useRef();

  useEffect(() => {
    let handle = (e) => {
      if (!testRef.current.contains(e.target)) {
        setIsVisible(false);
      }
    };
    document.addEventListener('mousedown', handle);

    return () => {
      document.removeEventListener('mousedown', handle);
    };
  });

  return (
    <div ref={testRef}>
      <button className="mnmn" onClick={() => setIsVisible(!isVisible)}>
        oi
      </button>
      <div className={`dropdown-menu ${isVisible ? 'active' : 'inactive'}`}>
        <h3>
          The Kiet
          <br />
          <span>Website Designer</span>
        </h3>
      </div>
    </div>
  );
};

export default Teste;
