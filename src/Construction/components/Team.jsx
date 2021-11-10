import React, { Fragment } from 'react';
import Steam from './Style/STeam';
import Team1 from './Image/Team/team-1.jpg';
import Team2 from './Image/Team/team-2.jpg';
import Team3 from './Image/Team/team-3.jpg';

class started extends React.Component {
    render() {
        return (
            <Fragment>
                < Steam />

                <section id="team" className="team">
                    <div className="container">

                        <header className="h-Team">
                            <p className="h-T">OUR TEAM</p>
                        </header>

                        <div className="row">
                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                                <div className="member">
                                    <img src={Team1} alt="" />
                                    <h4>Walter White</h4>
                                    <span>Chief Executive Officer</span>
                                    <p>
                                        Magni qui quod omnis unde et eos fuga et exercitationem. Odio veritatis perspiciatis quaerat qui aut aut aut
                                    </p>
                                    <div className="social">
                                        <a href="/"><i className="bi bi-twitter"></i></a>
                                        <a href="/"><i className="bi bi-facebook"></i></a>
                                        <a href="/"><i className="bi bi-instagram"></i></a>
                                        <a href="/"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                                <div className="member">
                                    <img src={Team2} alt="" />
                                    <h4>Sarah Jhinson</h4>
                                    <span>Product Manager</span>
                                    <p>
                                        Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus. In architecto rerum rerum temporibus
                                    </p>
                                    <div className="social">
                                        <a href="/"><i className="bi bi-twitter"></i></a>
                                        <a href="/"><i className="bi bi-facebook"></i></a>
                                        <a href="/"><i className="bi bi-instagram"></i></a>
                                        <a href="/"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in">
                                <div className="member">
                                    <img src={Team3} alt="" />
                                    <h4>William Anderson</h4>
                                    <span>CTO</span>
                                    <p>
                                        Voluptas necessitatibus occaecati quia. Earum totam consequuntur qui porro et laborum toro des clara
                                    </p>
                                    <div className="social">
                                        <a href="/"><i className="bi bi-twitter"></i></a>
                                        <a href="/"><i className="bi bi-facebook"></i></a>
                                        <a href="/"><i className="bi bi-instagram"></i></a>
                                        <a href="/"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>

            </Fragment>
        )
    }
}
export default started;
