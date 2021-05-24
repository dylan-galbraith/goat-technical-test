import './App.scss';
import heroImage from './assets/images/hero-image.png'
import arrowRight from './assets/icons/arrow-right.svg'
import quotes from './assets/icons/quotes.svg'

function App() {
  return (
    <div className="app">
      <main className="main">
        <img className="main__hero" src={heroImage} alt="hero" />
        <img className="main__quotes" src={quotes} alt="" />
        <p className="main__breadcrumbs">Why Choose Us <img src={arrowRight} alt="" /> Alumni Stories <img src={arrowRight} alt="" /> International Graduate in Finance</p>
        <div className="hero">
          <p className="hero__label">INTERNATIONAL STUDENT</p>
          <h1 className="hero__heading">If you're looking for a college that is committed to your success - this place for you</h1>
          <div className="student">
            <p className="student__name">STUDENT NAME</p>
            <p className="student__study">Graduate of Agriculturen & Bioresources at the best College</p>
          </div>
        </div>
      </main>
      <footer className="footer">
        <div className="footer__card">
          <p className="footer__card__label">PROGRAM</p>
          <p className="footer__card__text">Program Name</p>
        </div>
        <div className="footer__card">
          <p className="footer__card__label">CAMPUS</p>
          <p className="footer__card__text">Name of Campus</p>
        </div>
        <div className="footer__card">
          <p className="footer__card__label">HOMETOWN</p>
          <p className="footer__card__text">Hometown Name</p>
        </div>
        <div className="footer__card">
          <p className="footer__card__label">FAVOURTIE PLACE TO EAT</p>
          <p className="footer__card__text">Local Restaurant</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
