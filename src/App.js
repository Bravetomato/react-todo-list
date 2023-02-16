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
          <div className="flex-1"></div>
          <span className="font-bold select-none">할일 체크하기</span>
          <div className="flex-1 flex justify-end">
            {location.pathname == "/main" && (
              <NavLink to="/write" className="select-none">
                할일 작성
              </NavLink>
            )}
            {location.pathname != "/main" && (
              <NavLink to="/main" className="select-none">
                {/* 수정 중 목록 버튼 클릭시 이전 페이지 */}
                <span
                to="/main"
                className="select-none"
                onClick={() => navigate(-1)}
              >목록</span>
              </NavLink>
            )}
          </div>
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