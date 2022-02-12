import styles from "../styles/Home.module.css";
import ReactWeather, { useWeatherBit } from "react-open-weather";

export default function Home() {
  const { data, isLoading, errorMessage } = useWeatherBit({
    key: "b7c93ea525c743e69903c0e8d876b753",
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
    todayDescFontColor: "#B5DEF4",
    todayInfoFontColor: "#B5DEF4",
    todayIconColor: "#FFF",
    forecastBackgroundColor: "#FFF",
    forecastSeparatorColor: "#DDD",
    forecastDateColor: "#777",
    forecastDescColor: "#777",
    forecastRangeColor: "#777",
    forecastIconColor: "#4BC4F7",
  };
  return (
    <div className={styles.container}>
      <ReactWeather
        isLoading={isLoading}
        errorMessage={errorMessage}
        data={data}
        lang="fr"
        locationLabel="Edmundston, NB"
        unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
        theme={customStyles}
      />
      {/* <h1>{data.current.temperature}</h1> */}
    </div>
  );
}
