// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
import axios from "axios";
const handler = async (event) => {
  try {
    function fetchData() {
      axios.get("https://randomuser.me/api").then((res) => {
        console.log(res);
      });
    }
    return {
      statusCode: 200,
      body: JSON.stringify(fetchData()),
      // // more keys you can return:
      // headers: { "headerName": "headerValue", ... },
      // isBase64Encoded: true,
    };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};

module.exports = { handler };
