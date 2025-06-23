const { expect } = require('@playwright/test');
const PatientData = require('../TestData/PatientData.json');


export class PatientDataPage {
  constructor(page) {
    this.page = page;
    this.Status = page.getByRole('status');
    this.successMessage = page.getByRole('status').filter({ hasText: 'Failed to parse blood report' }).first();
    // Navigation
    this.DashboardBtn = page.getByRole('button', { name: 'Dashboard' });
    this.Mananlink = page.getByRole('link', { name: 'Manan' });
    // Patient form
    this.StartNewAssessmentBtn = page.getByRole('button', { name: 'Start New Assessment' });
    this.PatientAgeField = page.getByRole('textbox', { name: 'Patient Age' });
    this.GenderDropdown = page.getByRole('combobox', { name: 'Gender at Birth' });
    this.MaleOption =  page.getByLabel('Male', { exact: true }).getByText('Male');
    this.FemaleOption = page.getByLabel('Female').getByText('Female');
    this.ChiefComplaintField = page.getByRole('textbox', { name: 'Chief Complaint' });
    this.DetailedSymtomsField = page.getByRole('textbox', { name: 'Detailed Symptoms' });
    this.VitalSignField = page.getByRole('textbox', { name: 'Vital Signs & Lab Values' });
    // Vitals inputs (used manually)
    this.vitalsTextarea = page.locator('textarea[name="vitals"]');  
    // Upload
    this.UploadBtn = page.getByRole('button', { name: /Upload Blood Report/i });
    // Analysis
    this.AnalyzeCaseBtn = page.getByRole('button', { name: 'Analyze Case' });
    this.AIAnalysisHeading = page.getByRole('heading', { name: 'AI Analysis' });
    // Locators for report sections 
    // Buttons
    this.ShareAnalysisBtn = page.getByRole('button', { name: 'Share Analysis' });
    this.FurtherAnalysisBtn = page.getByRole('button', { name: 'Ask for Further Analysis' });
    this.SubmitBtn = page.getByRole('button', { name: 'Submit Additional Information' });
    // Follow-up
    this.FurtherPopUp = page.getByRole('dialog', { name: 'Follow-up Questions' });
    this.FurtherHeading = page.getByRole('heading', { name: 'Follow-up Questions' });
    // Errors
    this.ValidationErrorPopup = page.getByText('Failed to parse blood report. Please enter values manually');
    // PDF (assumes these exist)
    this.pdfShareBtn = page.getByRole('button', { name: 'PDF' });
    this.pdfSuccessPopup = page.getByRole('status').filter({ hasText: 'PDF Generated' }).first();
    this.FurtherAnalysisSuccess = page.getByRole('status').filter({ hasText: 'Success' }).first();
  }

  // ─── Form Entry ────────────────────────────────────────────────────
  
  async fillAge() {
    const data = PatientData.CompleteForm
    await this.PatientAgeField.fill(data.Age);
  }

  async appPage() {
    await this.DashboardBtn.click();
    await this.StartNewAssessmentBtn.click();
  }


  async emptyAge() {
    const data = PatientData.CompleteForm
    await this.GenderDropdown.click();
    await this.MaleOption.click()
    await this.fillChiefComplaint(data.CheifComplaints);
    await this.fillSymptomDescription(data.SymptompsDesc);
    await this. uploadTestReport('tests/Sample reports/CBC-sample 1.pdf');
  }

  async withoutGender() {
    const data = PatientData.CompleteForm
    await this.fillAge(data.Age);
    await this.fillChiefComplaint(data.CheifComplaints);
    await this.fillSymptomDescription(data.SymptompsDesc);
    await this. uploadTestReport('tests/Sample reports/CBC-sample 1.pdf');   
  }

  async emptyChiefcomplaints() {
    const data = PatientData.CompleteForm
    await this.fillAge(data.Age);
    await this.GenderDropdown.click();
    await this.MaleOption.click();    
    await this.fillSymptomDescription(data.SymptompsDesc);
    await this. uploadTestReport('tests/Sample reports/CBC-sample 1.pdf');   
  }

   async emptySymptomdescription() {
    const data = PatientData.CompleteForm
    await this.fillAge(data.Age);
    await this.GenderDropdown.click();
    await this.MaleOption.click()
    await this.fillChiefComplaint(data.CheifComplaints);   
    await this. uploadTestReport('tests/Sample reports/CBC-sample 1.pdf');
  }

