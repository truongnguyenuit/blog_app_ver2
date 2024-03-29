import React, { useContext, useEffect } from 'react'
import { Row, Col } from "antd";
import AboutComponent from '../components/AboutComponent';
import { BlogContext } from '../contexts/blogContext';
import PostComponent from '../components/PostComponent';
const HomePage = () => {
  const {
    blogState: { post, posts, allPosts, postsLoading },
    getBlogs
  } = useContext(BlogContext)

  if (postsLoading) {
    return (
      <div>
        loading...99%
      </div>
    )
  }

  return (
    <div className='bg-slate-100'>
      <div className='flex flex-col justify-end items-center relative h-[543px] bg-white drop-shadow-md'>
        <span className="text-[20px] font-serif absolute top-9">
          React & Node
        </span>
        <span className="text-[100px] text-stone-600 font-serif absolute top-7">
          BLOG
        </span>
        <div className="w-full h-[450px]">
          <img
            src="https://images.pexels.com/photos/1167355/pexels-photo-1167355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt=""
            className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="m-7">
        <Row>
          <Col span={16}>
            <div className="flex flex-wrap">
              {allPosts.map((item, index) => {
                return (
                  <PostComponent
                    key={index}
                    title={item.title}
                    adescription={item.description}
                    img={item.img}
                    user={item.user}
                    time={item.createAt}
                  />
                );
              })
              }

            </div>
          </Col>
          <Col span={8}>
            <AboutComponent />
          </Col>

        </Row>

      </div>
    </div>
  )
}

export default HomePage