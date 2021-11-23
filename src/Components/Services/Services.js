/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faIcons, faTeeth, faFootballBall,faAddressBook,faLock  } from '@fortawesome/free-solid-svg-icons'

const Services = () => {
    const serviceData = [
        {
            id: 1,
            serviceName: 'Lorem Ipsum',
            serviceDetails: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
            icon: faBox

        },
        {
            id: 2,
            serviceName: 'Sed Perspiciatis',
            serviceDetails: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
            icon: faIcons
        },
        {
            id: 3,
            serviceName: 'Magni Dolores',
            serviceDetails: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
            icon: faLock
        },
        {
            id: 4,
            serviceName: 'Nemo Enim',
            serviceDetails: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
            icon: faAddressBook
        },
        {
            id: 5,
            serviceName: 'Dele Cardo',
            serviceDetails: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
            icon: faFootballBall
        },
        {
            id: 6,
            serviceName: 'Divera Don',
            serviceDetails: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
            icon: faTeeth
        }
    ];
    const [service, setService] = useState(serviceData);
    console.log(setService);

    return (
        <div>
            <section id="services" className="services">
                <div className="container">

                    <div className="section-title">

                        <h2>Services</h2>
                        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                    </div>

                    <div className="row">
                        {
                            service.map(service =>

                                <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                                    <div className="icon-box iconbox-blue">
                                        <div className="icon">
                                            <FontAwesomeIcon icon={service.icon} />
                                        </div>
                                        <h4><a href="">{service.serviceName}</a></h4>
                                        <p>{service.serviceDetails}</p>
                                    </div>
                                </div>

                            )
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;