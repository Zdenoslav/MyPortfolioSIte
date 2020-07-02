import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';

class Resume extends Component {

    render() {
        return(
            <Grid>
            <Cell col={4}>
                <div style={{textAlign: 'center'}}>
                    <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                        alt="avatar"
                        style={{height: '200px'}}
                    />
                </div>
                <h2 style={{ paddingTop: '2em' }}>Zdenko Mucina</h2>
                <h4 style={{ color: 'grey'}}> Programmer </h4>
                <hr style={{borderTop: '3px solid #833fb2', width: '50px' }}/>
                <p>I am a self-taught developer with passion for anything technical. I am a real badass.</p>
                <hr style={{borderTop: '3px solid #833fb2', width: '50px'}} />
                <h5>Address</h5>
                <p>Splott Road 111</p>
                <h5>Phone</h5>
                <p>(123)-198 91891</p>
                <h5>Email</h5>
                <p>zdenoslav@gmail.com</p>
                <h5>wwww.zdenko-mucina.com</h5>
                <hr style={{borderTop: '3px solid #833fb2', width: '50px'}} />

            </Cell>
            <Cell className="resume-right-col" col={8}>
                <h2>Education</h2>
            <Education
                startYear={2012}
                endYear={2015}
                schoolName="MyUniversity"
                schoolDescription="Lorem jkjk jkjk k"
            />
            <Education
                startYear={2012}
                endYear={2015}
                schoolName="My 2nd University"
                schoolDescription="Lorem jkjk jkjk k"
            />
        <hr style={{borderTop: '3px solid #e22947'}} />
        <h2> Experience </h2>

        <Experience
            startYear={2012}
            endYear={2015}
            jobName="My 2nd University"
            jobDescription="Lorem jkjk jkjk k"
        />
        <Experience
            startYear={2014}
            endYear={2018}
            jobName="My 2nd University"
            jobDescription="Lorem jkjk jkjk k"
        />

        <hr style={{borderTop: '3px solid #e22947'}} />




            </Cell>
            </Grid>
        )
    }
}

export default Resume;
