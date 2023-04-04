// import { useEffect, useState, useRef } from 'react';

// export function useIntersection(ref, rootMargin) {
//   const [isOnScreen, setIsOnScreen] = useState(false);
//   const observerRef = useRef(null);

//   useEffect(() => {
//     observerRef.current = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsOnScreen(entry.isIntersecting);
//           observerRef.current.unobserve(observerRef.current);
//         }
//       },
//       { rootMargin },
//     );
//   }, []);

//   useEffect(() => {
//     observerRef.current.observe(ref.current);

//     return () => {
//       observerRef.current.disconnect();
//     };
//   }, [ref]);

//   return isOnScreen;
// }

// export default useIntersection;
import { useState, useEffect } from 'react';

export const useIntersection = (element, rootMargin) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState(entry.isIntersecting);
          observer.unobserve(element?.current);
        }
      },
      { rootMargin },
    );
    element?.current && observer.observe(element?.current);

    // return () => (element ? observer.unobserve(element?.current) : '');
  }, []);
  return isVisible;
};

export default useIntersection;
