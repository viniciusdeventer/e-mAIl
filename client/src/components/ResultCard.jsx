export default function ResultCard({ category, response }) {
  const categoryColor = category === "Produtivo" ? "blue-500" : "red-500";

  return (
    <div className="p-4 border rounded shadow bg-gray-50 w-90 min-h-[150px]  items-center">
      <h3 className={`font-semibold text-${categoryColor}`}>{category}</h3>
      <p className="mt-2">{response}</p>
    </div>
  );
}
