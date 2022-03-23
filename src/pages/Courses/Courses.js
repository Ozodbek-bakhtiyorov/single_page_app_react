import React from "react";
import { Title, CoursesList, Title3 } from "../../components";
import { CoursesElement } from "./Courses.element";

export default function Courses() {
  return (
    <CoursesElement id="courses" className="container">
      <Title title="Our" span="Courses" />
      <div>
        <Title3 title={'Informatika va axborot texnalogiyalari'}/>
        <CoursesList />
      </div>
      <div>
        <Title3 title={'Tasviriy sanat va Musiqa'}/>
        <CoursesList />
      </div>
      <div>
        <Title3 title={'Aniq va Bumanitar fanlar'}/>
        <CoursesList />
      </div>
      <div>
        <Title3 title={'Xorijiy tilar'}/>
        <CoursesList />
      </div>
    </CoursesElement>
  );
}
