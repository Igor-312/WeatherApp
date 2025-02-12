import styled from "@emotion/styled"
import { NavLink, Link } from "react-router-dom"
import backgroundImage from '../../assets/img.jpg'

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: url(${backgroundImage}); 
  background-size: cover; 
  background-position: center;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: fit-content;
  background:
    linear-gradient(0deg, rgba(18, 45, 77, 0.5), rgba(18, 45, 77, 0.5)),
    linear-gradient(0deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1));
  border-bottom: 1px solid rgba(210, 210, 210, 1);
  color: white;
`

export const HeaderLogoContainer = styled.div`
  text-decoration: none;
  font-size: 20px;
  color: white;
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 10px;
`

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 20px;
`

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
`
