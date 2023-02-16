import { AppBar, Toolbar } from "@mui/material";
import {
  Routes,
  Route,
  Navigate,
  useLocation,
  NavLink,
  useNavigate,
} from "react-router-dom";

import MainPage from "./pages/MainPage";
import WritePage from "./pages/WritePage";
import EditPage from "./pages/EditPage";

import { NoticeSnackbar } from "./components/NoticeSnackbar";

function App() {
  // 수정 중 목록 버튼 클릭시 이전 페이지
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          {/* 할일 관리하기 클릭시 메인페이지로 돌아가기 */}
          <NavLink to="/main" className="font-bold select-none self-stretch flex items-center mr-auto">할일 관리하기</NavLink>
            {location.pathname == "/main" && (
              <NavLink to="/write" className="select-none self-stretch flex items-center">
                할일 작성
              </NavLink>
            )}
            {location.pathname != "/main" && (
              <NavLink to="/main" className="select-none self-stretch flex items-center cursor-pointer">
                {/* 수정 중 목록 버튼 클릭시 이전 페이지 */}
                <span
                to="/main"
                className="select-none"
                onClick={() => navigate(-1)}
              >목록</span>
              </NavLink>
            )}
          
        </Toolbar>
      </AppBar>
      <NoticeSnackbar />
      <Routes>
        <Route path="/main" element={<MainPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/edit/:id" element={<EditPage />} />
        <Route path="*" element={<Navigate to="/main" />} />
      </Routes>
    </>
  );
}

export default App;