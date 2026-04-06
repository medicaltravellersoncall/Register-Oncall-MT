// ═══════════════════════════════════════════════════════════════════
//  Medical Travellers On-Call — Google Apps Script
//  Deploy as: Web App → Execute as: Me → Who has access: Anyone
// ═══════════════════════════════════════════════════════════════════

const SHEET_NAME = 'Sheet1';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME);

    // Ensure header row exists
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'No.', 'Service Date', 'Patient Name', 'Location', 'Diagnose',
        'Doctor Name', 'Nurse Name', 'Driver Name',
        'Appointment Time', 'Actual Arrival Time', 'Arrival Status',
        'Delay (minutes)', 'Completion Time', 'Treatment Duration (minutes)',
        '24h WA Follow Up Status', 'Detail Follow Up Result'
      ]);
    }

    // Auto-number if not provided
    const lastRow = sheet.getLastRow();
    const no = data.no || (lastRow > 1 ? lastRow : 1);

    sheet.appendRow([
      no,
      data.serviceDate       || '',
      data.patientName       || '',
      data.location          || '',
      data.diagnose          || '',
      data.doctorName        || '',
      data.nurseName         || '',
      data.driverName        || '',
      data.appointmentTime   || '',
      data.actualArrivalTime || '',
      data.arrivalStatus     || '',
      data.delayMinutes      || '',
      data.completionTime    || '',
      data.treatmentDuration || '',
      data.followUpStatus    || '',
      data.followUpDetail    || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok', row: sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Handle CORS preflight
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: 'ok', message: 'MT On-Call API running' }))
    .setMimeType(ContentService.MimeType.JSON);
}
