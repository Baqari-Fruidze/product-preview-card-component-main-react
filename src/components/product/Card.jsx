import "./card.css";
import sunamoMob from "/images/image-product-mobile.jpg";
import sunamoDes from "/images/image-product-desktop.jpg";
import icon from "/images/icon-cart.svg";

export default function Card() {
  return (
    <div className="container">
      <img src={sunamoMob} alt="" className="sunamoM" />
      <img src="/images/image-product-desktop.jpg" alt="" className="sunamoD" />
      <div className="text-con">
        <span className="perfume">PERFUME</span>
        <h1 className="gabriela">Gabrielle Essence Eau De Parfum</h1>
        <p className="para">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="price">
          <span className="first">$149.99</span>
          <span className="second">$169.99</span>
        </div>
        <button className="btn">
          <img src="/images/icon-cart.svg" alt="" /> <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}
