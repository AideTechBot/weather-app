import styles from "../styles/Home.module.css";
import ReactWeather, {
  useOpenWeather,
} from "../react-open-weather/src/js/index";

export default function Home() {
  const { data, isLoading, errorMessage } = useOpenWeather({
    key: "9416de207c05d06fda860ca53cebd517",
    lat: "47.3690",
    lon: "-68.3267",
    lang: "fr",
    unit: "metric", // values are (metric, standard, imperial)
  });
  const customStyles = {
    fontFamily: "Helvetica, sans-serif",
    gradientStart: "#0181C2",
    gradientMid: "#04A7F9",
    gradientEnd: "#4BC4F7",
    locationFontColor: "#FFF",
    todayTempFontColor: "#FFF",
    todayDateFontColor: "#B5DEF4",
    todayRangeFontColor: "#B5DEF4",
    todayDescFontColor: "#FFF",
    todayInfoFontColor: "#B5DEF4",
    todayIconColor: "#FFF",
    forecastBackgroundColor: "#FFF",
    forecastSeparatorColor: "#DDD",
    forecastDateColor: "#777",
    forecastDescColor: "#777",
    forecastRangeColor: "#777",
    forecastIconColor: "#4BC4F7",
    borderRadius: 0,
  };
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="fr"
      locationLabel="Edmundston, NB"
      unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
      theme={customStyles}
      showForecast={false}
    />
  );
}
