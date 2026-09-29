import SideBar from "../SideBar/SideBar";
import ClothesSection from "../ClothesSection/ClothesSection";
import "./Profile.css";

export default function Profile({ clothingItems, handleCard, handleAddBtn }) {
  return (
    <section className="profile">
      <SideBar />
      <ClothesSection
        handleCard={handleCard}
        clothingItems={clothingItems}
        handleAddBtn={handleAddBtn}
      />
    </section>
  );
}
