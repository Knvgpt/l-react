import axios from "axios";
exports.handler = async function (event, context) {
  const fetchData = () => {
    axios.get("https://randomuser.me/api").then((res) => {
      console.log(res);
    });
  };
  fetchData();
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "yoooo" }),
  };
};
