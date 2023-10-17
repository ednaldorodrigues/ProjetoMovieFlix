import React from 'react';

const useApi = (url) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try { 
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch(error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, error, loading }
    
  ;
};

export default useApi;
