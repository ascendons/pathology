import { Component } from '@angular/core';
import jsPDF from 'jspdf';
import { autoTable } from 'jspdf-autotable';
import { FormsModule } from '@angular/forms';
import { SafeUrlPipe } from './safe-url.pipe';
import { CommonModule } from '@angular/common';

// import autoTable from 'jspdf-autotable';
import 'jspdf-autotable';
import { PathConstants } from './path.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [FormsModule, SafeUrlPipe, CommonModule],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  patientDetails={
    name: '',
    age: '',
    gender: '',
    refBy: '',
  };
  date = new Date();

  testNames = PathConstants.TestNames;
  selectedTest:any;
  selectedTestObject:any;
  pdfUrl: string | null = null;

  generatePDF() {
    const doc = new jsPDF();
  
    // Add title
    doc.setFontSize(18);
    doc.text('Om Patholab and Diagnostic Center', 50, 10);
  
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
      margin: { top: 90 } // adjust the margin to position the table below the title
    });
  
    // Generate PDF as Blob URL
    const pdfBlob = doc.output('blob');
    // this.pdfUrl = URL.createObjectURL(pdfBlob);
   this.generateStaticHTML();
  }
    // Open the PDF in a new tab
    // const newTab = window.open();
    // if (newTab) {
    //   newTab.document.write('<iframe width="100%" height="100%" src="' + this.pdfUrl + '"></iframe>');
    //   newTab.document.close();
    // }

    selectTest(){
      this.selectedTestObject = this.testNames.find((test) => test.name === this.selectedTest);
    }
    generateStaticHTML() {
      const html = `
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    table {
      border-collapse: collapse;
      width: 100%;
    }
    th, td {
      border: 1px solid #ddd;
      padding: 8px;
      text-align: left;
    }
    th {
      background-color: #f0f0f0;
    }
  </style>
  <h1>Om Patholab and Diagnostic Center</h1>
  <h2>Patient Details</h2>
  <p>Patient Name: ${this.patientDetails.name}</p>
  <p>Age: ${this.patientDetails.age}</p>
  <p>Gender: ${this.patientDetails.gender}</p>
  <p>Referred By: ${this.patientDetails.refBy}</p>
  <p>Date: ${new Date().toLocaleDateString()}</p>
  <h2>Report</h2>
  <table>
    <tr>
      <th>Parameter</th>
      <th>Value</th>
      <th>Unit</th>
      <th>Limitations</th>
    </tr>
    ${this.selectedTestObject?.tests.map((test: { test: any; result: any; unit: any; limitations: any}) => `
      <tr>
        <td>${test.test}</td>
        <td>${test.result}</td>
        <td>${test.unit}</td>
        <td>${test.limitations}</td>
      </tr>
    `).join('')}
  </table>
  <button onclick="window.print()">Print</button>
`;
//open html in new tab
      const newTab = window.open();
      if (newTab) {
        newTab.document.write(html);
        newTab.document.close();
      }


    }
}