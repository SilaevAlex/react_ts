import { Routes, Route, Link } from "react-router-dom";
import { HomeFeature, PostFeature,Contacts } from "../../features";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeFeature />}></Route>
      <Route path="/contacts" element={<Contacts />}></Route>
      <Route path="/post/:postId" element={<PostFeature />}></Route>
    </Routes>
  );
};