import { Button } from "@mui/material";
import { NavLink, } from "react-router-dom";

export default function TodosEmpty() {
    return(
    <>
        <div className="flex-1 flex justify-center items-center">
            <div className="grid gap-2">
                <span>
                    <span className="text-[color:var(--mui-color-primary-main)]">
                        할일
                    </span> 을 입력해주세요.</span>
                {/* Button에 write 컴포넌트 주소 첨부해서 button 클릭하면 거기로 이동 */}
                <Button variant="contained" to="/Write" component={NavLink}>
                    할 일 추가하기</Button>
            </div>
        </div>
    </>
 );
}