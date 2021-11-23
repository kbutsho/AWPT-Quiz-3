import React, { useState } from 'react';
import ClientsData from './ClientsData';

const Clients = () => {

    const [clientData, setClientData] = useState(ClientsData);
    console.log(setClientData);
    return (
        <div>
            <section id="clients" className="clients section-bg">
                <div className="container">

                    <div className="row">
                        {
                            clientData.map(clientData => <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center"> <img src={clientData.image} className="img-fluid" alt="" />  </div>
                            )
                        }
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Clients;