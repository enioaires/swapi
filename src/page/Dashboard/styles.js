import styled from 'styled-components';
import swbg from '../../assets/swbg.png';
import { shade } from 'polished'

export const Container = styled.div`
  height: 100%;
  display: flex;
  background: url(${swbg}) no-repeat center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1{
    margin-top: 55px;
    font-size: 80px;
  }

`
export const Input = styled.div`
  background: transparent;
  border-radius: 10px;
  border: 2px solid #232129;
  padding: 16px;
  width: 50%;

  display: flex;
  align-items: center;

  color: #F9F909;
  margin-top: 125px;
  margin-bottom: 50px;

  input{
    flex: 1;
    background: transparent;
    border: 0;
    color: #F9F909;
  }


`
export const Swapi = styled.div`
  flex:1;
  height: fit-content;
  width: fit-content;
  background: #fff;
`


