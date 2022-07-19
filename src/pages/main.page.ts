import type { Page } from "@playwright/test";

export class MainPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('http://10.10.14.16/');
    }
    
    async login(phone:string, password:string){
        await this.page.fill("input[id='phone']", phone);
        await this.page.fill("input[id='password']", password);
    }

    async getErrorText(){
        await this.page.locator("span[class='error-text']").innerText();
    }
}