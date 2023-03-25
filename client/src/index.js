import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import authReducer from "./state";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { persistStore, persistReducer, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, FLUSH } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

const persistConfig = { key: "root", storage, version: 1 };
const persistReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
   reducer: persistReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: {
            ignoreActions: [REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, FLUSH],
         },
      }),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
   <React.StrictMode>
      <Provider store={store}>
         <PersistGate loading={null} persistor={persistStore}>
            <App />
         </PersistGate>
      </Provider>
   </React.StrictMode>
);
