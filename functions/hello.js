exports.handler = async (event, context) => {
    console.log(JSON.serialize(event),JSON.serialize(context) )
    return {
      statusCode: 200,
      body: "Hello, World"
    };
  };