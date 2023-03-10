import { useEffect, useState } from "react";
import React from "react";
import "./components.css";

export default function ScrollUp({ data }) {
  const [visib, setVisib] = useState(null);

  useEffect(() => {
    const handleScroll = (event) => {
      /* console.log('window.scrollY:', window.scrollY); */
      setVisib(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <a href="#top" id={visib > 500 ? "scrollUp" : null}>
        <h2>{data && data[0]}</h2>
      </a>
    </div>
  );
}
