import axios from "axios";
exports.handler = async function (event, context) {
  async function fetchData() {
    const res = axios.get("https://randomuser.me/api");
    console.log(res.data.results[0].name.first);
  }
};
fetchData();
return {
  statusCode: 200,
  body: JSON.stringify({ message: "yoooo" }),
};
