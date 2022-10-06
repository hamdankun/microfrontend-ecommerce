import React, { useRef, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { mount } from "auth/AuthApp";

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    if (ref.current) {
      const { onParentNavigate } = mount(ref.current, {
        initialPath: history.location.pathname,
        onNavigate: ({ pathname }) => {
          if (history.location.pathname !== pathname) {
            history.push(pathname);
          }
        },
        onSignIn: onSignIn,
      });

      if (onParentNavigate) history.listen(onParentNavigate);
    }
  }, [ref]);

  return <div ref={ref} />;
};
