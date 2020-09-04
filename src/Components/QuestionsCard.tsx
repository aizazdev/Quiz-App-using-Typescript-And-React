import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {questionPropsType} from './../Types/QuizTypes';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {

    padding: theme.spacing(8),
    color: theme.palette.text.secondary,
    borderRadius: "10px",
    boxShadow: "1px 1px 10px 1px silver"
  },
}));

const QuestionCard:React.FC<questionPropsType> = ({option, question, callback})=> {
  const classes = useStyles();

  const[selectedAns, setSelectedAns] = useState("");

  const handleSelection = (e: any)=> {
    setSelectedAns(e.target.value);
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6} sm={3}>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
            {question}
            <br />
            <form onSubmit={(e: React.FormEvent<EventTarget>)=>callback(e, selectedAns)}>
                {
                    option.map( (opt:string, ind:number)=>{
                        return(
                            <div key={ind} className="radio-item">
                                <label>{opt}</label>
                                <input type="radio"
                                className="ritem"
                                required
                                value={opt} 
                                checked={selectedAns === opt}
                                name="answer"
                                onChange={handleSelection}
                                >

                                </input>
                            </div>
                            
                        )
                    } )
                }
                <button className="next-btn">Next</button>
            </form>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
        </Grid>
    </Grid>
    </div>
  );
}
export default QuestionCard;