import './App.scss';
import arrowIcon from './assets/icons/arrow-up-right.svg';

function App() {
  return (
    <main className="main">
      <h1 className="main__heading">Insights</h1>
      <div className="featured">
        <p className="featured__label">Featured</p>
        <article className="featured__card">
          <div className="featured__image"></div>
          <div className="featured__bio">
            <p className="card__category">TECHNOLOGY</p>
            <p className="card__title">How to Pick Technology</p>
            <p className="card__text">Technology is a significant investment and an incredibly useful one, when the right technology is brought in. Here are some tips and considerations to help you pick the most useful tech for your company.</p>
            <button className="featured__button">Discover more <img src={arrowIcon} alt="arrow icon" /></button>
          </div>
        </article>
      </div>
      <hr className="main__hr"/>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item active">All Topics</li>
          <li className="nav__item">Project</li>
          <li className="nav__item">Process</li>
          <li className="nav__item">Strategy</li>
          <li className="nav__item">Technology</li>
          <li className="nav__item">Tools</li>
        </ul>
      </nav>
      <section className="card__display">
        <article className="card">
          <div className="card__image card__image--1"></div>
          <div className="card__bio">
            <p className="card__category">TOOLS</p>
            <p className="card__title">Technology Adoption Tool</p>
            <p className="card__snippet">Download our Tech Adoption Tool directly here.</p>
          </div>
        </article>
        <article className="card">
          <div className="card__image card__image--2">
            <div className="card__video">VIDEO</div>
          </div>
          <div className="card__bio">
            <p className="card__category">STRATEGY</p>
            <p className="card__title">Developing an IT Strategy</p>
            <p className="card__snippet">An IT Strategy helps a company align technology, process and strategy.</p>
          </div>
        </article>
        <article className="card">
          <div className="card__image card__image--3"></div>
          <div className="card__bio">
            <p className="card__category">TECHNOLOGY</p>
            <p className="card__title">Why Less May Be More</p>
            <p className="card__snippet">New tech is being released daily and the bright and shiny marketing is designed to lure us in!</p>
          </div>
        </article>
        <article className="card">
          <div className="card__image card__image--1"></div>
          <div className="card__bio">
            <p className="card__category">TOOLS</p>
            <p className="card__title">Technology Adoption Tool</p>
            <p className="card__snippet">Download our Tech Adoption Tool directly here.</p>
          </div>
        </article>
        <article className="card">
          <div className="card__image card__image--2">
            <div className="card__video">VIDEO</div>
          </div>
          <div className="card__bio">
            <p className="card__category">STRATEGY</p>
            <p className="card__title">Developing an IT Strategy</p>
            <p className="card__snippet">An IT Strategy helps a company align technology, process and strategy.</p>
          </div>
        </article>
        <article className="card">
          <div className="card__image card__image--3"></div>
          <div className="card__bio">
            <p className="card__category">TECHNOLOGY</p>
            <p className="card__title">Why Less May Be More</p>
            <p className="card__snippet">New tech is being released daily and the bright and shiny marketing is designed to lure us in!</p>
          </div>
        </article>

      </section>
    </main>
  );
}

export default App;
