import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SaveIcon from "@material-ui/icons/Save";
import { useDispatch } from "react-redux";
import { editPost } from "../JS/action/post";

export default function Form({ post, handleClose }) {
  const dispatch = useDispatch();
  const [inputTitle, setInputTitle] = useState(post.title);
  const [inputContent, setInputContent] = useState(post.content);
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Edit the post
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <TextField
            label="Title"
            fullWidth
            autoComplete="Title"
            onChange={(e) => setInputTitle(e.target.value)}
            value={inputTitle}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Content"
            fullWidth
            autoComplete="Content"
            onChange={(e) => setInputContent(e.target.value)}
            value={inputContent}
          />
        </Grid>
        <Grid
          item
          xs={12}
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            startIcon={<SaveIcon />}
            onClick={() => {
              dispatch(editPost(post.id, inputTitle, inputContent));
              handleClose();
              // setInputTitle("");
              // setInputContent("");
            }}
          >
            Save
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}