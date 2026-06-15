import { BrowserRouter, Routes, Route } from "react-router-dom";
import RootLayout from "../src/layout/RootLayout.jsx";
import Main from "../src/pages/Main/Main.jsx";
import Subscribe from "../src/pages/Subscribe/Subscribe.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Main />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/add" element={<></>} />{" "}
          {/* 추후 element에 상품 등록 페이지 들어가야함 */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
