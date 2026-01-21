import { useEffect, useState } from "react";
import { getUsers } from "../services/api";
import { useNavigate } from "react-router-dom";
import { ResponsiveBar } from "@nivo/bar";
import "../styles.css";

export default function Dashboard() {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getUsers()
      .then(setUsers)
      .catch((err) => console.error(err));
  }, []);

  const citiesCount = users.reduce((acc, user) => {
    const city = user.address.city;
    acc[city] = (acc[city] || 0) + 1;
    return acc;
  }, {});

  const chartData = Object.entries(citiesCount).map(([city, count]) => ({
    city,
    count,
  }));

  return (
    <div className="container">
      <h1>Dashboard</h1>
      <button className="home-btn" onClick={() => navigate("/")}>
        Home
      </button>

      {users.length === 0 ? (
        <p style={{ textAlign: "center" }}>Cargando usuarios...</p>
      ) : (
        <>
          <div className="cards-container">
            {users.map((u) => (
              <div className="user-card" key={u.id}>
                <h3>{u.name}</h3>
                <p>
                  <strong>Email:</strong> {u.email}
                </p>
                <p>
                  <strong>Ciudad:</strong> {u.address.city}
                </p>
                <p>
                  <strong>Tel:</strong> {u.phone}
                </p>
              </div>
            ))}
          </div>

          <div className="chart-container">
            <ResponsiveBar
              data={chartData}
              keys={["count"]}
              indexBy="city"
              margin={{ top: 50, right: 50, bottom: 70, left: 60 }}
              padding={0.4}
              valueScale={{ type: "linear" }}
              colors={{ scheme: "set2" }}
              axisBottom={{
                tickRotation: -45,
                legend: "Ciudad",
                legendPosition: "middle",
                legendOffset: 50,
              }}
              axisLeft={{
                legend: "Usuarios",
                legendPosition: "middle",
                legendOffset: -50,
              }}
              labelSkipWidth={12}
              labelSkipHeight={12}
              labelTextColor="#000"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
            />
          </div>
        </>
      )}
    </div>
  );
}
