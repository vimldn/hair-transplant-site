export const cities = ['London', 'Manchester', 'Birmingham']
export function getCityData(city: string) {
  return { name: city, slug: city.toLowerCase() }
}
