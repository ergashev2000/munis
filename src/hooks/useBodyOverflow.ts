import { useCallback, useEffect, useState } from "react";

const useBodyOverflow = () => {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    if (isHidden) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isHidden]);

  const hiddenScroll = useCallback(() => {
    setIsHidden(true);
  }, []);

  const visibleScroll = useCallback(() => {
    setIsHidden(false);
  }, []);

  return { hiddenScroll, visibleScroll };
};

export default useBodyOverflow;
