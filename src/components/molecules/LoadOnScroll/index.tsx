import React from 'react';

const LoadOnScroll: React.FC<{
  onLoad?: () => void;
  loading?: boolean;
  hashMore?: boolean;
}> = ({ onLoad, loading, hashMore }) => {
  const observer = React.useRef<any>();

  // const [loading] = React.useState(false);

  const componentRef = React.useCallback(
    (node) => {
      if (loading) return;

      if (observer && observer.current) {
        observer.current.disconnect();
      }

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          if (onLoad) {
            onLoad();
          }
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hashMore],
  );

  return <div ref={componentRef}></div>;
};

export default LoadOnScroll;
