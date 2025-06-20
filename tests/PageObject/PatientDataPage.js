const { expect } = require('@playwright/test');
const PatientData = require('../TestData/PatientData.json');


export class PatientDataPage {
  constructor(page) {
    this.page = page;
    // Auth
    this.SignInButton = page.getByRole('button', { name: 'Sign In' });
    this.SignInPopup = page.getByRole('button', { name: 'Continue with Google' });
    this.PopWindow = page.getByRole('dialog', { name: 'Welcome to MANAN' });
    this.UsernameField = page.getByRole('textbox', { name: 'Email or phone' });
    this.PasswordField = page.getByRole('textbox', { name: 'Enter your password' });
    this.NextBtn = page.getByRole('button', { name: 'Next' });
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
    this.heartRateInput = page.getByPlaceholder('HR'); // Adjust placeholder if needed
    this.bloodPressureInput = page.getByPlaceholder('BP');
    this.temperatureInput = page.getByPlaceholder('Temp');
    // Upload
    this.UploadBtn = page.getByRole('button', { name: /Upload Blood Report/i });
    // Analysis
     // Locators
    this.AnalyzeCaseBtn = page.getByRole('button', { name: 'Analyze Case' });
    this.AIAnalysisHeading = page.getByRole('heading', { name: 'AI Analysis' });
    // Locators for report sections (h2 or h3 with the section titles)
    this.sectionLocator = (sectionTitle) => 
      page.locator('h2, h3').filter({ hasText: new RegExp(sectionTitle, 'i') });
    
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

  // ─── Navigation ────────────────────────────────────────────────────
  async navigateToHomePage() {
    await this.page.goto(process.env.appurl);
  }

  async navigateToPatientDataPage() {
    await this.page.goto(process.env.appurl + 'app');
  }

  // ─── Form Entry ────────────────────────────────────────────────────

  async fillAge() {
    const data = PatientData.CompleteForm
    await this.PatientAgeField.fill(data.Age);
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

  async manuallyEnterVitals({ heartRate, bloodPressure, temperature }) {
    if (heartRate) await this.heartRateInput.fill(heartRate);
    if (bloodPressure) await this.bloodPressureInput.fill(bloodPressure);
    if (temperature) await this.temperatureInput.fill(temperature);
  }

  // ─── Upload ────────────────────────────────────────────────────────

 async uploadTestReport(filePath) {
  const [fileChooser] = await Promise.all([
    this.page.waitForEvent('filechooser'),
    this.UploadBtn.click(),
  ]);

  await fileChooser.setFiles(filePath);

  // ✅ Wait for success toast or AI output to confirm upload worked
  await expect(
  this.page
    .locator('div.text-sm.opacity-90')
    .filter({ hasText: /Blood report values have been added to vitals/i })
).toBeVisible({ timeout: 20000 });
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
   async completeAssessmentForm(data) {
    await this.fillAge(data.age);
    await this.SelectGender(data.gender);
    await this.fillChiefComplaint(data.chiefComplaint);
    await this.fillSymptomDescription(data.symptomDescription);
    await this.manuallyEnterVitals(data.vitals);
    
  }

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
    await expect(this.AIAnalysis).toBeVisible();
    await expect(this.page.locator('.rounded-lg').first()).toBeVisible({ timeout: 30000 });
  }
  get AIAnalysis() {
  return this.page.locator('h2', { hasText: 'AI Analysis' });
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

get analyzingButton() {
  return this.page.getByRole('button', { name: /Analyzing/i });
}

async clickShareAndVerifyPDF() {
  await this.pdfShareBtn.click();
  await expect(this.pdfSuccessPopup).toBeVisible({ timeout: 10000 });
}

async clickFurtherAnalysis() {
    await this.FurtherAnalysisBtn.click();

  }

  // Verify error message shown when follow-up questions are incomplete
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


  async fillAllFollowUpQuestions(answers) {
  for (const [questionId, answer] of Object.entries(answers)) {
// Use name attribute selector instead of id
    await this.page.fill(`textarea[name="${questionId}"]`, answer);
  }
}









// Wait for the follow-up questions form to be fully ready
  async waitForFollowUpFormReady() {
    // Wait for loading text to disappear
    await this.page.waitForSelector('text=Generating relevant questions...', { state: 'detached', timeout: 280000 });

    // Wait for the first question to appear (name="q1")
  await this.page.waitForSelector('textarea[name="q1"]', {
    state: 'visible',
    timeout: 120000,
  });
  }


  async waitForModifiedAIAnalysis() {
  await expect(this.AIAnalysisHeading).toBeVisible({ timeout: 30000 });
  await expect(this.page.getByText('Triage Level', { exact: false })).toBeVisible({ timeout: 20000 });
}

  async verifyFurtherAnalysis() {
    await expect(this.FurtherPopUp).toBeVisible();
    await expect(this.FurtherHeading).toContainText('Follow-up Questions');
  }

async openFurtherAnalysisForm() {
  try {
    await this.page.waitForLoadState('domcontentloaded');

    const button = this.page.getByRole('button', { name: 'Ask for Further Analysis' });

    await button.waitFor({ state: 'attached', timeout: 60000 });
    await expect(button).toBeVisible({ timeout: 60000 });
    await expect(button).toBeEnabled();

    await button.click();

    // Optional: confirm next step loaded
    await this.page.getByRole('heading', { name: 'Follow-up Questions' }).waitFor({ timeout: 5000 });
  } catch (err) {
    console.error('Could not open Further Analysis form:', err);
    throw err;
  }
}



  async clickSubmitAddInfo() {
    await this.page.getByRole('button', { name: 'Submit Additional Information' }).click();
  }

  async clickFurtherAnalysisButton() {
  try {
    await expect(this.FurtherAnalysisBtn).toBeVisible({ timeout: 60000 }); // ensure it's there
    await this.FurtherAnalysisBtn.click(); // perform click
  } catch (error) {
    console.error('Failed to click Further Analysis button:', error);
    throw error; // re-throw for Playwright to catch as test failure
  }
}

}

module.exports = { PatientDataPage };