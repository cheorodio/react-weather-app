import '../App.css';
import '../App';
import { Locations, OtherLocation, OtherLocationTemp } from './Styles';

export default function OtherLocations() {
  return (
    <Locations>
      <OtherLocation>
        <p className="other-city">London</p>
        <OtherLocationTemp>20°</OtherLocationTemp>
      </OtherLocation>
      <OtherLocation>
        <p className="other-city">Shanghai</p>
        <OtherLocationTemp>34°</OtherLocationTemp>
      </OtherLocation>
      <OtherLocation>
        <p className="other-city">Cape Town</p>
        <OtherLocationTemp>4°</OtherLocationTemp>
      </OtherLocation>
      <OtherLocation>
        <p className="other-city">New York</p>
        <OtherLocationTemp>25°</OtherLocationTemp>
      </OtherLocation>
    </Locations>
  );
}
