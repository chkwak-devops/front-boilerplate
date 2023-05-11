import { useEffect, useState, useRef, useMemo, useCallback, forwardRef } from "react";

import {
  Icon,
} from "semantic-ui-react";


const BubbleChartPage = () => {
  useEffect(() => {
  }, []);

  return (
    <>
      <div
        style={{
          width: "100%",
          // border: "1px dashed grey",
        }}
      >

        <div
          style={{
            fontSize: 20,
            paddingBottom: 10,
            width: "100%",
            fontWeight: "bold",
            // border: "1px dashed grey",
          }}
        >
          <Icon name="angle right" />
          메인 대시보드
        </div>


        <div
          style={{
            width: "100%",
            height: 800,
            borderWidth: 1,
            borderStyle: "dashed",
            textAlign: "center",

          }}
        >

          <div
            style={{
              margin: 50,
              padding: "50px 50px 50px 50px",
              width: "200px",
              height: "200px",
              borderWidth: 1,
              textAlign: "center",
              borderStyle: "dashed",
              color: "darkgray"
            }}
          >
            메뉴 1
          </div>


        </div>
      </div>
    </>
  );
};

export default BubbleChartPage;




BubbleChartPage.getInitialProps = async (ctx) => {
  const pathname = ctx.pathname;

  return { pathname };
};
