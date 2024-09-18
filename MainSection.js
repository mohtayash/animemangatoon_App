import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import img1 from '../Assests/img1.webp';
import img2 from '../Assests/img2.webp';
import img3 from '../Assests/img3.webp';
import img4 from '../Assests/img4.webp';
import img5 from '../Assests/img5.webp';
import img6 from '../Assests/img6.webp';
import img7 from '../Assests/img7.webp';
import img8 from '../Assests/img8.jpg';
import img9 from '../Assests/img9.jpg';
import img12 from '../Assests/img12.webp';
import img13 from '../Assests/img13.webp';
import img14 from '../Assests/img14.webp';
import BellIcon from "./Bell";

const Mainsection = () => {
  return (
    <div>
    <BellIcon />
      <section style={{ display: 'flex', padding: '50px 200px' }}>
        {/* Left Section */}
        <div style={{ flex: 3, border: '1px solid', padding: '20px' }}>
          <h1>Page Not Found</h1>
          <p>
            Sorry, the page you are looking for cannot be found. Try searching
            for the best match or browse the links below:
          </p>

          {/* Search Bar */}
          <div style={{ backgroundColor: '#f7f7f7', padding: '25px' }}>
            <form style={{ display: 'flex', alignItems: 'center' }}>
              <input
                placeholder="Search..."
                type="text"
                style={{
                  border: 0,
                  height: '30px',
                  width: '100%',
                  marginLeft: '25px',
                }}
              />
              <button
                type="submit"
                style={{
                  border: 0,
                  backgroundColor: '#f29900',
                  color: 'white',
                  marginRight: '25px',
                }}
              >
                <SearchIcon />
              </button>
            </form>
          </div>

          {/* Latest Articles Section */}
          <div style={{ marginTop: '30px' }}>
            <div style={{ borderBottom: '2px solid #f29900', marginBottom: '20px' }}>
              <h3>Latest Articles</h3>
            </div>

            <div style={{ display: 'flex' }}>
              <div style={{ flex: 1, paddingRight: '20px' }}>
                {[img1, img2, img3, img4, img5].map((img, index) => (
                  <div key={index} style={{ marginBottom: '20px' }}>
                    <img src={img} alt="article" />
                    <h3>Gwichon Village Chapter 1-5: Mumyeong And Dark Spirit</h3>
                    <p>
                      Gwichon Village Chapter 1-5 will immerse you in a tapestry
                      of horrifying truths lurking within what appears to be a...
                    </p>
                  </div>
                ))}
              </div>

              <div style={{ flex: 1 }}>
                {[img4, img5, img12, img13, img14].map((img, index) => (
                  <div key={index} style={{ marginBottom: '20px' }}>
                    <img src={img} alt="article" />
                    <h3>Gwichon Village Chapter 1-5: Mumyeong And Dark Spirit</h3>
                    <p>
                      A Castle Swimmer review to offer you a glimpse at Kappa and
                      Siren and their journey throughout the Castle Swimmer...
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div style={{ flex: 1, marginLeft: '20px' }}>
          {/* Recommended Section */}
          <div style={{ border: '1px solid', padding: '20px', marginBottom: '20px' }}>
            <h3>Recommended</h3>
            {[img6, img7, img8, img9].map((img, index) => (
              <div key={index} style={{ display: 'flex', marginBottom: '20px' }}>
                <img src={img} alt="recommended" style={{ borderRadius: '10px', marginRight: '10px' }} />
                <p>
                  {index === 0
                    ? 'Solo Leveling Or Omniscient Reader: Which One Is Better?'
                    : index === 1
                    ? "Castle Swimmer Chapter 56-61: New Challenges And Alliances"
                    : index === 2
                    ? 'Noblesse Main Characters Raizel and Frankenstein: Know All About the Powerful Duo'
                    : 'Hooky Webtoon Review: The Dreaded Destiny of the Twins'}
                </p>
              </div>
            ))}
          </div>

          {/* Categories Section */}
          <div style={{ border: '1px solid', padding: '20px' }}>
            <h3>Categories</h3>
            <p>FEATURED</p>
            <hr />
            <p>LATEST NEWS AND REVIEWS</p>
            <hr />
            <p>POPULAR LISTS</p>
          </div>
        </div>
      </section>
      <div>
      
    </div>
    
    </div>
  );
};

export default Mainsection;
