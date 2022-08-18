import axios from "axios";
exports.handler = async function (event, context) {
  const dt = "hello world";
  const fetchData = () => {
    axios.get("https://randomuser.me/api").then((res) => {
      console.log(res.data.results[0].name.first);
      dt = res.data.results[0].name.first;
    });
  };
  fetchData();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `${dt}` }),
  };
};
