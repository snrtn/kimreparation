import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. 전체 창 스크롤 올리기
    window.scrollTo(0, 0);

    // 2. 사장님 레이아웃 특성상 main 박스가 범인일 확률 99%
    // main 태그로 된 놈을 찾아서 강제로 스크롤을 0으로 만듭니다.
    const mainElement = document.querySelector("main");
    if (mainElement) {
      mainElement.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
