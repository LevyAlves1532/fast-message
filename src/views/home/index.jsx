// CONTAINERs
import Posts from "../../containers/home/Posts";

function Home(props) {
  return (
    <main className="HomeView">
      <div className="HomeView__container">
        <Posts />
      </div>
    </main>
  )
}

export default Home;