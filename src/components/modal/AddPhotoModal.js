import React, { useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './modal.css';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 555,
    height: 325,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: 12,
    outline: 'none',
  },
}));

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const AddPhotoModal = ({
  open,
  handleClose,
  mutate,
  imgUrl,
  imgTag,
  setImgUrl,
  setImgTag,
}) => {
  const [modalStyle] = useState(getModalStyle);
  const classes = useStyles();

  const handleSubmit = () => {
    mutate({ imageUrl: imgUrl, imageTag: imgTag });
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
    >
      <div style={modalStyle} className={classes.paper}>
        <div className="modal-title">Add a new photo</div>
        <div className="label">Photo Label:</div>
        <div className="input-container">
          <TextField
            className="input"
            variant="outlined"
            value={imgTag}
            onChange={(e) => setImgTag(e.target.value)}
          />
        </div>
        <div className="label">Photo Url:</div>
        <div className="input-container">
          <TextField
            className="input"
            variant="outlined"
            value={imgUrl}
            onChange={(e) => setImgUrl(e.target.value)}
          />
        </div>
        <div className="modal-button-container">
          <Button
            onClick={handleSubmit}
            variant="contained"
            className="modal-add-button"
            color="primary"
            style={{ borderRadius: 12, textTransform: 'none', fontSize: 16 }}
          >
            Submit
          </Button>
          <Button
            onClick={handleClose}
            variant="outlined"
            className="modal-add-button"
            color="primary"
            style={{
              borderRadius: 12,
              textTransform: 'none',
              fontSize: 16,
              marginLeft: 20,
            }}
          >
            Cancel
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default AddPhotoModal;
