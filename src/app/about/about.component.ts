import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  textlist = [
    'Strong Experience in working with Angular using NgRx state management, Angular Material as well as other libraries to create Angular modules, components, directives, and services to deploy Single-Page Application (SPA).',
    'Solid understanding of Angular and familiarity with the rich Angular ecosystem in practical web application development.',
    'Good understanding and hands-on experience of databases like MongoDB, MySQL, and Firebase.',
    'Experience in creating, building restful APIs with ASP .Net Core.',
    'Experience testing and debugging Restful ASP.NET Core Web APIs using tools like Fiddler and Postman, coupled with working experience in JavaScript and Angular testing library frameworks including Jasmine and Karma, as well as expertise in debugging tools like Postman.',
    'Strong understanding and experienced with all the phases of agile development methodologies including SCRUM, involved in daily SCRUM meetings to keep track of the Ongoing project status and issues using project tracking software like JIRA, Notion, Trello.'
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
