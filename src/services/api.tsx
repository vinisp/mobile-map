import {useEffect} from 'react';

export async function API_TEST() {
  useEffect(() => {
    fetch('http://10.0.2.2:8000/store/all/')
      .then(res => res.json())
      .then(result => console.log(result));
  }, []);
}
