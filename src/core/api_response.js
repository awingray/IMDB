function makeResponse(data, message, status_code) {
  var response = data;
  response = {
    status: status_code,
    message: message,
    data: data ? data : [],
  };

  return response;
}

module.exports = {
  makeResponse,
};
