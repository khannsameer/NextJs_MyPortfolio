import user_image from "./user-image.png";
import code_icon from "./code-icon.png";
import code_icon_dark from "./code-icon-dark.png";
import edu_icon from "./edu-icon.png";
import edu_icon_dark from "./edu-icon-dark.png";
import project_icon from "./project-icon.png";
import project_icon_dark from "./project-icon-dark.png";
import vscode from "./vscode.png";
import firebase from "./firebase.png";
import figma from "./figma.png";
import git from "./git.png";
import right_arrow_white from "./right-arrow-white.png";
import logo from "./logo.png";
import logo_dark from "./logo_dark.png";
import mail_icon from "./mail_icon.png";
import mail_icon_dark from "./mail_icon_dark.png";
import download_icon from "./download-icon.png";
import hand_icon from "./hand-icon.png";
import header_bg_color from "./header-bg-color.png";
import moon_icon from "./moon_icon.png";
import sun_icon from "./sun_icon.png";
import arrow_icon from "./arrow-icon.png";
import arrow_icon_dark from "./arrow-icon-dark.png";
import menu_black from "./menu-black.png";
import menu_white from "./menu-white.png";
import close_black from "./close-black.png";
import close_white from "./close-white.png";
import right_arrow from "./right-arrow.png";
import send_icon from "./send-icon.png";
import right_arrow_bold from "./right-arrow-bold.png";
import right_arrow_bold_dark from "./right-arrow-bold-dark.png";
import prof from "./prof.png";
import github from "./github.png";
import css from "./css.png";
import express_js from "./express-js.png";
import html from "./html.png";
import javascript from "./javascript.png";
import mysql from "./mysql.png";
import netlify from "./netlify.png";
import node_js from "./node-js.png";
import react_js from "./react-js.png";
import redux from "./redux.png";
import tailwindcss from "./tailwindcss.png";
import mongo_db from "./mongo-db.png";
import android from "./android.png";
import backend from "./backend.png";
import ui from "./ui.png";
import ux from "./ux.png";
import carPolling from "./carPolling.jpg";
import pokemonCards from "./pokemonCards.jpg";
import tastyNest from "./tastyNest.jpg";
import sameer from "./sameer.png";
import sameer_light from "./sameer_light.png";

export const assets = {
  sameer,
  sameer_light,
  carPolling,
  pokemonCards,
  tastyNest,
  android,
  backend,
  ui,
  ux,
  mongo_db,
  github,
  express_js,
  css,
  html,
  javascript,
  mysql,
  netlify,
  node_js,
  react_js,
  redux,
  tailwindcss,
  prof,
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    name: "GoFLow_A-Carpool_App",
    description:
      "GoFlow is a smart ride-sharing Android app with ride search, booking, OTP verification, wallet, payment integration, and referral rewards for an eco-friendly and affordable travel experience.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
    ],
    image: carPolling,
    source_code_link: "https://github.com/khannsameer/GoFLow_A-Carpool_App.git",
  },
  {
    name: "Recipe App",
    description:
      "A modern Recipe App built with React.js and Tailwind CSS. Fetches real-time recipes using the Edamam API and displays them in a clean, responsive UI.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "EdamamAPI",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "pink-text-gradient",
      },
    ],
    image: tastyNest,
    source_code_link: "https://github.com/khannsameer/Recipe_App",
  },
  {
    name: "Pokemon Cards",
    description:
      "A beautifully styled Pokédex built using React, Tailwind CSS, and Flowbite React. This project recreates a playful Pokémon-themed UI with custom fonts, and responsive design.",
    tags: [
      {
        name: "ReactJs",
        color: "blue-text-gradient",
      },
      {
        name: "Tailwind CSS",
        color: "green-text-gradient",
      },
      {
        name: "Pokemon API",
        color: "pink-text-gradient",
      },
    ],
    image: pokemonCards,
    source_code_link: "https://github.com/khannsameer/Pokemon_Cards",
  },
];

export const serviceData = [
  {
    icon: assets.ux,
    title: "Frontend Development",
    description:
      "Crafting responsive, user-friendly, and visually appealing interfaces using modern web technologies.",
    link: "",
  },
  {
    icon: assets.android,
    title: "Mobile Development",
    description:
      "Building high-performance, user-friendly mobile apps with seamless UI and smooth functionality for Android.",
    link: "",
  },
  {
    icon: assets.ui,
    title: "UI/UX Design",
    description:
      "Designing intuitive and visually appealing interfaces that ensure seamless user experiences across web and mobile platforms.",
    link: "",
  },
  {
    icon: assets.backend,
    title: "Backend Development",
    description:
      "Robust, secure, and scalable server-side solutions with APIs and database integration.",
    link: "",
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: "Languages",
    description:
      "HTML, CSS, JavaScript, React Js, Next Js, Node Js, Express Js, MongoDB",
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: "Education",
    description: "Master in Computer Application",
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: "Projects",
    description: "Built more than 5 projects",
  },
];

export const toolsData = [
  assets.vscode,
  assets.firebase,
  assets.figma,
  assets.git,
  assets.css,
  assets.express_js,
  assets.html,
  assets.github,
  assets.javascript,
  assets.mysql,
  assets.netlify,
  assets.node_js,
  assets.react_js,
  assets.redux,
  assets.tailwindcss,
  assets.mongo_db,
];
