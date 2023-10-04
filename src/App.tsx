import image1 from "./assets/images/city.jpg";
import image2 from "./assets/images/galaxy.jpg";
import image3 from "./assets/images/gregory.jpg";
import image4 from "./assets/images/iceview.jpeg";
import image5 from "./assets/images/mountains.jpg";
import image6 from "./assets/images/nature.jpg";
import image7 from "./assets/images/space.jpg";
import "./App.css";
import { ImageSlider } from "./ImageSlider";

const IMAGES = [
  { url: image1, alt: "city" },
  { url: image2, alt: "galaxy" },
  { url: image3, alt: "gregory" },
  { url: image4, alt: "iceview" },
  { url: image5, alt: "mountains" },
  { url: image6, alt: "nature" },
  { url: image7, alt: "space" },
];

export default function App() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 4",
        margin: "0 auto",
      }}
    >
      <h1>Image Slider</h1>
      <ImageSlider images={IMAGES} />
      <a href="/" style={{ fontSize: "3rem" }}>
        link
      </a>
    </div>
  );
}
