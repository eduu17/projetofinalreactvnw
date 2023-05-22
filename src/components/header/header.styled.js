import styled from "styled-components";
import Bg from "../images/bg.png";
import { RxMagnifyingGlass } from "react-icons/rx";
import { SiImdb } from "react-icons/si";
import { FiPlay } from "react-icons/fi";
import { TbMovie } from "react-icons/tb";

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  height: 600px;
  background: url(${Bg}) no-repeat center/cover;
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.2);
`;

export const Options = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Listitem = styled.li`
  a {
    color: #fff;
    font-size: 1rem;
    font-weight: 400;
    padding: 10px 20px;
  }
  a:hover {
    background-color: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    border-radius: 50px;
    color: #000;
  }
`;

export const Banner = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50%;
  background-color: rgba(0, 0, 0, 0);
  margin-top: auto;
  margin-bottom: 50px;
  margin-left: 100px;
  h1 {
    font-size: 1.6875rem;
    font-weight: 800;
  }
  h2 {
    font-size: 0.625rem;
    font-weight: 200;
  }
`;

export const Bannercontent = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  h2 {
    font-size: 1.3125rem;
    font-weight: 400;
  }
  span {
    font-size: 0.625rem;
    font-weight: 200;
  }
  p {
    font-size: 0.875rem;
    font-weight: 200;
  }
`;

export const BannerButton = styled.div`
  display: flex;
  gap: 20px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 10px 20px;
    background-color: #d53a00;
    color: #fff;
    border-radius: 20px;
    font-size: 0.875rem;
    font-weight: 600;
  }
  a:last-of-type {
    background-color: #717171;
  }
`;

export const StyledIcon = styled(RxMagnifyingGlass)`
  width: 25px;
  height: 25px;
  cursor: pointer;
  color: #fff;
`;

export const StyledIMDB = styled(SiImdb)`
  width: 25px;
  height: 25px;
  color: #fff;
`;

export const StylePlay = styled(FiPlay)`
  width: 25px;
  height: 25px;
  color: #fff;
`;

export const StyleFilm = styled(TbMovie)`
  width: 25px;
  height: 25px;
  color: #fff;
`;
