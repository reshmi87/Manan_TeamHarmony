const { expect } = require('@playwright/test');

export class PreviousAssessPage {
 constructor(page){
    
     this.page = page;

    this.previousassessment = page.getByRole('button', { name: 'View Previous Assessments'});
    this.aianalysistitle = page.getByRole('heading', { name: 'AI Analysis' });
    this.triageleveltitle = page.getByText(/^### 1\. TRIAGE LEVEL/);
    this.aiconfidencetitle = page.getByRole('heading', { name: 'AI Confidence' });

    
    this.assessmenttitle = page.getByRole('heading', { name: 'Your Assessments'});
    this.assessmenttime = page.getByText('about 16 hours ago');

    this.casedetailsbutton = page.getByRole('tab', { name: 'Case Details'});
    this.patientageheading =  page.getByRole('heading', { name: 'Patient Age' })
    this.symptomsheading =  page.getByRole('heading', { name: 'Symptoms' })
    this.vitalsignsheading =  page.getByRole('heading', { name: 'Vital Signs' })

    this.exportpdfbutton = page.getByRole('button', { name: 'Export as PDF'});
    this.pdfPopupSuccessMsg = page.getByRole('status').filter({ hasText: 'PDF Generated' }).first();


    this.verifymanantitle = page.getByRole('link', { name: 'Manan' });
    this.backstodashboardpage = page.getByText('Gender at Birth'); 


    this.leftWordEmergency = page.locator('.inline-flex').first();
    this.rightWordEmergency = page.locator('.flex > .flex.justify-between > .inline-flex');


    this.leftWordHigh = page.locator('.inline-flex.items-center.rounded-full.border.px-2\\.5.py-0\\.5.text-xs.font-semibold.transition-colors.focus\\:outline-none.focus\\:ring-2.focus\\:ring-ring.focus\\:ring-offset-2.border-transparent.text-primary-foreground.bg-orange-500').first();
    this.rightWordHigh = page.locator('.flex > .flex.justify-between > .inline-flex');


    this.leftWordMedium = page.locator('.inline-flex').first();
    this.rightWordMedium = page.locator('.flex > .flex.justify-between > .inline-flex');


    this.leftWordLow = page.getByText('LOW').first();
    this.rightWordLow = page.locator(`xpath=//div[@class='md:col-span-2']//div[contains(text(),'LOW')]`);
    

    this.leftMedicalCondition = page.locator('.font-medium').first();
    this.rightMedicalCondition = page.locator('div').filter({ hasText: /^Fever6\/21\/2025$/ }).getByRole('heading');

    this.newuserpagename = page.getByRole('heading', { name: 'Previous Assessments' });
    this.newuserheading = page.getByRole('heading', { name: 'No assessments found' });
    this.newusertext = page.getByText('You haven\'t created any');
    this.newuserbutton = page.getByRole('button', { name: 'Start a New Assessment' });
 }

    async clickpreviousassessmentbutton() {
        await this.previousassessment.click();
    }

    async checkpreviousassessmentdetails() {
        await expect(this.aianalysistitle).toBeVisible();
        console.log(this.aianalysistitle.textContent());
        await expect(this.triageleveltitle).toBeVisible();

      console.log(this.triageleveltitle.textContent());
      await expect(this.aiconfidencetitle).toBeVisible();
      console.log(this.aiconfidencetitle.textContent());
    }

    async clickcasedetailsbutton() {
        await this.casedetailsbutton.click();
    }

    async displaycasedetailsui() {
      await expect(this.patientageheading).toBeVisible();
      console.log(this.patientageheading.textContent());

      await expect(this.symptomsheading).toBeVisible();
      console.log(this.symptomsheading.textContent());
      await expect(this.vitalsignsheading).toBeVisible();
      console.log(this.vitalsignsheading.textContent());
    }

    async clickexportpdfbutton() {
      await this.exportpdfbutton.click();
    }

    async checkpdfgeneratedmessage(){
      await expect(this.pdfPopupSuccessMsg).toBeVisible({ timeout: 20000 });
    }


    async checkpdfSuccessPopup() {
      await this.exportpdfbutton.waitFor({ state: 'visible' });
      await expect(this.exportpdfbutton).toContainText('PDF Generated', { timeout: 20000 }); 
    const errorpdfsmsg = await this.exportpdfbutton.textContent();
    console.log(errorpdfsmsg);
    }

    async clickmananbutton() {
      await this.verifymanantitle.dblclick();
    }
 
    async verifydashboardpagegendertitle() {
        await expect(this.backstodashboardpage).toBeVisible();
    }

  async clickleftwordemergencybutton() {
        await this.leftWordEmergency.click();
    }

  async getLeftWordEmergency() {
    return (await this.leftWordEmergency.textContent()).trim();
  }

  async getRightWordEmergency() {
    return (await this.rightWordEmergency.textContent()).trim();
  }

  async verifyWordsMatchEmergencyTriage() {
    const leftEmergency = await this.getLeftWordEmergency();
    const rightEmergency = await this.getRightWordEmergency();
    console.log(`Left: "${leftEmergency}" | Right: "${rightEmergency}"`);
    expect(leftEmergency).toBe(rightEmergency); 
  }

  async clickleftwordhighbutton() {
       await this.leftWordHigh.click();
    }

  async getLeftWordHigh() {
    return (await this.leftWordHigh.textContent()).trim();
  }

  async getRightWordHigh() {
    return (await this.rightWordHigh.textContent()).trim();
  }

  async verifyWordsMatchHighTriage() {
    const leftHigh = await this.getLeftWordHigh();
    const rightHigh = await this.getRightWordHigh();
    console.log(`Left: "${leftHigh}" | Right: "${rightHigh}"`);
    expect(leftHigh).toBe(rightHigh); 
  }

  async clickleftwordmediumbutton() {
        await this.leftWordMedium.click();
    }

  async getLeftWordMedium() {
    return (await this.leftWordMedium.textContent()).trim();
  }

  async getRightWordMedium() {
    return (await this.rightWordMedium.textContent()).trim();
  }

  async verifyWordsMatchMediumTriage() {
    const leftMedium = await this.getLeftWordMedium();
    const rightMedium = await this.getRightWordMedium();
    console.log(`Left: "${leftMedium}" | Right: "${rightMedium}"`);
    expect(leftMedium).toBe(rightMedium); 
  }

  async clickleftwordlowbutton() {
        await this.leftWordLow.click();
  }

  async getLeftWordLow() {
    return (await this.leftWordLow.textContent()).trim();
  }

  async getRightWordLow() {
   await expect(this.rightWordLow).toBeVisible({ timeout: 10000 });
    return (await this.rightWordLow.textContent()).trim();
  }

  async verifyWordsMatchLowTriage() {
    const leftLow = await this.getLeftWordLow();
    const rightLow = await this.getRightWordLow();
    console.log(`Left: "${leftLow}" | Right: "${rightLow}"`);
   expect(rightLow).toContain(leftLow);
  }

  async clickleftmedicalconditionname() {
        await this.leftMedicalCondition.click();
    }

  async getLeftWordMedical() {
    return (await this.leftMedicalCondition.textContent()).trim();
  }

  async getRightWordMedical() {
    return (await this.rightMedicalCondition.textContent()).trim();
  }

  async verifyWordsMatchMedicalCondition() {
    const leftMedical = await this.getLeftWordMedical();
    const rightMedical = await this.getRightWordMedical();
    console.log(`Left: "${leftMedical}" | Right: "${rightMedical}"`);
    expect(leftMedical).toBe(rightMedical); 
  }

  async newuservalidation(){
    await expect(this.newuserpagename).toBeVisible();
    await expect(this.newuserheading).toBeVisible();
    await expect(this.newusertext).toBeVisible();
    await expect(this.newuserbutton).toBeVisible();
  }

  async expectedsections(page){
      const expectedTitles = [
    'Triage Level',
    'TOP 3-5 POSSIBLE DIAGNOSES',
    'Key clinical concerns and risk factors',
    'Immediate actions/interventions needed',
    'Recommended diagnostic tests',
    'Specialist referral recommendations',
    'Warning signs requiring escalation'
    ];
    for (const section of expectedTitles) {
    await expect(page.getByText(section, { exact: false })).toBeVisible({ timeout: 10000 });
    }
    }

 }