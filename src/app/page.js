'use client'
import styled from 'styled-components';
import './globals.css'
import Button from "@/components/Button";

export default function Home() {
  const btnAction = () => {
    alert('Button clicked')
  }

  return (
    <HomeWrapper>
      <Button onClick={btnAction} type={"button"} disabled={false}>
        Click me
      </Button>
    </HomeWrapper>
  );
}

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0D1117;
  font-family: 'Roboto', sans-serif;
`