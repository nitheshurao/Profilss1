import React, { Component } from 'react';
import download from '../images/download.jpeg';
import inst from '../images/inst.png'
import amz from '../images/amz.png'
import clg from '../images/clg.png'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';



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

      <div>
        <section id="portfolio" class="site-section section-portfolio">
          <h1>Check Out Some of My Works.</h1>

          <div class="container">
            <div class="text-center">

              {/* <img src="assets/img/lines.svg" class="img-lines" alt="lines"/> */}
            </div>
            <div class="row">
              {/* <Col xs lg="2">> */}

              <Grid container
                direction="row-reverse"
                justify="center"
                alignItems="center"
              >
                <Paper className="classes.paper"
                >
                  <div class="col-md-4">
                    <div class="portfolio-item">
                      <img src={clg} class="img-res" alt="" />
                      <div class="portfolio-item-info">
                        <h4>Govt college website </h4>
                        <a href="https://ritheshrao197.github.io/CollegeWebpage/" ><span
                          class="glyphicon glyphicon-eye-open"></span></a>

                      </div>
                    </div>
                  </div>
                </Paper>

                <Paper className="classes.paper"
                >
                  <div class="col-md-4">
                    <div class="portfolio-item">
                      <img src={inst} class="img-res" alt="" />
                      <div class="portfolio-item-info">
                        <h4>Instagram Clone</h4>

                        <a href="https://github.com/nitheshurao/insta_clone"><span class="glyphicon glyphicon-link"></span></a>
                      </div>
                    </div>
                  </div>
                </Paper>
                <Paper className="classes.paper">
                  <div class="col-md-4">
                    <div class="portfolio-item">
                      <img src={amz} class="img-res" alt="" />
                      <div class="portfolio-item-info">
                        <h4>Amezon clone</h4>
                        <a href="https://github.com/nitheshurao/amezon" data-toggle="modal" data-target="#portfolioItem1"><span
                          class="glyphicon glyphicon-eye-open"></span></a>

                      </div>
                    </div>
                  </div>
                </Paper>
                {/* <Paper className="classes.paper">
            <div class="col-md-4">
              <div class="portfolio-item">
                <img src="assets/img/portfolio-1.jpg" class="img-res" alt="" />
                <div class="portfolio-item-info">
                  <h4>Project Title</h4>
                  <a href="#" data-toggle="modal" data-target="#portfolioItem1"><span
                    class="glyphicon glyphicon-eye-open"></span></a>
                  <a href="#"><span class="glyphicon glyphicon-link"></span></a>
                </div>
              </div>
            </div>
            </Paper> */}
              </Grid>

              {/*           
          </Col>
             */}


            </div>
          </div>


        </section>


      </div>


    );
  }
}

export default Portfolio;
