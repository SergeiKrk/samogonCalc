import React from "react";

const YandexAds = () => {
  const yaDiv = document.createElement("div");
  yaDiv.setAttribute("R-A-1654628-2", "yandex_rtb_R-A-1654628-2");
  document.body.appendChild(yaDiv);

  const yaScript = document.createElement("script");
  yaScript.setAttribute("type", "text/javascript");
  yaScript.innerHTML = `window.yaContextCb.push(() => {
    Ya.Context.AdvManager.render({
      renderTo: 'yandex_rtb_R-A-1654628-2',
      blockId: 'R-A-1654628-2'
    })
  })}`;

  return <div id="yandex_rtb_R-A-1654628-2"></div>;
};

export default YandexAds;
