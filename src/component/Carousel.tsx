import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import GajarHalwa from "../assets/GajarHalwa.jpg";
import PuranPoli from "../assets/PuranPoli.jpg";

function ImageGallery() {
  var items = [
    {
      name: "Gajar Halwa",
      description: "Gajar Halwa is the authenitc dish from Rajasthan.",
      url: GajarHalwa,
    },
    {
      name: "Puran Poli",
      description:
        "Puran poli is the sweet dish from Maharashtrians , Festivals are incomplete without it.",
      url: PuranPoli,
    },
    {
      name: "Ras malai",
      description: "Ras malai is milk with rasgulla.",
      url: PuranPoli,
    },
    {
      name: "Mohan Thal",
      description: "Halwa made from besan and dryfruits",
      url: PuranPoli,
    },
    {
      name: "Kaju Katli",
      description:
        "kaju katli are the way they are actually meant to be – thin, smooth, melt in the mouth slices of cashew goodness.",
      url: PuranPoli,
    },
  ];

  return (
    <Carousel>
      {items.map((item, i) => (
        <Item key={i} item={item} />
      ))}
    </Carousel>
  );
}

function Item(props: any) {
  return (
    <>
      <img src={props.item.url} width="100px" height="100px" />
      <h2>{props.item.name}</h2>
      <p>{props.item.description}</p>
      <a className="CheckButton" href="https://www.chefkunalkapur.com/">
        Check it out!
      </a>
      <br />
    </>
  );
}

export default ImageGallery;
