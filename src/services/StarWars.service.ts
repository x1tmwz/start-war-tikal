export default class StarWars {
  private urls = {
    vehicles: "https://swapi.dev/api/vehicles/",
    pilots: "https://swapi.dev/api/people/",
    planets: "https://swapi.dev/api/planets/",
  };
  constructor(private request: Function) {}

  async doMultiRequest(urls: string[]): Promise<Array<any>> {
    let results: any = [];
    let promisesArray = [];
    for (let i = 0; i < urls.length; i++) {
      if (promisesArray.length === 5) {
        (await Promise.all(promisesArray)).map((data) => results.push(data));
        promisesArray = [];
      }
      promisesArray.push(this.request(urls[i]));
    }
    if (promisesArray.length > 0) {
      (await Promise.all(promisesArray)).map((data) => results.push(data));
    }
    return results;
  }
  async getAllVehicles() {
    const firstPage = await this.request(this.urls.vehicles);
    let results: Array<any> = firstPage.results;
    const pages = Math.ceil(firstPage.count / firstPage.results.length);
    let urls = [];
    for (let i = 2; i <= pages; i++) {
      urls.push(this.urls.vehicles + `?page=${i}`);
    }
    (await this.doMultiRequest(urls)).forEach(
      (data) => (results = results.concat(data.results))
    );
    return results.reduce(
      (prev, current) => {
        if (current.pilots.length > 0) {
          current.pilots.map((pilotsUrl: string) =>
            prev.pilotsUrls.add(pilotsUrl)
          );
          prev.vehicles.push({ vehicle: current.name, pilots: current.pilots });
        }
        return prev;
      },
      { vehicles: [], pilotsUrls: new Set() }
    );
  }
  async getAllPilots(pilotsUrls: Array<string>) {
    const pilots = await this.doMultiRequest(pilotsUrls);
    return pilots.reduce(
      (prev, current) => {
        prev.planetsUrls.add(current.homeworld);
        prev.pilots[current.url] = {
          name: current.name,
          homeworld: current.homeworld,
        };
        return prev;
      },
      { pilots: {}, planetsUrls: new Set() }
    );
  }
  async getAllPlanets(planetsUrls: Array<string>) {
    const planets = await this.doMultiRequest(planetsUrls);
    return planets.reduce((prev, current) => {
      prev[current.url] = {
        name: current.name,
        population: current.population,
      };
      return prev;
    }, {});
  }
  async getAllSpecificPlanets() {
    const planetsUrls = [
      "Tatooine",
      "Alderaan",
      "Naboo",
      "Bespin",
      "Endor",
    ].map((planet) => this.urls.planets + `?search=${planet}`);
    return (await this.doMultiRequest(planetsUrls)).map((data) => {
      if (!data.results || !data.results[0]) {
        return { name: "",value: 0 };
      }
      return {
        name: data.results[0].name,
        value: parseInt(data.results[0].population),
      };
    });
  }
  async getVehicleNamesWithTheHighestSumOfPopulation() {
    const { vehicles, pilotsUrls } = await this.getAllVehicles();
    const { pilots, planetsUrls } = await this.getAllPilots([...pilotsUrls]);
    const planets = await this.getAllPlanets([...planetsUrls]);
    return vehicles.reduce(
      (prev: any, vehicle: any) => {
        let sumPopulation = 0;
        let pilotsData: Array<any> = [];
        let planetsData: Array<any> = [];
        vehicle.pilots.forEach((pilot: any) => {
          const fullPilot = pilots[pilot];
          pilotsData.push(fullPilot.name);
          const word = planets[fullPilot.homeworld];
          if (!isNaN(word.population)) {
            sumPopulation += parseInt(word.population);
          }
          planetsData.push(`planet:${word.name} population:${word.population}`);
        });
        const summary = {
          vehicle: vehicle.vehicle,
          pilots: pilotsData,
          planets: planetsData,
          sumPopulation,
        };
        prev = prev.sumPopulation < summary.sumPopulation ? summary : prev;
        return prev;
      },
      { sumPopulation: 0 }
    );
  }
}
