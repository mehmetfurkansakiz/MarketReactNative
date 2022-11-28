import axios from 'axios';
import {useState} from 'react';

function usePost() {
  const [data, setData] = useState([null]);
  const [loading, setLoading] = useState([true]);
  const [error, setError] = useState(null);

  const post = async (url, apiData) => {
    try {
      const {data: responseData} = await axios.post(url, apiData);
      setData(responseData);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return {error, loading, data, post};
}

export default usePost;
