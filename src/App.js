import './App.css';
import OtherLocations from './components/OtherLocations';
import SearchBar from './components/SearchBar';

export default function App() {
  return (
    <div className="container">
      <SearchBar />
      <OtherLocations />
    </div>
  );
}
