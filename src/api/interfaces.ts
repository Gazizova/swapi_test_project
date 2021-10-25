export interface IPlanetParams {
  pages: number;
}

export interface IPlanet {
  name: string;
  diameter: string;
  rotation_period: string;
  orbital_period: string;
  gravity: string;
  population: string;
  climate: string;
  terrain: string;
  surface_water: string;
  residents: string;
  films: string;
  url: string;
  created: string;
  edited: string;
}

export interface ICircleAttributes {
  cx: number;
  cy: number;
  r: number;
  fill?: string;
  id?: string;
}
