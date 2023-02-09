import { AppBar, Toolbar } from "@mui/material";
import { Routes, Route, Navigate, useLocation, NavLink, } from "react-router-dom";
import MainPage from "./pages/MainPage";
import WritePage from "./pages/WritePage";
import NoticeSnackbar from "./components/NoticeSnackbar";

function App() {
  const location = useLocation();
  return (
    <>
      <AppBar position="static">
        <Toolbar className="justify-center">
          <div className="flex-1"></div>
          <span className="font-bold select-none">Todo List</span>
          <div className="flex-1 flex justify-end"></div>
           {/* 주소가 main일때 즉 sub1이 아니면 서브1 버튼이 뜬다 */}
           {location.pathname != "/write" && 
            <NavLink to="/write" className="select-none">작성</NavLink>
           }
           {/* 주소가 sub1일때 즉 main이 아니면 이전 버튼이 뜬다 */}
           {location.pathname == "/write" && 
            <NavLink to="/main" className="select-none">이전</NavLink>
           }
        </Toolbar>
      </AppBar>
      <NoticeSnackbar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </>
  );
}

export default App;
