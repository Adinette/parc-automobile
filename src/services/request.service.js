const baseUrl = " http://apivoiture.hecamacb.com/hanane/public/api/";

export async function request(url, method, data) {
  const requestOptions = {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(`${baseUrl}${url}`, requestOptions);
  if (!response.ok) {
    throw new Error("Erreur lors de la requête");
  }

  return response.json();
}

export default request;
