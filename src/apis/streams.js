const streams = async request => {
  const url = new URL(`http://localhost:3001${request.endpoint}`);
  const params = {};
  url.search = new URLSearchParams(params).toString();

  const response = await fetch(url, {
    method: request.method,
    body: JSON.stringify(request.body),
    headers: new Headers({
      "Content-Type": "application/json"
    })
  });

  const data = await response.json();
  console.log({ data });
  return data;
};

export default streams;
