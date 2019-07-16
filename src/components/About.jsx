import React from 'react'
import { Container, Grid, Typography } from '@material-ui/core'

export default function About() {
    return (
        <Container id='aboutSection' style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: 150
        }}>
            <h1 style={{ fontFamily: 'Raleway', width: '100%' }}>About</h1>
            <h1 className="hr" >{}</h1>
            <Container style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
            }}>
                <Grid item xs={12}>
                    <Typography>
                    Mission-driven full stack developer with a passion for thoughtful UI design, collaboration, and learning. I’ve always sought out opportunities and challenges that are meaningful to me. Although my professional path has taken many twists and turns, from being a musician and audio engineer to being a Software Quality Assurance analyst at a Software company, to being a Software developer and entrepreneur. I've never stopped engaging my passion to help others and solve problems. As a Full Stack developer, I enjoy using my attention to detail, my undeniable love for making things, and my work ethic to literally change the world. That's why I’m excited to make a big impact at a high growth company.
                </Typography>
                </Grid>
                <Grid item xs={12}>
                    <div>
                        <img style={{ width: 300, height: 400 }} src="images/Sammy.JPG" alt="Sammy" />
                    </div>
                </Grid>
            </Container>
        </Container>
    )
}