export default function Banner() {
  return (
    <div className="banner">
      <picture>
        <source type="image/webp" srcSet="img/content/banner-bg.webp, img/content/banner-bg@2x.webp 2x" />
        <img src="img/content/banner-bg.jpg" srcSet="img/content/banner-bg@2x.jpg 2x" width="1280" height="280" alt="баннер" />
      </picture>
      <p className="banner__info">
        <span className="banner__message">Новинка!</span>
        <span className="title title--h1">Cannonball Pro MX 8i</span>
        <span className="banner__text">Профессиональная камера от известного производителя</span>
        <a className="btn" href="#">Подробнее</a>
      </p>
    </div>
  );
}
