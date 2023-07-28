/**
 * Fetches data from the given URL using the fetch API.
 *
 * @fetch https://developer.mozilla.org/en-US/docs/Web/API/fetch
 * @url https://reqres.in/api/users
 * @return {Promise} The fetched data.
 */
import fetch from "node-fetch";


async function fetchData() {
  try{
    const response =  await fetch('https://reqres.in/api/users');
    const data =  await response.json();
    console.log(data);
    return data
  } catch (error) {
    console.log(error);
  }
    
}

fetchData();

