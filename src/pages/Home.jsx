import Banner from "../components/BannerHome";
import Cards from "../components/Cards";
import DATA from "../assets/data";

export default function Home() {
  return (
      <div>
        <Banner />

        <section className="home-section">
        <div className="home-cards">
         {DATA.map((apartment) => {
        return (
          <Cards
            key={apartment.id}
            id={apartment.id}
            title={apartment.title}
            cover={apartment.cover}
          />
        );
      })}
    </div>

        </section>
    
    </div>
  )
}
