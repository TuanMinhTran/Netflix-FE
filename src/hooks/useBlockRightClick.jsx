import { useEffect } from "react";

const useBlockRightClick = (elementRef) => {
  useEffect(() => {
    const blockRightClick = (event) => {
      event.preventDefault();
    };

    const element = elementRef.current;

    if (element) {
      element.addEventListener("contextmenu", blockRightClick);

      return () => {
        element.removeEventListener("contextmenu", blockRightClick);
      };
    }
  }, [elementRef]);
};

export default useBlockRightClick;
