import React, { Component } from 'react';
import download from '../images/download.jpeg';
import clg from '../images/clg.png'
class Portfolio extends Component {
  render() {

    if (this.props.data) {
      var projects = this.props.data.projects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image;
        return <div key={projects.title} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} title={projects.title}>
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5>{projects.title}</h5>
                  <p>{projects.category}</p>
                </div>
              </div>
              <div className="link-icon"><i className="fa fa-link"></i></div>
            </a>
          </div>
        </div>
      })
    }

    return (
      <section id="portfolio">

        <div className="row">

          <div className="twelve columns collapsed">

            <h1>Check Out Some of My Works.</h1>

            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">



              <div class="container">
                <div class="text-center">

                  {/* <img url=" https://github.com/nitheshurao/Profilss1/blob/97c7e9387e39d882b689ddb1c3e5242e88229e80/src%2FComponents%2FPortfolio.js" class="img-lines" alt="lines" /> */}
                </div>
                <a>
<button>  <a>Govt pu college website</a> <div class="row">
                    <div class="col-md-2 col-xs-3">
                      <div class="portfolio-item">
                        <img src={clg}class="img-res" alt="" />
                        <div class="portfolio-item-info">
                          <h4>collage website using html &js</h4>
                          <a href="#" data-toggle="modal" data-target="#portfolioItem1"><span
                            class="glyphicon glyphicon-eye-open"></span></a>
                          <a href="#"><span class="glyphicon glyphicon-link"></span></a>
                        </div>
                      </div>
                    </div>
                  </div></button>
                 

                

                </a>


              </div>

            </div>

          </div>




        </div>





      </section>
    );
  }
}

export default Portfolio;
