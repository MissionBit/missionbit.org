import * as React from "react";
import oneLine from "src/oneLine";

const IEWarning: React.FC<{}> = () => {
  const disableIE = oneLine`
    (function(){
      if (!/MSIE |Trident[/]/.test(window.navigator.userAgent)) {
        return;
      }
      window.addEventListener("DOMContentLoaded", function () {
        Array.prototype.slice.call(document.querySelectorAll("script[async][src^='/_next/static/']")).forEach(function (el) {
          el.type = "text/x-disabled-javascript";
        });
      });
      document.getElementById("msieDetected").style.display = "block";
    })();
  `;
  return (
    <>
      <div
        id="msieDetected"
        style={{
          display: "none",
          width: "100%",
          padding: "2rem",
          textAlign: "center",
          border: "2px solid red",
          fontSize: "1rem",
        }}
      >
        Internet Explorer has been discontinued and is not supported on this
        website.
        <br />
        Please use a modern browser such as{" "}
        <a
          href="https://www.mozilla.org/firefox/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mozilla Firefox
        </a>
        ,{" "}
        <a
          href="https://www.microsoft.com/edge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Microsoft Edge
        </a>
        , or{" "}
        <a
          href="https://www.google.com/chrome/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Chrome
        </a>
        .
      </div>
      <script dangerouslySetInnerHTML={{ __html: disableIE }} />
    </>
  );
};

export default IEWarning;
