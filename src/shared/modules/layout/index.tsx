import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { Container, MainContainer } from './styles';

//add header and footer later
const Layout: FC = () => {
  return (
    <Container>
      {/* <header></header> */}
      <MainContainer>
        <Outlet />
      </MainContainer>
      {/* <footer></footer> */}
    </Container>
  );
};

export default Layout;
