'use client'
import styled from 'styled-components';
import './globals.css'
import Appbar from '@/components/AppBar';

export default function Home() {
  const btnAction = () => {
    alert('Button clicked')
  }

  return (
    <HomeWrapper>
    <Appbar />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0D1117;
  font-family: 'Roboto', sans-serif;
`