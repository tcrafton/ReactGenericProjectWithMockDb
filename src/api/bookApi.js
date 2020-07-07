import { handleResponse, handleError } from "./apiUtil";
import { API_URL } from "./apiConfig";

const baseUrl = API_URL + "books";

export function getBooks() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}