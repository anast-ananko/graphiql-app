interface Root {
  allFilms?: {
    films: Film[];
  };
  allPeople?: {
    people: Person[];
  };
  allPlanets?: {
    planets: Planet[];
  };
  allSpecies?: {
    species: Species[];
  };
  allStarships?: {
    starships: Starship[];
  };
  allVehicles?: {
    vehicles: Vehicle[];
  };
  film?: Film;
  node?: Node;
  person?: Person;
  planet?: Planet;
  species?: Species;
  starship?: Starship;
  vehicle?: Vehicle;
}

interface Film {
  id: string;
  characterConnection?: FilmCharactersConnection;
  created?: string;
  director?: string;
  edited?: string;
  episodeID?: number;
  openingCrawl?: string;
  planetConnection?: FilmPlanetsConnection;
  producers?: string[];
  releaseDate?: string;
  speciesConnection?: FilmSpeciesConnection;
  starshipConnection?: FilmStarshipsConnection;
  title?: string;
  vehicleConnection?: FilmVehiclesConnection;
}

interface FilmCharactersConnection {
  pageInfo: PageInfo;
  characters?: Person[];
  edges?: FilmCharactersEdge[];
  totalCount?: number;
}

interface FilmCharactersEdge {
  cursor: string;
  node?: Person;
}

interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor?: string;
  startCursor?: string;
}

interface FilmPlanetsConnection {
  pageInfo: PageInfo;
  edges?: FilmPlanetsEdge[];
  planets?: Planet[];
  totalCount?: number;
}

interface FilmPlanetsEdge {
  cursor: string;
  node?: Planet;
}

interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor?: string;
  startCursor?: string;
}

interface FilmSpeciesConnection {
  pageInfo: PageInfo;
  edges?: FilmSpeciesEdge[];
  species?: Species[];
  totalCount?: number;
}

interface FilmSpeciesEdge {
  cursor: string;
  node?: Species;
}

interface FilmStarshipsConnection {
  pageInfo: PageInfo;
  edges?: FilmStarshipsEdge[];
  starships?: Starship[];
  totalCount?: number;
}

interface FilmStarshipsEdge {
  cursor: string;
  node?: Starship;
}

interface FilmVehiclesConnection {
  pageInfo: PageInfo;
  edges?: FilmVehiclesEdge[];
  totalCount?: number;
  vehicles?: Vehicle[];
}

interface FilmVehiclesEdge {
  cursor: string;
  node?: Vehicle;
}

interface FilmsConnection {
  pageInfo: PageInfo;
  edges?: FilmsEdge[];
  films?: Film[];
  totalCount?: number;
}

interface FilmsEdge {
  cursor: string;
  node?: Film;
}

interface Node {
  id: string;
}

interface PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  endCursor?: string;
  startCursor?: string;
}

interface Person extends Node {
  id: string;
  birthYear?: string;
  created?: string;
  edited?: string;
  eyeColor?: string;
  gender?: string;
  hairColor?: string;
  height?: number;
  homeworld?: Planet;
  mass?: number;
  name?: string;
  skinColor?: string;
  species?: Species | null;
  filmConnection?: FilmsConnection;
  starshipConnection?: StarshipsConnection;
  vehicleConnection?: VehiclesConnection;
}

interface Planet extends Node {
  id: string;
  climates?: string[];
  created?: string;
  diameter?: number;
  edited?: string;
  filmConnection?: PlanetFilmsConnection;
  gravity?: string;
  name?: string;
  orbitalPeriod?: number;
  population?: number;
  residentConnection?: PlanetResidentsConnection;
  rotationPeriod?: number;
  surfaceWater?: number;
  terrains?: string[];
}

interface PlanetFilmsConnection {
  pageInfo: PageInfo;
  edges?: PlanetFilmsEdge[];
  totalCount?: number;
  films?: Film[];
}

interface PlanetFilmsEdge {
  cursor: string;
  node?: Film;
}

interface PlanetResidentsConnection {
  pageInfo: PageInfo;
  edges?: PlanetResidentsEdge[];
  totalCount?: number;
  residents?: Person[];
}

interface PlanetResidentsEdge {
  cursor: string;
  node?: Person;
}

