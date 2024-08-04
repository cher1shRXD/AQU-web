import { Route, Routes } from "react-router-dom"
import Main from "../../pages/main";
import Login from "../../pages/login";
import Signup from "../../pages/signup";
import Post from "../../pages/post";

const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/post/:id" element={<Post />} />
    </Routes>
  );
}

export default Router