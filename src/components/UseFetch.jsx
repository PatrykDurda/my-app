import { useState, useEffect } from 'react';

export const UseFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data))
  }, [url]);

  return data;
}

export default UseFetch;