import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Events() {
  const [events, setEvents] = useState();
  useEffect(() => {
    axios("https://backendjson-7cnw.onrender.com/events")
      .then((i) => setEvents(i.data))
      .catch((i) => console.log(i));
  }, []);
  return (
    <div className="eventspage">
      <Link to={"/"}>
        <h1 className="eventlogo">Events</h1>
      </Link>
      <p className="bigger big2"> Join your party!</p>
      <div className="flexWrap">

      {/* {events && events.map(i => <div className="card">
            <img
              className="heightWenig"
              src="https://ik.imagekit.io/dwkgmo50n/cassie-gallegos-i-VetqrMmNY-unsplash.jpg?updatedAt=1688037522093"
              alt=""
            />
            <div className="textCard">
              <h3>{i.name}</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae iste ea blanditiis ipsam voluptate nostrum nobis
                ullam ratione esse, aliquid iure vitae assumenda.
              </p>
              <div className="amount">
                <p>0/{i.seats}</p>
                <ion-icon name="people-outline"></ion-icon>
              </div>
            </div>
          </div>)} */}

        {/* hardcoded events.. */}
        <Link to={"/event"}>
          <div className="card">
            <img
              className="heightWenig"
              src="https://ik.imagekit.io/dwkgmo50n/cassie-gallegos-i-VetqrMmNY-unsplash.jpg?updatedAt=1688037522093"
              alt=""
            />
            <div className="textCard">
              <h3>Pool party</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae iste ea blanditiis ipsam voluptate nostrum nobis
                ullam ratione esse, aliquid iure vitae assumenda.
              </p>
              <div className="amount">
                <p>0/34</p>
                <ion-icon name="people-outline"></ion-icon>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/event"}>
          <div className="card">
            <img
              className="heightWenig"
              src="https://ik.imagekit.io/dwkgmo50n/kelsey-chance-tAH2cA_BL5g-unsplash.jpg?updatedAt=1688037520914"
              alt=""
            />
            <div className="textCard">
              <h3>Feel the wine</h3>
              <p>
                Lorem ipsum dolor sitkjadfius elit. Recusandae iste ea
                blanditiis ipsam voluptate nostrum nobis ullam ratione esse,
                aliquid iure vitae assumenda.
              </p>
              <div className="amount">
                <p>0/25</p>
                <ion-icon name="people-outline"></ion-icon>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/event"}>
          <div className="card">
            <img
              className="heightWenig"
              src="https://ik.imagekit.io/dwkgmo50n/mathilde-langevin-PiwXpD3-Hbs-unsplash.jpg?updatedAt=1688048111535"
              alt=""
            />
            <div className="textCard">
              <h3>Picnic</h3>
              <p>
                Lorem ipsum dolor sit, Lorem ipsum dolor sit amet. Lorem, ipsum.
                Recusandae iste ea blanditiis ipsam voluptate nostrum nobis
                ullam ratione esse, aliquid iure vitae assumenda.
              </p>
              <div className="amount">
                <p>0/12</p>
                <ion-icon name="people-outline"></ion-icon>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/event"}>
          <div className="card">
            <img
              className="heightWenig"
              src="https://ik.imagekit.io/dwkgmo50n/philipp-KPkIpGg-GFE-unsplash.jpg?updatedAt=1688048112630"
              alt=""
            />
            <div className="textCard">
              <h3>Pool party</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae iste ea blanditiis ipsam voluptate nostrum nobis
                ullam ratione esse, aliquid iure vitae assumenda.
              </p>
              <div className="amount">
                <p>0/34</p>
                <ion-icon name="people-outline"></ion-icon>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/event"}>
          <div className="card">
            <img
              className="heightWenig"
              src="https://ik.imagekit.io/dwkgmo50n/cassie-gallegos-i-VetqrMmNY-unsplash.jpg?updatedAt=1688037522093"
              alt=""
            />
            <div className="textCard">
              <h3>Pool party</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae iste ea blanditiis ipsam voluptate nostrum nobis
                ullam ratione esse, aliquid iure vitae assumenda.
              </p>
              <div className="amount">
                <p>0/34</p>
                <ion-icon name="people-outline"></ion-icon>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/event"}>
          <div className="card">
            <img
              className="heightWenig"
              src="https://ik.imagekit.io/dwkgmo50n/mathilde-langevin-PiwXpD3-Hbs-unsplash.jpg?updatedAt=1688048111535"
              alt=""
            />
            <div className="textCard">
              <h3>Picnic</h3>
              <p>
                Lorem ipsum dolor sit, Lorem ipsum dolor sit amet. Lorem, ipsum.
                it. Recusandae iste ea blanditiis ipsam voluptate nostrum nobis
                ullam ratione esse, aliquid iure vitae assumenda.
              </p>
              <div className="amount">
                <p>0/12</p>
                <ion-icon name="people-outline"></ion-icon>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/event"}>
          <div className="card">
            <img
              className="heightWenig"
              src="https://ik.imagekit.io/dwkgmo50n/mathilde-langevin-PiwXpD3-Hbs-unsplash.jpg?updatedAt=1688048111535"
              alt=""
            />
            <div className="textCard">
              <h3>Picnic</h3>
              <p>
                Lorem ipsum dolor sit, Lorem ipsum dolor sit amet. Lorem, ipsum.
                it. Recusandae iste ea blanditiis ipsam voluptate nostrum nobis
                ullam ratione esse, aliquid iure vitae assumenda.
              </p>
              <div className="amount">
                <p>0/12</p>
                <ion-icon name="people-outline"></ion-icon>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/event"}>
          <div className="card">
            <img
              className="heightWenig"
              src="https://ik.imagekit.io/dwkgmo50n/mathilde-langevin-PiwXpD3-Hbs-unsplash.jpg?updatedAt=1688048111535"
              alt=""
            />
            <div className="textCard">
              <h3>Picnic</h3>
              <p>
                Lorem ipsum dolor sit, Lorem ipsum dolor sit amet. Lorem, ipsum.
                it. Recusandae iste ea blanditiis ipsam voluptate nostrum nobis
                ullam ratione esse, aliquid iure vitae assumenda.
              </p>
              <div className="amount">
                <p>0/12</p>
                <ion-icon name="people-outline"></ion-icon>
              </div>
            </div>
          </div>
        </Link>
        <Link to={"/event"}>
          <div className="card">
            <img
              className="heightWenig"
              src="https://ik.imagekit.io/dwkgmo50n/mathilde-langevin-PiwXpD3-Hbs-unsplash.jpg?updatedAt=1688048111535"
              alt=""
            />
            <div className="textCard">
              <h3>Picnic</h3>
              <p>
                Lorem ipsum dolor sit, Lorem ipsum dolor sit amet. Lorem, ipsum.
                it. Recusandae iste ea blanditiis ipsam voluptate nostrum nobis
                ullam ratione esse, aliquid iure vitae assumenda.
              </p>
              <div className="amount">
                <p>0/12</p>
                <ion-icon name="people-outline"></ion-icon>
              </div>
            </div>
          </div>
        </Link>
      </div>
      <footer className="darkeeer">
        <p>
          Copyright © 2023 - All right reserved
          <div className="right">
            <Link
              to={"https://www.instagram.com/whoisrinochka/"}
              className="logoSocial"
            >
              <ion-icon name="logo-instagram"></ion-icon>
            </Link>
            <Link
              to={"https://www.instagram.com/whoisrinochka/"}
              className="logoSocial"
            >
              <ion-icon name="logo-facebook"></ion-icon>
            </Link>
            <Link to={"https://twitter.com/"} className="logoSocial">
              <ion-icon name="logo-twitter"></ion-icon>
            </Link>
          </div>
        </p>
      </footer>
    </div>
  );
}

export default Events;
