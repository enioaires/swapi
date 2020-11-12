import React from 'react'
import { Container, Content, Grid } from './styles'

export default function Starships() {

    let stops = JSON.parse(localStorage.getItem('res'))
    let names = JSON.parse(localStorage.getItem('names'))

    
    return (
        <Container>
            <Content>
            {names.map((e,i) => {
                return( 
                <Grid>
                <strong>{e}</strong>
                <strong>{parseFloat(stops[i].toFixed(0))}</strong>
                </Grid>
                )
            })
            }
            </Content>
        </Container>
    )
}
