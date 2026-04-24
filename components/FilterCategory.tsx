"use client";

interface FilterCategoryProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export default function FilterCategory({
  categories,
  selectedCategory,
  onSelectCategory,
}: FilterCategoryProps) {
  return (
    <div style={{ 
      display: "flex", 
      gap: "10px", 
      marginBottom: "30px", 
      justifyContent: "center", 
      flexWrap: "wrap" 
    }}>
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelectCategory(cat)}
          className={`btn ${selectedCategory === cat ? "btn-primary" : "btn-outline"}`}
          style={{ textTransform: "capitalize" }}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}