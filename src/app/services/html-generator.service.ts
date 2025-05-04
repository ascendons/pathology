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
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 40px;
    background-color: #f9f9f9;
    color: #333;
  }

  .report-container {
    background-color: #fff;
    padding: 30px;
    max-width: 800px;
    margin: auto;
    border-radius: 8px;
    box-shadow: 0 0 15px rgba(0,0,0,0.1);
  }

  .header {
    text-align: center;
    border-bottom: 2px solid #333;
    padding-bottom: 10px;
    margin-bottom: 20px;
  }

  .header h1 {
    margin: 10px 0 5px;
    font-size: 24px;
    font-weight: 700;
    color: #2c3e50;
  }

  .header p {
    margin: 2px 0;
    font-size: 13px;
    color: #555;
  }

  .report-title {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin: 25px 0;
    text-decoration: underline;
    color: #444;
  }

  .details-table {
    width: 100%;
    margin-bottom: 20px;
    font-size: 14px;
  }

  .details-table td {
    padding: 8px 10px;
  }

  .results-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 30px;
  }

  .results-table th, .results-table td {
    border: 1px solid #ccc;
    padding: 10px;
    font-size: 14px;
    text-align: center;
  }

  .results-table th {
    background-color: #f0f4f8;
    font-weight: 600;
  }

  .results-table tr:nth-child(even) {
    background-color: #fafafa;
  }

  .footer {
    display: flex;
    justify-content: space-between;
    margin-top: 60px;
  }

  .footer div {
    width: 45%;
    text-align: center;
    font-size: 14px;
    color: #333;
  }

  .footer .line {
    border-top: 1px solid #333;
    margin-top: 40px;
    padding-top: 6px;
  }

  .address {
    text-align: center;
    font-size: 12px;
    margin-top: 40px;
    border-top: 1px solid #ccc;
    padding-top: 10px;
    color: #666;
  }

  .print-button {
    text-align: center;
    margin-top: 30px;
  }

  .print-button button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
  }

  .print-button button:hover {
    background-color: #2980b9;
  }

  @media print {
    .print-button {
      display: none;
    }

    body {
      background-color: white;
      margin: 0;
    }

    .report-container {
      box-shadow: none;
      border: none;
    }
  }
</style>

<div class="report-container">
  <div class="header">
    <h1>Krishna Patholab and Diagnostic Center</h1>
    <p>Samastipur, Bihar</p>
    <p>Phone: </p>
    <p>Email: </p>
  </div>

  <div class="report-title">Medical Report</div>

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
    Krishna Patholab and Diagnostic Center, Samastipur, Bihar - India
  </div>

  <div class="print-button">
    <button onclick="window.print()">Print Report</button>
  </div>
</div>

    `;
  }
  
}
