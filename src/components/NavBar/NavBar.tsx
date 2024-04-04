import styled, { createGlobalStyle, css } from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: fit-content;
  background-color: #16697A;
  color: #fff;
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`;

const NavLink = styled.a`
  color: #EDE7E3;
  position: relative;
  text-decoration: none;
  cursor: pointer;
  font-size: 20px;

  &:before {
    content: "";
    position: absolute;
    bottom: -1px;
    right: 0;
    display: block;
    width: 100%;
    height: 2px;
    background: #EDE7E3;
    transform: scaleX(0);

    transition: transform 0.2s ease-in-out;
  }

  &:hover:before {
    transform: scaleX(1);
  }
`;

export const NavBar: React.FC = () => {
  return (
    <Wrapper>
      <NavLink>Home</NavLink>
      <NavLink>Sobre</NavLink>
      <NavLink>Projetos</NavLink>
      <NavLink>Contatos</NavLink>
    </Wrapper>
  );
};
