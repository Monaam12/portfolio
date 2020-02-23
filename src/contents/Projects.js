import React from 'react'
import { Button, Card, CardText, CardTitle, CardActions, IconButton, CardMenu, Grid, Cell } from 'react-mdl';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

export default function Projects() {
  return (
    <div className="condiv project">
      <Grid className="demo-grid-4">
       <Cell col={4}>
      {/*Project1*/}
      <a href="https://github.com/Monaam12/weather-app" rel="noopener noreferrer" target="_blank">
            <Card shadow={0} style={{width: '250px', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(images/react.png) center / cover'}}>Weather-App</CardTitle>
              <CardText>
                API Current weather(ReactJS)
              </CardText>
              <CardActions border>
              <Button colored>
              <i className="fa fa-github-square" aria-hidden="true" /> Github
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
            </Card>
        </a>
        </Cell>
        <Cell>
          {/*Project2*/}
          <a href="https://github.com/Monaam12/video-chat" rel="noopener noreferrer" target="_blank">
              <Card shadow={0} style={{width: '250px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '176px', background: 'url(images/Laravel-react.png) center / cover'}}>Chat-Video</CardTitle>
                <CardText>
                Video Chat(Laravel & ReactJs)
                </CardText>
                <CardActions border>
                <Button colored>
                <i className="fa fa-github-square" aria-hidden="true" /> Github
                  </Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                    <IconButton name="share" />
                </CardMenu>
              </Card>
            </a>
        </Cell>
        <Cell>

            {/*Project3*/}
          <a href="https://github.com/Monaam12/portfolio" rel="noopener noreferrer" target="_blank">
            <Card shadow={0} style={{width: '250px', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(images/react.png) center / cover'}}>Protfolio</CardTitle>
              <CardText>
              my portfolio
              </CardText>
              <CardActions border>
              <Button colored>
              <i className="fa fa-github-square" aria-hidden="true" /> Github
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
            </Card>
          </a>
        </Cell>
        <Cell>

         {/*Project4*/}
         <a href="https://github.com/Monaam12/ACL-Laravel" rel="noopener noreferrer" target="_blank">
          <Card shadow={0} style={{width: '250px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(images/Laravel.jpg) center / cover'}}>Access Control Laravel</CardTitle>
            <CardText>
            Access Control
            </CardText>
            <CardActions border>
            <Button colored>
            <i className="fa fa-github-square" aria-hidden="true" /> Github
              </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
          </Card>
         </a>

        </Cell>
        <Cell>

          {/*Project5*/}

          <a href="https://github.com/Monaam12/recruiter-manager" rel="noopener noreferrer" target="_blank">
            <Card shadow={0} style={{width: '250px', margin: 'auto'}}>
              <CardTitle style={{color: '#fff', height: '176px', background: 'url(images/Laravel.jpg) center / cover'}}>Recruiter Manager</CardTitle>
              <CardText>
              Recruiter Manager
              </CardText>
              <CardActions border>
              <Button colored>
              <i className="fa fa-github-square" aria-hidden="true" /> Github
                </Button>
              </CardActions>
              <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
              </CardMenu>
            </Card>
          </a>
        </Cell>
        <Cell>

         {/*Project6*/}
        <a href="https://github.com/Monaam12/Ecommerce" rel="noopener noreferrer" target="_blank">
          <Card shadow={0} style={{width: '250px', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(images/Laravel.jpg) center / cover'}}>Ecommerce</CardTitle>
            <CardText>
            Ecommerce
            </CardText>
            <CardActions border>
            <Button colored>
            <i className="fa fa-github-square" aria-hidden="true" /> Github
              </Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
                <IconButton name="share" />
            </CardMenu>
          </Card>
         </a>

        </Cell>
      </Grid>
    </div>
  )
}

