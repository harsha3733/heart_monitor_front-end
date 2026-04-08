import Layout from "../components/layout/Layout";
import GlassCard from "../components/common/GlassCard";
import StatCard from "../components/common/StatCard";

export default function Dashboard() {

  // 🔥 Dummy data (will replace later)
  const data = {
    heartRate: 90,
    spo2: 97,
    temperature: 36.7,
    steps: 2000,
    hrv: 72,
    activity: "Low",
    tempChange: 0.2,
    pulsePressure: 45
  };

  return (
    <Layout>
      <div style={styles.container}>

        {/* 🔷 GREETING CARD */}
        <GlassCard style={styles.greeting}>
          <h2>Hello, Harsha 👋</h2>
          <p>How are you today?</p>
        </GlassCard>

        {/* 🔷 PRIMARY VITALS */}
        <div style={styles.grid}>
          <StatCard title="❤️ Heart Rate" value={`${data.heartRate}`} />
          <StatCard title="🫁 SpO2" value={`${data.spo2}%`} />
          <StatCard title="🌡 Temperature" value={`${data.temperature}°C`} />
          <StatCard title="🚶 Steps" value={`${data.steps}`} />
        </div>

        {/* 🔷 SECONDARY METRICS */}
        <div style={styles.grid}>
          <StatCard title="HRV" value={data.hrv} />
          <StatCard title="Activity" value={data.activity} />
          <StatCard title="Temp Change" value={data.tempChange} />
          <StatCard title="Pulse Pressure" value={data.pulsePressure} />
        </div>

        {/* 🔷 PREDICTION PANEL */}
        <GlassCard style={styles.prediction}>
          <h3>Prediction</h3>

          <button style={styles.button}>
            Predict
          </button>

          <div style={styles.result}>
            <p>Risk: --</p>
            <p>Status: --</p>
          </div>
        </GlassCard>

      </div>
    </Layout>
  );
}

const styles = {
  container: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px"
  },

  greeting: {
    height: "150px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "15px"
  },

  prediction: {
    padding: "20px"
  },

  button: {
    marginTop: "10px",
    padding: "10px",
    border: "none",
    borderRadius: "10px",
    background: "#00c6ff",
    color: "black",
    cursor: "pointer"
  },

  result: {
    marginTop: "15px"
  }
};