import "@/styles/globals.css";
import "semantic-ui-css/semantic.min.css";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

import Top from "/src/components/Top";
import Footer from "/src/components/Footer";
import SideMenu from "/src/components/SideMenu";
import "@/styles/layout.css";
import "@/styles/styles.css";
import "../styles/custom.css";
// import "../styles/styles.css";

function App({ Component, pageProps }) {


  return pageProps && (pageProps.pathname === "/" || pageProps.pathname === "/login") ? (
    <div style={{ width: "100%", margin: "0 auto" }}>
      <Component {...pageProps} />
    </div>
  ) : (
    <>

      <div className="parent">
        <div className="topLayer">
          <Top />
        </div>
        <div className="main">
          <div className="sideMenuLayer">
            <SideMenu />
          </div>
          <div className="bodyLayer content">
            <Component {...pageProps} />
          </div>
        </div>
        <div className="footerLayer">
          <Footer />
        </div>
      </div>
    </>
  );
}


App.getInitialProps = async (context) => {
  const { ctx, Component } = context;
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = (await Component.getInitialProps(ctx)) || {};

    return { pageProps };
  }
};

export default App;
