import ClothingCard from "@/components/ClothingCard";

export const AllClothes = () => {
  return (
    <div className="flex overflow-x-auto gap-6 p-4 scroll-smooth">
      <ClothingCard />
      <ClothingCard />
      <ClothingCard />
    </div>
  );
};
