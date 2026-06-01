import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Footer from "../components/footer/Footer";

export default function RootLayout() {
  return (
    <Page>
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </Page>
  );
}

const Page = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Main = styled.main`
  flex: 1;
`;
