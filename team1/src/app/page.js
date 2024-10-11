import Buttons from './components/Buttons';
import Inventorypage from './inventory/page';
export default function Home() {
  return (
    <div>
      <h1>Welcome to the Button Test Page</h1>
      <Buttons />
      <Inventorypage />
    </div>
  );
}
