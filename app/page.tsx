import { getSounds } from "./actions/getSounds";
import HomePage from "./components/HomePage";

export default async function Page() {
  const { sounds } = await getSounds();

  return <HomePage sounds={sounds} />;
}
