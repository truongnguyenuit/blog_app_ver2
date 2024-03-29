import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import CreateNewPostPage from "../pages/CreateNewPostPage";
import SettingPage from "../pages/SettingPage";
import LogoutPage from "../pages/LogoutPage";
import MyBlogPage from "../pages/MyBlogPage";
import SearchPage from "../pages/SearchPage";
import { pathName } from "./pathName";

export const configRouter=[
  {
    path: pathName.home,
    page: <HomePage/>,
    private: true,
  },
  {
    path: pathName.myBlog,
    page: <MyBlogPage/>,
    private: true,
  },
  {
    path: path.search
  }
  {
    path: pathName.login,
    page: <LoginPage/>,
    private: false,
  },
  {
    path: pathName.register,
    page: <RegisterPage/>,
    private: false,
  },
  {
    path: pathName.createPost,
    page: <CreateNewPostPage />,
    private: true,
  },
  {
    path: pathName.setting,
    page: <SettingPage />,
    private: true,
  },
  {
    path: pathName.logout,
    page: <LogoutPage/>,
    private: true,
  },
]