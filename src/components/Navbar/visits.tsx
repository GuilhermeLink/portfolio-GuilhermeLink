import React, { useState, useEffect } from "react";
import { NavBtn, NavVis } from "./style";

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    
    const storedCount = localStorage.getItem("visitCount");
    if (storedCount) {
      setVisitCount(parseInt(storedCount));
    } else {     
      localStorage.setItem("visitCount", "0");
    }

    setVisitCount((prevCount) => prevCount + 1);
    localStorage.setItem("visitCount", (visitCount + 1).toString());
  }, []);

  return (
    <div>
      <NavVis>Visits: {visitCount}</NavVis>
    </div>
  );
};

export default VisitCounter;
