import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import PhotoCamera from "@material-ui/icons/PhotoCamera";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { EditorState } from "draft-js";
import {
  Grid,
  Container,
  makeStyles,
  Paper,
  TextField,
  Icon,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(3),
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  input: {
    display: "none",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export default function WriteBlogFunction() {
  const classes = useStyles();
  const [body, setEditorState] = useState();
  const [Title, setTitle] = useState();
  const [Image, setImage] = useState();
  const [Category, setCategory] = useState();
  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };

  const onTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const onCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const formList = [
    {
      Name: "Title",
      placeHolder: "Enter Blog Title",
      wysiwyg: false,
      onChange: onTitleChange,
    },
    {
      Name: "Image",
      placeHolder: "Upload Image",
      wysiwyg: false,
      image: true,
    },
    {
      Name: "Category",
      placeHolder: "Enter Blog Category",
      wysiwyg: false,
      onChange: onCategoryChange,
    },
    {
      Name: "body",
      placeHolder: "...Write something",
      wysiwyg: true,
    },
  ];
  return (
    <Container className={classes.root}>
      <Grid container justify="space-between" md={12} xs={12} spacing={2}>
        {formList.map((item, value) =>
          item.wysiwyg ? (
            <Editor
              editorState={body}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
            />
          ) : item.image ? (
            <div className="form-group">
              <div className="row">
                <div className="col-6">
                  {" "}
                  <p>Upload Blog image</p>
                </div>
                <div className="col-6">
                  {" "}
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-file"
                    type="file"
                  />
                  <label htmlFor="icon-button-file">
                    <IconButton
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                    >
                      <PhotoCamera />
                    </IconButton>
                  </label>
                </div>
              </div>
            </div>
          ) : (
            <Grid key={value} item>
              <TextField
                className="w-100"
                size="medium"
                id="outlined-basic"
                label={item.placeHolder}
                variant="outlined"
                onChange={item.onChange}
              />
            </Grid>
          )
        )}
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            className={classes.button}
          >
            Delete
          </Button>
          {/* This Button uses a Font Icon, see the installation instructions in the Icon component docs. */}
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Upload
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
