// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { persistStore, persistReducer } from "redux-persist";

// import musicReducer from "./reducer";

// const persistConfig = {
//   key: "root",
//   storage: AsyncStorage,
//   whitelist: ["music"],
// };
// const rootReducer = combineReducers({
//   booksReducer: persistReducer(persistConfig, musicReducer),
// });

// export const store = createStore(rootReducer, applyMiddleware(thunk));
// export const persistor = persistStore(store);
// // export const store = createStore(rootReducer, applyMiddleware(thunk));
