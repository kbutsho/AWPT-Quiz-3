/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import image1 from '../images/team/team-1.jpg';
import image2 from '../images/team/team-2.jpg'
import image3 from '../images/team/team-3.jpg'
import image4 from '../images/team/team-4.jpg'

const Team = () => {
    const Data = [
        {
            id: 1,
            name: "Kaushik Biswas",
            position: "CEO & Founder",
            image: image1
        },
        {
            id: 2,
            name: "Zannat Rakhi",
            position: "Product Manager",
            image: image2
        },
        {
            id: 3,
            name: "Parag Ghosh",
            position: "CTO",
            image: image3
        },
        {
            id: 4,
            name: "Anindita Roy",
            position: "Accountant",
            image: image4
        }
    ];
    const [data, setData] = useState(Data);
    console.log(setData);
    return (
        <section id="team" class="team section-bg">
      <div class="container">

        <div class="section-title">
          <h2>Team</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div class="row">
        {
            data.map(data =>
                <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
            <div class="member">
              <div class="member-img">
                <img src={data.image} class="img-fluid" alt="" />
                <div class="social">
                  <a href=""><i class="bi bi-twitter"></i></a>
                  <a href=""><i class="bi bi-facebook"></i></a>
                  <a href=""><i class="bi bi-instagram"></i></a>
                  <a href=""><i class="bi bi-linkedin"></i></a>
                </div>
              </div>
              <div class="member-info">
                <h4>{data.name}</h4>
                <span>{data.position}</span>
              </div>
            </div>
          </div>
            )
        }
        </div>

      </div>
    </section>
    );
};

export default Team;