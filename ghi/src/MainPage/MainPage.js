import "./index.css";
import SimpleImageSlider from "react-simple-image-slider";

function MainPage() {
  const images = [
    { url: "/computer.jpg" },
    { url: "/map.jpg" },
    { url: "/stickynotes.jpg" },
    { url: "/networking.jpg" },
  ];

  return (
    <div
      className="MainPage"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <h1>Traffic Stop</h1>
      <p>
        {""}
        Help stop human trafficking by entering your missing loved one's
        information and signing up for alerts.
      </p>
      <div
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SimpleImageSlider
          width={896}
          height={504}
          images={images}
          showBullets={true}
          showNavs={true}
          slideDuration={0.5}
          autoPlay={true}
        />
      </div>
      <footer>
        <h5>Resources</h5>
        <p>
          National Human Trafficking Hotline: <br />
          Call 888-373-7888 <br />
          <a href="https://humantraffickinghotline.org/en">Website</a>
        </p>
      </footer>
    </div>
  );
}

export default MainPage;
