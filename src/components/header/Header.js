import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import SearchIcon from '@material-ui/icons/Search';
import './header.css';

const Header = ({ handleOpen, search, setSearch }) => {
  return (
    <>
      <div className="my-unsplash-logo">
        <div className="my-unsplash-logo-top" />
        <div className="my-unsplash-logo-bottom" />
        <div className="my-unsplash-logo-font">My Unsplash</div>
        <div className="my-unsplash-logo-tagline">devchallenges.io</div>
      </div>
      <div className="search-input-container">
        <TextField
          className="search-input"
          variant="outlined"
          placeholder="Search by Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="button-container">
        <Button
          onClick={handleOpen}
          variant="contained"
          className="add-button"
          color="primary"
          style={{ borderRadius: 12, textTransform: 'none', fontSize: 16 }}
        >
          Add a Photo
        </Button>
      </div>
    </>
  );
};

export default Header;
