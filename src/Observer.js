import { useEffect, useRef, useState } from "react";
// import Api from "./Api";

export const useObservers = ({ rootMargin = `0px`, threshold = [0.5] }) => {
  const ref = useRef();
  const [isIntersecting, setIntersecting] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      {
        rootMargin,
        threshold
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);
  return { isIntersecting, ref };
};
// export default useObserver;
