import { expect, test } from '@playwright/test';

export class RegistroPage {
    constructor(page) {
        this.page = page;
        this.nombreLocator = this.page.getByPlaceholder('Ej: Ana QA');
        this.emailLocator = this.page.getByLabel('email');
        this.contrasenaLocator = this.page.locator('#password');
        this.registrarBotonLocator = this.page.getByRole('button', { name: 'Registrar'})
        this.cajaDeEstadoLocator = this.page.locator('#status-box')
    }

    async navegarPaginaRegistro(url = 'http://localhost:3000/') {
        await this.page.goto(url);
    }

    async ingresarNombre(nombre) {
        await this.nombreLocator.fill(nombre);
    }

    async ingresarEmail(email) {
        await this.emailLocator.fill(email);
    }

    async ingresarContrasena(contrasena) {
        await this.contrasenaLocator.fill(contrasena);
    }

    async clickRegistrarBoton() {
        await this.registrarBotonLocator.click();
    }

    async verificarEstadoDelRegistro() {
        await expect(this.cajaDeEstadoLocator).toHaveText("Estado: Usuario Creado Exitosamente", { timeout: 5_000 }); // CAMBIAR A 10 SEGUNDOS
    }
}