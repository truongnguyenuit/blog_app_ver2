import React from 'react'
import { Link } from "react-router-dom";
import { Row, Col } from "antd"
import { pathName } from '../router/pathName';

const NavigateRouter = [
  {
    path: pathName.home,
    name: "HOME",
  },
  {
    path: pathName.myBlog,
    name: "MYBLOG",
  },
  {
    path: pathName.search,
    name: "search"
  },
  {
    path: pathName.setting,
    name: "SETTING",
  },
  {
    path: pathName.createPost,
    name: "WRITE",
  },
  {
    path: pathName.logout,
    name: "LOGOUT",
  },
];

const NavbarComponent = () => {
  return (
    <div className="bg-white">
      <Row >

        <Col span={6} className="h-14">
          <div className="flex justify-center items-center text-[20px] gap-2 h-14">
            <i className="fa-brands fa-facebook-square cursor-pointer"></i>
            <i className="fa-brands fa-twitter-square cursor-pointer"></i>
            <i className="fa-brands fa-instagram-square cursor-pointer"></i>
            <i className="fa-brands fa-pinterest-square cursor-pointer"></i>
          </div>
        </Col>

        <Col span={12} className="h-14">
          <nav>
            <ul className="flex justify-center items-center text-[17px] gap-4 h-14">
              {NavigateRouter.map((item, index) => {
                return (
                  <li key={index}>
                    <Link to={item.path} className="text-stone-500 hover:text-stone-400">
                      {item.name}
                    </Link>
                  </li>
                );

              })}
            </ul>
          </nav>
        </Col>

        <Col span={6} className="h-14">
          <div className="flex justify-center items-center gap-2 h-14">
            <Link to={pathName.login}>
              Login
            </Link>
            <Link to={pathName.register}>
              Register
            </Link>
          </div>
        </Col>

      </Row>
    </div>
  )
}

export default NavbarComponent