'use client'
import styled from 'styled-components';
import './globals.css'
import Appbar from '@/components/AppBar';

export default function Home() {
  return (
    <HomeWrapper>
    <Appbar />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0D1117;
  font-family: 'Roboto', sans-serif;
`