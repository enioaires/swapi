import React, {useState, useEffect} from 'react';
import 'reactjs-popup/dist/index.css'

import { Container, Content, Input, Button, Swapi } from './styles';
import Starships from '../../components/Starships.jsx'

const  Dashboard = () => {

  const [starships, setStarships] = useState([]);

    useEffect(() => {
        async function fetchStarships() {
            let res = await fetch('https://swapi.dev/api/starships/')
            let data = await res.json()
            setStarships(data.results)
        }

        fetchStarships()
    }, [])

  const [num, setNum] = useState('')
  console.log('starships', starships);

  let days;
  let res;
  let values = new Array()
  let names = new Array()
  starships.forEach(e => {
    let totalDays = (num/e.MGLT)/24;
    const value = e.consumables.split(' ');
    names.push(e.name)

    if(value[1] === 'year' || value[1] === 'years')
    {
      days = value[0]*365
      res = totalDays/days
    }

    if(value[1] === 'month' || value[1] === 'months')
    {
      days = value[0]*30
      res = totalDays/days

    }

    if(value[1] === 'week' || value[1] === 'weeks')
    {
      days = value[0]*7
      res = totalDays/days

    }
    
    if(value[1] === 'day' || value[1] === 'days')
    {
      days = value[0]
      res = totalDays/days

    }
    console.log('res', res);
    values.push(res)

 });

 function MGLT() {
  localStorage.setItem('res', JSON.stringify(values))
}
  MGLT();

  function Names() {
    localStorage.setItem('names', JSON.stringify(names))
  }
  Names();

  return (
    <Container>
        <Content>
          <h1>SWAPI</h1>
          Test nata.house by Enio Aires
          <Input>
            <input 
            onChange={event => setNum(event.target.value)} 
            type='number' 
            placeholder='Input distance in mega lights (MGLT)'
            />
          </Input>
           <Starships />
        </Content>
    </Container>
  )
}


export default Dashboard;
