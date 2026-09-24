import { useEffect } from 'react';

export const useAbortController = () => {
  const controller = new AbortController();

  useEffect(() => {
    return () => {
      console.log('Aborting ongoing requests...');
      controller.abort();
    };
  }, []);

  return controller.signal;
};
