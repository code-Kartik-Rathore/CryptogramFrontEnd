import NavBar from "./NavBar";
import Direct from "./Direct";
import Ribbon from "./Ribbon";
import PortfolioDetails from "./PortfolioDetails";

export default function PortfolioPage() {
  return (
    <div className="full-page">
      <Ribbon />
      <div>
        <NavBar />
        <Direct />
        <PortfolioDetails />
      </div>
    </div>
  );
}
