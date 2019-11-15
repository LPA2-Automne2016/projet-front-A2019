exports.handler = async (event, context) => {
    console.log(JSON.stringify(event),JSON.stringify(context) )

    // Default options are marked with *
  await fetch('https://lp4asgadot.herokuapp.com/counters/'+event.body.counterId+'.json', {
    method: 'PATCH', // *GET, POST, PUT, DELETE, etc.
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json'
    }
  });
    return {
        statusCode: 201,
        body: "Updated"
    };
};