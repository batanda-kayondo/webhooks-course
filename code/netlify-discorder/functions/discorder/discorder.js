const axios = require("axios").default;
// const bodyParser = require('body-parser');

// Docs on event and context https://www.netlify.com/docs/functions/#the-handler-method
exports.handler = async (event, context) => {
  try {
    // console.log('event.body');
    const jsonObject = JSON.parse('{"' + decodeURI(event.body).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"').replace(/\s/g, '') + '"}')
    console.log(jsonObject);
    console.log('==================================>');
    console.log(jsonObject.data[FIELDS][ID]);
    // const body = JSON.parse(event.body);
    // console.log(event.urlencoded({ extended: false }));
    // const username = body.sender.login;
    // const avatarUrl = body.sender.avatar_url;
    // const repoName = body.repository.name;
    // const res = await axios.post(process.env.DISCORD_WEBHOOK_URL, {
    //   content: `:taco: :taco: :taco: ${username} just starred ${repoName}! :rocket: :muscle: :tada: :taco:`,
    //   embeds: [
    //     {
    //       image: {
    //         url: avatarUrl,
    //       },
    //     },
    //   ],
    // });
    // console.log("Submitted!");
    // console.log(body);
    return {
      statusCode: 204,
    };
  } catch (err) {
    return { statusCode: 500, body: err.toString() };
  }
};
