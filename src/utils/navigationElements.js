import uniqid from "uniqid";

const NavigationElements = [
  {
    id: uniqid(),
    title: "Tasks",
    number: 8,
    relativePath: "../assets/tasks_icon_grey.png",
    activeRelativePath: "../assets/tasks_icon_blue.png",
  },
  {
    id: uniqid(),
    title: "Users",
    number: 3,
    relativePath: "../assets/users_icon_grey.png",
    activeRelativePath: "../assets/users_icon_blue.png",
  },
  {
    id: uniqid(),
    title: "Columns",
    number: 3,
    relativePath: "../assets/columns_icon_grey.png",
    activeRelativePath: "../assets/columns_icon_blue.png",
  },
  {
    id: uniqid(),
    title: "Tags",
    number: 2,
    relativePath: "../assets/tags_icon_grey.png",
    activeRelativePath: "../assets/tags_icon_blue.png",
  },
];

export default NavigationElements;
