import CourseCard from "./CourseCard";
import img from "../../assets/images/home_bg.jpg";
import styled  from "styled-components";
import { d_grid } from "../../mixins";
import { Link } from "react-router-dom";
const items = [
 {
  id:1,
  title:"Lorem ipsum ",
 img,
 info:"sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit. Totam, minus?"
 },
 {
  id:2,
  title:"Lorem ipsum ",
 img,
 info:"sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit. Totam, minus?"
 },
 {
  id:3,
  title:"Lorem ipsum ",
 img,
 info:"sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit. Totam, minus?"
 },
 {
  id:4,
  title:"Lorem ipsum ",
 img,
 info:"sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit.sit amet consectetur adipisicing elit. Totam, minus?"
 },
];

export default function CoursesList() {
  return (
    <Content>
      {items &&
        items.map((el) => (
         <Link to={`/courses/${el.id}`} key={el.id}>
            <CourseCard
            title={el.title}
            img={el.img}
            info={el.info}
            id={el.id}
          />
         </Link>
        ))}
    </Content>
  );
}
const Content = styled.div`
  ${d_grid('30px', '200px')};
  a{
    color:white;
  }
`;
