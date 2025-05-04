export class PathConstants {
    static TestNames = [
        {
            label: 'Kidney Function Test',
            name: 'kidneyFunctionTest',
            tests: [
                {
                    test: 'Blood Urea',
                    name: 'bloodUrea',
                    result: '',
                    unit: 'mg/dL',
                    limitations: '10 - 50',
                    abnormal: false
                },
                {
                    test: 'B U N',
                    name: 'bUN',
                    result: '',
                    unit: 'mg/dL',
                    limitations: '4 - 20',
                    abnormal: false
                },
                {
                    test: 'Creatinine',
                    name: 'creatinine',
                    result: '',
                    unit: 'mg/dL',
                    limitations: '0.6 - 1.2',
                    abnormal: false
                },
                {
                    test: 'Serum Uric Acid',
                    name: 'serumUricAcid',
                    result: '',
                    unit: 'mg/dL',
                    limitations: '3.5 - 7.2',
                    abnormal: false
                },
                {
                    test: 'Serum Calcium',
                    name: 'serumCalcium',
                    result: '',
                    unit: 'mg/dL',
                    limitations: '8.5 - 10.5',
                    abnormal: false
                }
            ]
        },
        {
            label: 'Liver Function Test',
            name: 'liverFunctionTest',
            tests: [
                {
                    test: 'Bilirubin Total',
                    name: 'bilirubinTotal',
                    result: '',
                    unit: 'mg/dL',
                    limitations: '0.2 - 1.2',
                    abnormal: false
                },
                {
                    //BilirubinDirect
                    test: 'Bilirubin Direct',
                    name: 'bilirubinDirect',
                    result: '',
                    unit: 'mg/dL',
                    limitations: '0.2 - 1.2',
                    abnormal: false
                },
                {
                    test: 'Bilirubin Indirect',
                    name: 'bilirubinIndirect',
                    result: '',
                    unit: 'mg/dL',
                    limitations: '0.2 - 1.2',
                    abnormal: false
                },
                {
                    test: 'SGPT',
                    name: 'sgpt',
                    result: '',
                    unit: 'U/L',
                    limitations: '10 - 40',
                    abnormal: false
                },
                {
                    test: 'SGOT',
                    name: 'sgot',
                    result: '',
                    unit: 'U/L',
                    limitations: '10 - 40',
                    abnormal: false
                },
                {//Alkaphos
                    test: 'Alkaline Phosphatase',
                    name: 'alkalinePhosphatase',
                    result: '',
                    unit: 'U/L',
                    limitations: '50 - 200',
                    abnormal: false
                },
                {
                    //GGT
                    test: 'GGT',
                    name: 'gGT',
                    result: '',
                    unit: 'U/L',
                    limitations: '10 - 40',
                    abnormal: false
                },
                {
                    //totalProtein
                    test: 'Total Protein',
                    name: 'totalProtein',
                    result: '',
                    unit: 'g/dL',
                    limitations: '6.0 - 8.0',
                    abnormal: false
                },
                {
                    //albumin
                    test: 'Albumin',
                    name: 'albumin',
                    result: '',
                    unit: 'g/dL',
                    limitations: '3.5 - 5.0',
                    abnormal: false
                },
                {
                    //globulin
                    test: 'Globulin',
                    name: 'globulin',
                    result: '',
                    unit: 'g/dL',
                    limitations: '2.5 - 3.5',
                    abnormal: false
                },
                {
                    //A/G Ratio
                    test: 'A/G Ratio',
                    name: 'aGRatio',
                    result: '',
                    unit: '',
                    limitations: '',
                    abnormal: false
                }
            ]
        }
    ]
}