import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {

    return (
        <div>
            <section id="counts" className="counts section-bg">
                <div className="container">
                    <div className="row counters">
                        <div className="col-lg-3 col-6 text-center">
                            <span className="purecounter">
                                <CountUp
                                    start={0}
                                    end={160}
                                    duration={3}
                                    decimals={2} 
                                />
                            </span>
                            <p>Clients</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                        <span className="purecounter">
                                <CountUp
                                    start={0}
                                    end={320}
                                    duration={3}
                                    decimals={2} 
                                />
                            </span>
                            <p>Projects</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                        <span className="purecounter">
                                <CountUp
                                    start={0}
                                    end={520}
                                    duration={3}
                                    decimals={2} 
                                />
                            </span>
                            <p>Hours Of Support</p>
                        </div>

                        <div className="col-lg-3 col-6 text-center">
                        <span className="purecounter">
                                <CountUp
                                    start={0}
                                    end={260}
                                    duration={3}
                                    decimals={2} 
                                />
                            </span>
                            <p>Hard Workers</p>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Counter;