const BASE_URL = `  http://15.165.67.130:9000/schedules/1`;

export async function fetchDate() {
  const response = await fetch(`${BASE_URL}`);
  const json = await response.json();
  return json;
}