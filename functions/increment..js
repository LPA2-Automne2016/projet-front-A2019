exports.handler = async (event, context) => {
    console.log(JSON.stringify(event),JSON.stringify(context) )
    return {
      statusCode: 200,
      body: "Hello, World"
    };
  };