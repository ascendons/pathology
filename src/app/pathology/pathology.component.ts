import { Component } from '@angular/core';
import { PathConstants } from '../path.constants';
import autoTable from 'jspdf-autotable';
import jsPDF from 'jspdf';
import { FormsModule } from '@angular/forms';
import { SafeUrlPipe } from '../safe-url.pipe';
import { CommonModule } from '@angular/common';
import { HtmlGeneratorService } from '../services/html-generator.service';

@Component({
  selector: 'app-pathology',
  imports: [FormsModule, CommonModule, SafeUrlPipe],
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

  generatePDF() {
    const doc = new jsPDF();
  
    // Add title
    doc.setFontSize(18);
    doc.text('Krishna Patholab and Diagnostic Center', 50, 10);
  
      // Add patient details
  doc.setFontSize(14);
  doc.text(`Patient Name: ${this.patientDetails.name}`, 10, 30);
  doc.text(`Age: ${this.patientDetails.age}`, 10, 40);
  doc.text(`Gender: ${this.patientDetails.gender}`, 10, 50);
  doc.text(`Referred By: ${this.patientDetails.refBy}`, 10, 60);

  // Add date
  const date = new Date();
  doc.text(`Date: ${date.getDate() + '/' + (date.getMonth()+1)+ '/' + date.getFullYear()}`, 10, 70);


    // Define table headers and data
    const headers = [['Test', 'Result', 'Unit', 'Limitations']];
    let data:any = [];
    if (this.selectedTestObject) {
      this.selectedTestObject.tests.forEach((test: any) => {
        data.push([test.test, test.result, test.unit, test.limitations]);
      });
    }
  
    autoTable(doc, {
      head: headers,
      body: data,
      columns: [
        { header: 'Parameter', dataKey: 0 },
        { header: 'Value', dataKey: 1 },
        { header: 'Unit', dataKey: 2 },
        { header: 'Limitations', dataKey: 3 }
      ],
      margin: { top: 90 } 
    });
  
    const pdfBlob = doc.output('blob');
    this.pdfUrl = URL.createObjectURL(pdfBlob);
    this.generateStaticHTML();
   // Open the PDF in a new tab
    // const newTab = window.open();
    // if (newTab) {
    //   newTab.document.write('<iframe width="100%" height="100%" src="' + this.pdfUrl + '"></iframe>');
    //   newTab.document.close();
    // }
  }
    

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
