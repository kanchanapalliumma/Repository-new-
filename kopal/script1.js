async function Handle() {
  feturl = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=68791b949ff04702b17a84ed88c84e02`;
  try {
    let response = await feturl;
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("error");
  }
}
