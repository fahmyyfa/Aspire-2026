export default function StatCard({
  number,
  label,
}: {
  number: string;
  label: string;
}) {
  return (
    <div className="stat-card">
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}
