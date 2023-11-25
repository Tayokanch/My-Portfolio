import React from "react";
import "./Portfolio.css";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/Project3.png";

import { useNavigate } from "react-router-dom";

function Portfolio() {
  const spotify = "https://cheery-belekoy-b038cd.netlify.app/";
  const dashboard = "https://www.facebook.com/";

  return (
    <main className="main-porfolio">
      <section className="portfolio">
        <div>
          <p>Dashboard</p>
        </div>
        <div>
          <img src={project3} alt="Dashboard-Project" />
          <p className="project-description">
{/*             This is a dynamic Dashboard empowering users to create posts and add
            comments seamlessly. Upon submission, the content is sent to an API
            via a POST request. To ensure real-time updates, a GET API is
            employed to refresh the dashboard with any new posts and comments.
            Users can also delve into specific content by clicking on the post
            title to view the associated comments. */}
          </p>
          <button onClick={() => window.open(spotify, "_blank")}>
            Explore
          </button>
        </div>
      </section>
      <section className="portfolio">
        <div>
          <p>Shopping Cart</p>
        </div>
        <div>
          <img src={project2} alt="Shopping-Cart" />
          <p className="project-description">
{/*             A shopping cart that allows users to pick items by clicking on each
            item in the store section and get it rendered in the cart. In the
            cart, each item comes with a minus button used for decreasing the
            value of the item and also for deleting the item from the cart.
            There is also a plus button that allows a user to increase the value
            of each item. */}
          </p>
          <button onClick={() => window.open(shoppingCart, "_blank")}>
            Explore
          </button>
        </div>
      </section>

      <section className="portfolio">
        <div>
          <p>Music App</p>
        </div>
        <div>
          <img src={project1} alt="Shopping-Cart" />
          <p className="project-description">
{/*             This is a music app, user can play music and its well responsive
 */}          </p>
          <button onClick={() => window.open(shoppingCart, "_blank")}>
            Explore
          </button>
        </div>
      </section>
    </main>
  );
}

export default Portfolio;