  async NoVitalSigns() {
    const data = PatientData.CompleteForm
    await this.fillAge(data.Age);
    await this.GenderDropdown.click();
    await this.MaleOption.click()
    await this.fillChiefComplaint(data.CheifComplaints);
    await this.fillSymptomDescription(data.SymptompsDesc);    
  }

  async SelectGender(gender) {
    await this.GenderDropdown.click();
    if (gender === 'Male') {
    await this.MaleOption.click();
    } else if (gender === 'Female') {
      await this.FemaleOption.click();
      } else {
        throw new Error(`Unsupported gender: ${gender}`);
      }
  }

  async fillChiefComplaint() {
    const data = PatientData.CompleteForm
    await this.ChiefComplaintField.fill(data.CheifComplaints);
  }

  async fillSymptomDescription() {
     const data = PatientData.CompleteForm
    await this.DetailedSymtomsField.fill(data.SymptompsDesc);
  }

  // ─── Upload ────────────────────────────────────────────────────────
  async uploadTestReport(filePath) {
    const [fileChooser] = await Promise.all([
    this.page.waitForEvent('filechooser'),
    this.UploadBtn.click(),
    ]);
    await fileChooser.setFiles(filePath);
    await expect(this.page.locator('div.text-sm.opacity-90').filter({ hasText: /Blood report values have been added to vitals/i })).toBeVisible({ timeout: 20000 });
    await this.waitForVitalsToast();
  }

  async waitForVitalsToast() {
  await expect(
    this.page
      .locator('div.text-sm.opacity-90')
      .filter({ hasText: /Blood report values have been added to vitals/i })
  ).toBeVisible({ timeout: 20000 });
  }
  
  async uploadInvalidTestReport(filePath) {
    const [fileChooser] = await Promise.all([
    this.page.waitForEvent('filechooser'),
    this.UploadBtn.click(),
    ]);
    await fileChooser.setFiles(filePath);
  }

  // ─── Analysis ──────────────────────────────────────────────────────

  async CompleteForm() {
    const data = PatientData.CompleteForm
    await this.fillAge(data.Age);
    await this.GenderDropdown.click();
    await this.MaleOption.click()
    await this.fillChiefComplaint(data.CheifComplaints);
    await this.fillSymptomDescription(data.SymptompsDesc);
    await this. uploadTestReport('tests/Sample reports/CBC-sample 1.pdf');
  }

  async clickAnalyzeCase() {
    await this.AnalyzeCaseBtn.click();
  }

  async verifyTriageRecommendationsVisible() {
    await expect(this.AIAnalysisHeading).toBeVisible();
    await expect(this.page.locator('.rounded-lg').first()).toBeVisible({ timeout: 30000 });
  }

  // ─── Vitals ────────────────────────────────────────────────────────

  async clickVitalSigns() {
    const data = PatientData.Vitals
    await this.vitalsTextarea.fill(data.vitalsigns);
  }

  async verifyVitalsInTextarea() {
    const text = await this.vitalsTextarea.inputValue();
    for (const keyword of ['BP', 'HR', 'RR', 'Temp', 'SpO2']) {
      expect(text).toContain(keyword);
    }
  }

  // ─── Validation Errors ─────────────────────────────────────────────

  async verifyValidationErrorPopup() {
    await this.successMessage.waitFor({ state: 'visible' });
    await expect(this.successMessage).toContainText('Failed to parse blood report. Please enter values manually');
    const errormsg = await this.successMessage.textContent();
    console.log(errormsg);
  }
  
  async verifypdfSuccessPopup() {
    await this.pdfSuccessPopup.waitFor({ state: 'visible' });
    await expect(this.pdfSuccessPopup).toContainText('PDF Generated');
    const errorpdfmsg = await this.pdfSuccessPopup.textContent();
    console.log(errorpdfmsg);
     await expect(page.getByRole('status')).toContainText('PDF Generated');  
  }

  async AgeMissing() {
    await expect(this.page.getByText('Patient age is required')).toBeVisible();
  }

  async GenderMissing() {
    await expect(this.page.getByText('Gender is required')).toBeVisible();
  }

  async SymptomsMissing() {
    await expect(this.page.getByText('Symptoms are required')).toBeVisible();
  }

