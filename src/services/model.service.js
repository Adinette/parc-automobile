import { request } from "../services/request.service";

/**
 * Calls the backend API to add cars to the system.
 *
 * @param {object} data - The data containing the car information.
 * @return {Promise} A Promise that resolves to the response data from the server.
 */
export function addModel(data) {
  return request("models", "POST", data);
}
/**
 * Retrieves the marque information using an HTTP GET request to the 'params/marques' endpoint.
 *
 * @return {Promise} A Promise that resolves to the retrieved marque information.
 */
export function getModel() {
  return request("params/model", "GET");
}
/**
 * Sends a PUT request to update cars with the provided data.
 *
 * @param {object} data - The data to be used in the update request.
 * @return {Promise} A Promise that resolves with the result of the update request.
 */
export function updateModel(data) {
  return request("models", "PUT", data);
}
/*
 * @param {object} data - The data to be used in the update request.
 * @return {Promise} A Promise that resolves with the result of the update request.
 */
export function deleteModel(data) {
  return request("models", "delete", data);
}
