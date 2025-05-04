import { Component } from '@angular/core';
import { PathConstants } from '../path.constants';
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HtmlGeneratorService } from '../services/html-generator.service';

@Component({
  selector: 'app-pathology',
  imports: [FormsModule, CommonModule],
  templateUrl: './pathology.component.html',
  styleUrl: './pathology.component.scss'
})
export class PathologyComponent {
  patientDetails={
    name: '',
    age: '',
    gender: '',
    refBy: '',
  };
  date = new Date();
  constructor(private htmlGenerator: HtmlGeneratorService) {}

  testNames = PathConstants.TestNames;
  selectedTest:any;
  selectedTestObject:any;
  pdfUrl: string = '';


    selectTest(){
      this.selectedTestObject = this.testNames.find((test) => test.name === this.selectedTest);
    }
    generateStaticHTML() {
      const html = this.htmlGenerator.generateHtml(this.patientDetails,this.selectedTestObject);
      //open html in new tab
      const newTab = window.open();
      if (newTab) {
        newTab.document.write(html);
        newTab.document.close();
      }
    }
}
