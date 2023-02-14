import { TextField, Button } from "@mui/material";
import { useTodosStatus } from "../hooks";


// TextField 사용해서 할일 작성하기 
// type="datetime-local" : 연도, 월, 일, 시간 작성가능.
export default function WritePage() {
  const todosStatus = useTodosStatus();
  const onSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    if(form.regDate.value.length == 0) {
      alert("날짜를 작성해주세요");
      form.regDate.focus();

      return;
    }

    if(form.regDate.value.length == 0) {
      alert("할일을 작성해주세요");
      form.regDate.focus();

      return;
    }

    todosStatus.addTodo(form.regDate.value, form.content.value);
  };

    return (
      <>
        <form className="flex-1 flex p-10 flex-col gap-7" ionSubmit={onSubmit}>
                <TextField label="날짜" type="datetime-local" name="regDate"/>
                <TextField label="할일" className="flex-1 flex" 
                InputProps={{ className : "flex-1 flex-col"}} 
                inputProps={{ className : "flex-1 flex"}} 
                multiline/>
                <Button type="submit" variant="outlined">
                  <span>
                  <i className="fa-solid fa-pen-to-square"></i>
                    할일 추가
                  </span>
                </Button>
        </form>
      </>
    );
  }