interface PlanetFilmsConnection {
  pageInfo: PageInfo;
  edges?: PlanetFilmsEdge[];
  films?: Film[];
  totalCount?: number;
}

interface PlanetFilmsEdge {
  cursor: string;
  node?: Film;
}

interface PlanetResidentsConnection {
  pageInfo: PageInfo;
  edges?: PlanetResidentsEdge[];
  residents?: Person[];
  totalCount?: number;
}

interface PlanetResidentsEdge {
  cursor: string;
  node?: Person;
}

interface Species extends Node {
  id: string;
  averageHeight?: number;
  averageLifespan?: number;
  classification?: string;
  created?: string;
  designation?: string;
  edited?: string;
  eyeColors?: string[];
  filmConnection?: SpeciesFilmsConnection;
  hairColors?: string[];
  homeworld?: Planet;
  language?: string;
  name?: string;
  personConnection?: SpeciesPeopleConnection;
  skinColors?: string[];
}

interface SpeciesFilmsConnection {
  pageInfo: PageInfo;
  edges?: SpeciesFilmsEdge[];
  films?: Film[];
  totalCount?: number;
}

interface SpeciesFilmsEdge {
  cursor: string;
  node?: Film;
}

interface SpeciesFilmsConnection {
  pageInfo: PageInfo;
  edges?: SpeciesFilmsEdge[];
  films?: Film[];
  totalCount?: number;
}

interface SpeciesPeopleConnection {
  pageInfo: PageInfo;
  edges?: SpeciesPeopleEdge[];
  people?: Person[];
  totalCount?: number;
}

interface SpeciesPeopleEdge {
  cursor: string;
  node?: Person;
}

interface Starship extends Node {
  id: string;
  MGLT?: number;
  cargoCapacity?: number;
  consumables?: string;
  costInCredits?: number;
  created?: string;
  crew?: string;
  edited?: string;
  filmConnection?: StarshipFilmsConnection;
  hyperdriveRating?: number;
  length?: number;
  manufacturers?: string[];
  maxAtmospheringSpeed?: number;
  model?: string;
  name?: string;
  passengers?: string;
  pilotConnection?: StarshipPilotsConnection;
  starshipClass?: string;
}

interface StarshipFilmsConnection {
  pageInfo: PageInfo;
  edges?: StarshipFilmsEdge[];
  films?: Film[];
  totalCount?: number;
}

interface StarshipFilmsEdge {
  cursor: string;
  node?: Film;
}

interface StarshipPilotsConnection {
  pageInfo: PageInfo;
  edges?: StarshipPilotsEdge[];
  pilots?: Person[];
  totalCount?: number;
}

interface StarshipPilotsEdge {
  cursor: string;
  node?: Person;
}

interface StarshipsConnection {
  pageInfo: PageInfo;
  edges?: StarshipsEdge[];
  starships?: Starship[];
  totalCount?: number;
}

interface StarshipsEdge {
  cursor: string;
  node?: Starship;
}

interface Vehicle {
  id: string;
  cargoCapacity?: number;
  consumables?: string;
  costInCredits?: number;
  created?: string;
  crew?: string;
  edited?: string;
  filmConnection?: VehicleFilmsConnection;
  length?: number;
  manufacturers?: string[];
  maxAtmospheringSpeed?: number;
  model?: string;
  name?: string;
  passengers?: string;
  pilotConnection?: VehiclePilotsConnection;
  vehicleClass?: string;
}

interface VehicleFilmsConnection {
  pageInfo: PageInfo;
  edges?: VehicleFilmsEdge[];
  films?: Film[];
  totalCount?: number;
}

interface VehicleFilmsEdge {
  cursor: string;
  node?: Film;
}

interface VehiclePilotsConnection {
  pageInfo: PageInfo;
  edges?: VehiclePilotsEdge[];
  pilots?: Person[];
  totalCount?: number;
}

interface VehiclePilotsEdge {
  cursor: string;
  node?: Person;
}

interface VehiclesConnection {
  pageInfo: PageInfo;
  edges?: VehiclesEdge[];
  totalCount?: number;
  vehicles?: Vehicle[];
}

interface VehiclesEdge {
  cursor: string;
  node?: Vehicle;
}

export type { Root };
