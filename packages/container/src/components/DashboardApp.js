import React, { useRef, useEffect } from "react";
import { mount } from "dashboard/DashboardApp";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      mount(ref.current);
    }
  }, [ref]);

  return <div ref={ref} />;
};
