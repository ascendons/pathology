import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HtmlGeneratorService {

  constructor() { }

  generateHtml(patientDetails: any, selectedTestObject: any): string {
    return `
    <style>
      body {
        font-family: 'Arial', sans-serif;
        margin: 40px;
      }
      .header {
        text-align: center;
        border-bottom: 2px solid #000;
        padding-bottom: 10px;
        margin-bottom: 20px;
      }
      .header img {
        width: 50px;
        height: auto;
      }
      .header h1 {
        margin: 5px 0;
        font-size: 20px;
        font-weight: bold;
      }
      .header p {
        margin: 2px 0;
        font-size: 12px;
      }
      .report-title {
        text-align: center;
        font-size: 18px;
        font-weight: bold;
        margin: 20px 0;
        text-decoration: underline;
      }
      .details-table, .results-table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 20px;
      }
      .details-table td {
        padding: 6px 10px;
        font-size: 14px;
      }
      .results-table th, .results-table td {
        border: 1px solid #000;
        padding: 8px;
        font-size: 14px;
      }
      .results-table th {
        background-color: #f0f0f0;
      }
      .footer {
        display: flex;
        justify-content: space-between;
        margin-top: 60px;
      }
      .footer div {
        width: 45%;
        text-align: center;
      }
      .footer .line {
        border-top: 1px solid #000;
        margin-top: 40px;
        padding-top: 5px;
      }
      .address {
        text-align: center;
        font-size: 12px;
        margin-top: 40px;
        border-top: 1px solid #000;
        padding-top: 10px;
      }
      .print-button {
        text-align: center;
        margin-top: 20px;
      }
    </style>
  
    <div class="header">
      <h1>Krishna Patholab and Diagnostic Center</h1>
      <p>Samastipur, Bihar</p>
      <p>Phone: </p>
      <p>Email: </p>
    </div>
  
    <div class="report-title">Report</div>
  
    <table class="details-table">
      <tr>
        <td><strong>Patient Name:</strong> ${patientDetails.name}</td>
        <td><strong>Age / Sex:</strong> ${patientDetails.age} / ${patientDetails.gender}</td>
      </tr>
      <tr>
        <td><strong>Referred By:</strong> ${patientDetails.refBy}</td>
        <td><strong>Date:</strong> ${new Date().toLocaleDateString()}</td>
      </tr>
    </table>
  
    <table class="results-table">
      <tr>
        <th>Parameter</th>
        <th>Value</th>
        <th>Unit</th>
        <th>Limitations</th>
      </tr>
      ${selectedTestObject?.tests.map((test: { test: any; result: any; unit: any; limitations: any }) => `
        <tr>
          <td>${test.test}</td>
          <td>${test.result}</td>
          <td>${test.unit}</td>
          <td>${test.limitations}</td>
        </tr>
      `).join('')}
    </table>
  
    <div class="footer">
      <div>
        <div class="line">Dr. M Kumar</div>
      </div>
      <div>
        <div class="line">Krishna Mohan</div>
      </div>
    </div>
  
    <div class="address">
      
    </div>
  
    <div class="print-button">
      <button onclick="window.print()">Print Report</button>
    </div>
    `;
  }
  
}
