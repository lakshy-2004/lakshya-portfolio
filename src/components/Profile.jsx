import React, { Component } from "react";
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const profiles = [
  {
    imgSrc: '/images/portfolio.png',
    title: 'Portfolio',
    tags: ['Development', 'Portfolio'],
    projectLink: 'http://localhost:5173/'
  },
  {
    imgSrc: '/images/drum-kit.png',
    title: 'Drum Kit',
    tags: ['Development', 'Game'],
    projectLink: 'https://lakshy-2004.github.io/Drum-Kit/'
  },
  {
    imgSrc: '/images/simon-game.png',
    title: 'Simon Game',
    tags: ['Development', 'Game'],
    projectLink: 'https://lakshy-2004.github.io/Simon-Game/'
  },
];

function CenterMode() {
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "100px",
    slidesToShow: 3,
    speed: 1500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="slider-container reveal-up">
      <Slider {...settings}>

        <div className={"slide-div p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors "}>

          <a href="https://codeforces.com/profile/lakshya_2004" target="_blank">
            <figure className="img-box aspect-square rounded-lg mb-4">
              <img
                src=".\images\codeforces.png"
                alt="Codeforces"
                loading='lazy'
                className="img-cover"
              />
            </figure>
          </a>

          <div className="flex items-center justify-between gap-4 pl-3">

            <div>
              <h3 className="title-1 mb-3">
                Codeforces
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                >
                  lakshya_2004
                </span>
              </div>
            </div>

          </div>

        </div>

        <div className={"slide-div p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors "}>

        <a href="https://www.codechef.com/users/lakshya_2004" target="_blank">
        <figure className="img-box aspect-square rounded-lg mb-4">
            <img
              src=".\images\codechef.webp"
              alt="CodeChef"
              loading='lazy'
              className="img-cover"
            />
          </figure>
            </a>

          <div className="flex items-center justify-between gap-4 pl-3">

            <div>
              <h3 className="title-1 mb-3">
                CodeChef
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                >
                  lakshya_2004
                </span>
              </div>
            </div>

          </div>

        </div>

        <div className={"slide-div p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors "}>

        <a href="https://leetcode.com/u/lakshya-sharma/" target="_blank">
        <figure className="img-box aspect-square rounded-lg mb-4">
            <img
              src=".\images\leetcode.png"
              alt="LeetCode"
              loading='lazy'
              className="img-cover"
            />
          </figure>
            </a>

          <div className="flex items-center justify-between gap-4 pl-3">

            <div>
              <h3 className="title-1 mb-3">
                LeetCode
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                >
                  lakshya_2004
                </span>
              </div>
            </div>

          </div>

        </div>
        <div className={"slide-div p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors "}>

        <a href="https://www.geeksforgeeks.org/user/lakshya9233w/" target="_blank">
        <figure className="img-box aspect-square rounded-lg mb-4">
            <img
              src=".\images\gfg.png"
              alt="GfG"
              loading='lazy'
              className="img-cover"
            />
          </figure>
            </a>

          <div className="flex items-center justify-between gap-4 pl-3">

            <div>
              <h3 className="title-1 mb-3">
                GeeksforGeeks
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                >
                  lakshya9233w
                </span>
              </div>
            </div>

          </div>

        </div>
        <div className={"slide-div p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors "}>

        <a href="https://github.com/lakshy-2004" target="_blank">
        <figure className="img-box aspect-square rounded-lg mb-4">
            <img
              src=".\images\github.png"
              alt="GitHub"
              loading='lazy'
              className="img-cover"
            />
          </figure>
            </a>

          <div className="flex items-center justify-between gap-4 pl-3">

            <div>
              <h3 className="title-1 mb-3">
                GitHub
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="h-8 text-sm text-zinc-400 bg-zinc-50/5 grid items-center px-3 rounded-lg"
                >
                  lakshy-2004
                </span>
              </div>
            </div>

          </div>

        </div>

      </Slider>
    </div>
  );
}

export default CenterMode;
