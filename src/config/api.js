export const API = () => {
  const baseUrl = "http://localhost:3001/api/v1/";

  const executeAPI = async (endpoint, config) => {
    const response = await fetch(baseUrl + endpoint, config);
    const data = await response.json();
    return data;
  };

  return {
    get: executeAPI,
    post: executeAPI,
    put: executeAPI,
    delete: executeAPI,
  };
};

// Get data journeys
export const getJourneys = async () => {
  const response = await API().get("/journeys");
  return response.data;
};

// Get detail user with token
export const getDetailUser = async () => {
  const config = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + localStorage.token,
    },
  };
  const response = await API().get("/profile", config);
  return response.data;
};
