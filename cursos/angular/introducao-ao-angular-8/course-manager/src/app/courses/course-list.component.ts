import { CourseService } from "./course.service";
import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
  templateUrl: "./course-list.component.html",
})
export class CourseListComponent implements OnInit {
  filteredCourses: Course[] = [];

  _courses: Course[] = [];
  _filterBy: string;

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this._courses = this.courseService.retrieveAll();
    this.filteredCourses = this._courses;
  }

  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;
    this.filteredCourses = this._courses.filter(
      (course: Course) =>
        course.name.toLowerCase().indexOf(this._filterBy.toLowerCase()) > -1
    );
  }
}
