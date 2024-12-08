
const url = "https://dev.curiosum.eu/dbewings/fluege.json";
let json;


async function getData(url) {
  try {
    let response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    let json = await response.json();
    return(json);
  } catch (error) {
    console.error(error.message);
  }
}

getData(url).then((json) => {
  console.log(json);
});
