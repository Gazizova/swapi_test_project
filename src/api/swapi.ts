import axios, { AxiosError } from "axios";

const HTTPClient = axios.create({
  timeout: 1000,
  baseURL: "https://swapi.dev/api/"
});

export interface IParams {
  page: number;
  search: string;
}

export const getPlanets = (params?: IParams) => {
  return HTTPClient.get("planets", { params });
};

export const getPeople = (params?: IParams) => {
  return HTTPClient.get("people", { params });
};

export const getFilms = (params?: IParams) => {
  return HTTPClient.get("films", { params });
};
