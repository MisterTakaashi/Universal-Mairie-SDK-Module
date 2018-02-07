export class WeatherModel {
  city_info: {
    name: string;
    country: string;
  };
  current_condition: {
    date: string;
    hour: string;
    condition: string;
    condition_key: string;
    icon: string;
    icon_big: string;
    tmp: number;
  };
}
