import  TextField  from '@mui/material/TextField';


// TextField 사용해서 할일 작성하기 
// type="datetime-local" : 연도, 월, 일, 시간 작성가능.
export default function WritePage() {
    return (
      <>
        <div className="flex-1 flex p-10 flex-col gap-7">
                <TextField label="when?" type="datetime-local"/>
                <TextField label="what?" className="flex-1 flex" 
                InputProps={{ className : "flex-1 flex-col"}} 
                inputProps={{ className : "flex-1 flex"}} />
        </div>
      </>
    );
  }
