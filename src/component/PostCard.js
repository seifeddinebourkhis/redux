import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { useDispatch } from "react-redux";
import { deletePost } from "../JS/action/post";
import { isDonePost } from "../JS/action/post";
import Modal from "@material-ui/core/Modal";
import Form from "./Form";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import "./PostCard.css";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  button: {
    margin: theme.spacing(1),
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  margin: {
    margin: theme.spacing.unit,
  },
}));

export default function PostCard({ post }) {
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDoneChange = () => {
    dispatch(isDonePost(post.id));
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <p id="simple-modal-description">
        <Form handleClose={handleClose} post={post} />
      </p>
    </div>
  );

  return (
    <div className="card">
      <Card className={classes.root} style={{ marginBottom: 50 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="posts background"
            height="140"
            image="/todo.jpeg"
            title="posts"
          />
          <CardContent className={post.isDone ? "done" : "undone"}>
            <Typography gutterBottom variant="h5" component="h2">
              {post.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {post.content}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions
          style={{ display: "flex", justifyContent: "space-evenly" }}
        >
          <Button
            onClick={() => dispatch(deletePost(post.id))}
            startIcon={<DeleteIcon color="secondary" />}
          >
            Delete
          </Button>
          <Button
            onClick={handleOpen}
            startIcon={<EditIcon color="secondary" />}
          >
            Edit
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
          >
            {body}
          </Modal>
          <FormControlLabel
            control={
              <Checkbox
                checked={post.isDone}
                onChange={handleDoneChange}
                name="checked"
              />
            }
            label="Done"
          />
        </CardActions>
      </Card>
    </div>
  );
}