import React, { useState } from 'react';
import image1 from '../images/portfolio/portfolio-1.jpg';
import image2 from '../images/portfolio/portfolio-2.jpg';
import image3 from '../images/portfolio/portfolio-3.jpg';
import image4 from '../images/portfolio/portfolio-4.jpg';
import image5 from '../images/portfolio/portfolio-5.jpg';
import image6 from '../images/portfolio/portfolio-6.jpg';
import image7 from '../images/portfolio/portfolio-7.jpg';
import image8 from '../images/portfolio/portfolio-8.jpg';
import image9 from '../images/portfolio/portfolio-9.jpg';

const Portfolio = () => {
    const Data = [
        {
            id: 1,
            image: image1
        },
        {
            id: 2,
            image: image2
        },
        {
            id: 3,
            image: image3
        },
        {
            id: 4,
            image: image4
        },
        {
            id: 5,
            image: image5
        },
        {
            id: 6,
            image: image6
        },
        {
            id: 7,
            image: image7
        },
        {
            id: 8,
            image: image8
        },
        {
            id: 9,
            image: image9
        }
    ];
    const [data, setData] = useState(Data);
    console.log(setData);
    return (
        <div>

            <section id="portfolio" className="portfolio">
                <div className="container">

                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-12 d-flex justify-content-center">
                            <ul id="portfolio-flters">
                                <li data-filter="*" class="filter-active">All</li>
                                <li data-filter=".filter-app">App</li>
                                <li data-filter=".filter-card">Card</li>
                                <li data-filter=".filter-web">Web</li>
                            </ul>
                        </div>
                    </div>

                    <div className="row portfolio-container">
                        {
                            data.map(data =>
                                <div class="col-lg-4 col-md-6 col-md-4 portfolio-item filter-app">
                                    <img src={data.image} class="img-fluid" alt="" />
                                </div>
                            )
                        }

                    </div>

                </div>
            </section>
        </div>
    );
};

export default Portfolio;