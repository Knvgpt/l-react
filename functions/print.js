import axios from "axios";
exports.handler = async function (event, context) {
  const fetchData = () => {
    axios.get("https://randomuser.me/api").then((res) => {
      console.log(res.data.results[0].name.first);
      return res.data.results[0].name.first;
    });
  };
  const hello = fetchData();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `${hello}` }),
  };
};
