import { createGlobalStyle } from "styled-components";
import Mainpage from "./routes/Mainpage";
import { Helmet, HelmetProvider } from "react-helmet-async";
import favicon from "./image/favicon.png";

const GlobalStyle = createGlobalStyle`
  html{
    background-color: #6d7fa5;
  }
  body, h1, ul{
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }
  * {
  font-family: 'Roboto', sans-serif;
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Mainpage />
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="hackweb" />
          <meta
            name="description"
            content={`2022 CMC Hackerton Web 7 team project. `}
          />
          <title>schedule</title>
          <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        </Helmet>
      </HelmetProvider>
    </>
  );
}

export default App;
