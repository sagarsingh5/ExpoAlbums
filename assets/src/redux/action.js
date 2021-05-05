// import axios from "axios";

// // import { BASE_URL } from '../config';

// // Define action types
// export const GET_ALBUMS = "GET_ALBUMS";
// export const CURRENT_ALBUM = "CURRENT_ALBUM";
// export const CURRENT_MUSIC = " CURRENT_MUSIC";

// // Define action creators

// export const getAlbum = () => {
//   try {
//     return async (dispatch) => {
//       const response = await axios.get(
//         "https://accounts.spotify.com/api/token",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/x-www-form-urlencoded",
//             Authorization: "Basic" + btoa(clientId + ":" + clientSecret),
//           },
//         }
//       );
//       console.log("DATA ========>", response.data);
//       if (response.data) {
//         dispatch({
//           type: GET_ALBUMS,
//           payload: response.data,
//         });
//       } else {
//         console.log("Unable to fetch data from the API BASE URL!");
//       }
//     };
//   } catch (error) {
//     // Add custom logic to handle errors
//     console.log(error);
//   }
// };

// export const currentAlbum = (album) => (dispatch) => {
//   dispatch({
//     type: CURRENT_ALBUM,
//     payload: album,
//   });
// };

// export const currentMusic = (music) => (dispatch) => {
//   dispatch({
//     type: CURRENT_MUSIC,
//     payload: music,
//   });
// };
