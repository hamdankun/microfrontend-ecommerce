import React, { useRef, useEffect } from "react";

import { mount } from "marketing/MarketingApp";

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) mount(ref.current);
  }, [ref]);

  console.log("hello world world");

  return <div ref={ref} />;
};