  async ChiefComplaintMissing() {
    await expect(this.page.getByText('Chief complaint is required')).toBeVisible();
  }

  async VitalSignMissing() {
    await expect(this.page.getByText('Vital signs are required')).toBeVisible();
  }

  // ─── Sharing / Follow-up ───────────────────────────────────────────

  async clickShareAnalysis() {
    await this.ShareAnalysisBtn.waitFor({ state: 'visible', timeout: 120000 });
    await expect(this.ShareAnalysisBtn).toBeEnabled();
    await this.ShareAnalysisBtn.click();
  }

  async ShareAnalysisBtnclick() {
      await page.getByRole('button', { name: 'Share Analysis' }).click();
  }

  async clickShareAndVerifyPDF() {
  await this.pdfShareBtn.click();
  await expect(this.pdfSuccessPopup).toBeVisible({ timeout: 10000 });
  }

  async clickFurtherAnalysis() {
    await this.FurtherAnalysisBtn.click();
  }
 
  async followUpQuestionMissingError() {
    await this.FurtherAnalysisSuccess.waitFor({ state: 'visible' });
    await expect(this.FurtherAnalysisSuccess).toContainText('Please answer all questions before submitting');
    const Error = await this.FurtherAnalysisSuccess.textContent();
    console.log(Error);
  }

  async fillPartialFollowUpQuestions(partialAnswers) {
    for (const [name, answer] of Object.entries(partialAnswers)) {
    await this.page.fill(`textarea[name="${name}"]`, answer);
    }
  }

  async waitForSuccessMessage() {
    await this.FurtherAnalysisSuccess.waitFor({ state: 'visible' });
    await expect(this.FurtherAnalysisSuccess).toContainText('Success');
    const Success = await this.FurtherAnalysisSuccess.textContent();
    console.log(Success);
  }

  async fillAllFollowUpQuestionsDynamic() {
    const fields = await this.page.locator('textarea[name^="q"]').elementHandles();
    for (const handle of fields) {
    const name = await handle.getAttribute('name');
    const answer = `Auto-filled answer for ${name}`;
    await this.page.fill(`textarea[name="${name}"]`, answer);
    console.log(` Filled ${name} with: "${answer}"`);
    }
  }

  async waitForFollowUpFormReady() {
    await this.page.waitForSelector('text=Generating relevant questions...', { state: 'detached', timeout: 280000 });
    await this.page.waitForSelector('textarea[name="q1"]', {state: 'visible',timeout: 120000,});
  }
  
  async openFurtherAnalysisForm() {
    try {
    await this.page.waitForLoadState('domcontentloaded');
    const button = this.page.getByRole('button', { name: 'Ask for Further Analysis' });
    await button.waitFor({ state: 'attached', timeout: 60000 });
    await expect(button).toBeVisible({ timeout: 60000 });
    await expect(button).toBeEnabled();
    await button.click();
    await this.page.getByRole('heading', { name: 'Follow-up Questions' }).waitFor({ timeout: 5000 });
    } catch (err) {
    console.error('Could not open Further Analysis form:', err);
    throw err;
    }
  }

  async clickSubmitAddInfo() {
    await this.page.getByRole('button', { name: 'Submit Additional Information' }).click();
  }

  async allRequiredsections(page) {
        
        await expect(this.AIAnalysis).toBeVisible({ timeout: 30000 });
        await expect(page.getByText('Warning signs requiring escalation', { exact: false })).toBeVisible({ timeout: 30000 });
        const expectedSections = [
        'Triage Level',
        'TOP 3-5 POSSIBLE DIAGNOSES',
        'Key clinical concerns and risk factors',
        'Immediate actions/interventions needed',
        'Recommended diagnostic tests',
        'Specialist referral recommendations',
        'Warning signs requiring escalation'
        ];
        for (const section of expectedSections) {
        await expect(page.getByText(section, { exact: false })).toBeVisible({ timeout: 10000 });
        }
  }

  async fivefiles() {
    await expect(page.getByRole('button', { name: 'Upload Blood Report (0' })).toBeVisible({timeout: 300000});
  }

  async multiplefiles() {
    await expect(page.getByText('Upload limit reached')).toBeVisible({timeout: 300000});
  }

}
module.exports = { PatientDataPage };