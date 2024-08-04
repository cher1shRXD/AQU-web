import { Route, Routes } from "react-router-dom"
import Main from "../../pages/main";
import Login from "../../pages/login";
import Signup from "../../pages/signup";
import Post from "../../pages/post";
import NotFound from "../../pages/notFound";

const Router = () => {

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/post/:id" element={<Post />} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
  );
}

export default Router