import styled from "styled-components";
const SideBar = () => {
  return (
    <>
      <SidebarWrapper className="sidebar">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Transaction</a>
          </li>
          <li>
            <a href="#">Contact Info</a>
          </li>
          <li>
            <a href="#" className="text-red-600">Sign out</a>
          </li>
        </ul>
      </SidebarWrapper>
    </>
  );
};

export default SideBar;

const SidebarWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 200px;
  height: 100%;
  background-color: white;
  box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.1);

  ul{
    :hover{
      background-color: gainsboro;
    }
    // click effect
    :active{
      background-color: lightgray;
    }
  }
  li{
    list-style: none;
    padding: 10px 15px;
    border-bottom: 1px solid #f0f0f0;
    text-align: center;
    background-color: lightgray;
    margin: 15px;
    font-weight: 500;
  }
`;
