import React, { useState } from 'react';
import person1 from '../images/testimonials/testimonials-1.jpg';
import person2 from '../images/testimonials/testimonials-2.jpg'
import person3 from '../images/testimonials/testimonials-3.jpg'

const Testimonial = () => {
    const Data = [
        {
            id: 1,
            image: person1,
            name: "Kaushik Biswas",
            position: "CEO & Founder",
        },
        {
            id: 2,
            image: person2,
            name: "Zannat Rakhi",
            position: "Designer",
        },
        {
            id: 3,
            image: person3,
            name: "Parag Ghosh",
            position: "Manager",
        }
    ];
    const [data, setData] = useState(Data);
    console.log(setData)
        ;
    return (
        <div>

            <section id="testimonials" className="testimonials">
                <div className="container">
                    <div className="section-title">
                        <h2>Testimonials</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                        <div className="swiper-wrapper">
                            <div className="row">
                                {
                                    data.map(data =>
                                        <div className="testimonial-item col-md-4">
                                            <p>
                                                <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                                                Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                                <i class="bx bxs-quote-alt-right quote-icon-right"></i>
                                            </p>
                                            <img src={data.image} className="testimonial-img" alt="" />
                                            <h3>{data.name}</h3>
                                            <h4>{data.position}</h4>
                                        </div>
                                    )
                                }


                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Testimonial;