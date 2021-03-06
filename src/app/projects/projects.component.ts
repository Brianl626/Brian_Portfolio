import { Component, OnInit } from '@angular/core';
import { Project } from './project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projectList: Project[];

  constructor() {
    this.projectList = [
      { name: "Properties Management System", client: 'Property Matrix', img: ".\\assets\\Images\\porpertyMatrix.jpg", description: "Powerful reporting gives you financial insight into all aspects of the companies. Manage commercial, residential, and mixed portfolio properties. Track your clients' commercial or residential leases with specialized standards." },
      { name: "Shipping management software", client: 'ShipSaving', img: "assets\\Images\\shipsaving.jpg", description: "Shipping management software is to simplify and automate shipping processes and help all e-commerce businesses and individuals achieve the most economical and cost-effective shipping arrangements. Use software's built-in tools to synchronize orders from client's online store and manage shipments efficiently." },
      { name: "Accutive Data Discovery and Masking (ADM)", client: 'Accutive', img: "assets/Images/accutive.jpg", description: "ADM enables clients and employees to simultaneously ensure the security and functionality of sensitive data through rapid automated data discovery and masking. It helps companies ensure they are available for testing, analytics, and other critical business functions, while keeping them secure and in compliance with regulatory requirements." },
      {
        name: "Real-time passenger onboarding management system", client: 'Luxoft', img: "assets\\Images\\luxoft.jpg", description: "Real-time passenger onboarding management system help train managers can quickly and error-free process last-minute reservations, control passenger documentation (tickets, identity verification and seat assignments). Addresses the timeconsuming and error-prone issue of managing day-to-day operations through paper documents, resulting in conflicting bookings and inaccurate passenger records."
      }
    ]
  }

  ngOnInit(): void {
  }

}
