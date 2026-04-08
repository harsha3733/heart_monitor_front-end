import GlassCard from "./GlassCard";

export default function StatCard({ title, value }) {
  return (
    <GlassCard style={styles.card}>
      <div style={styles.content}>
        <h4 style={styles.title}>{title}</h4>
        <p style={styles.value}>{value}</p>
      </div>
    </GlassCard>
  );
}

const styles = {
  card: {
    padding: "15px",
    textAlign: "center",
    minWidth: "120px"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: "5px"
  },
  title: {
    margin: 0,
    fontSize: "14px",
    color: "#ccc"
  },
  value: {
    margin: 0,
    fontSize: "18px",
    fontWeight: "bold"
  }
};