import axios from 'axios';

//cloud server
const apiUrl = 'https://ancient-brushlands-03812.herokuapp.com';

//localhost server (uncomment to use)
//const apiUrl = "https://localhost:4000"

export const fetchImages = async () => {
  const res = await axios.get(`${apiUrl}/images`);
  return res.data;
};

export const deleteImage = async (id) => {
  const res = await axios.delete(`${apiUrl}/images/${id}`);
  return res;
};

export const addImage = async (newImage) => {
  console.log('Add image fired');
  const res = await axios.post(`${apiUrl}/images`, newImage);
  console.log(res);
  return res;
};
