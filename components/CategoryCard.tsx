export default function CategoryCard({
  icon,
  name,
}: {
  icon: string;
  name: string;
}) {
  return (
    <li className="category-card">
      <span className="category-icon">{icon}</span>
      <h3 className="category-name">{name}</h3>
    </li>
  );
}
