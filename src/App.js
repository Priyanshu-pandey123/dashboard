import DashboardAnalytics from "./Components/DashboardAnalytics/DashboardAnalytics";
import { ProfileAnalytics } from "./Components/ProfileAnalytics/ProfileAnalytics";
import "./App.css";

function App() {
  return (
    <div className="App">
      <DashboardAnalytics />
      <ProfileAnalytics />
    </div>
  );
}

export default App;
