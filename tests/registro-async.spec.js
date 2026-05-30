import { expect, test } from '@playwright/test';
import { RegistroPage } from './../pages/RegistroPage';

test('Automatización Resiliente con Latencia Aleatoria (Sin Docker)', async ({ page }) => {
    const registroPage = new RegistroPage(page);

    await registroPage.navegarPaginaRegistro();
    await registroPage.ingresarNombre('Test user');
    await registroPage.ingresarEmail('testuser@test.com');
    await registroPage.ingresarContrasena('testPassword432');
    await registroPage.clickRegistrarBoton();
    await registroPage.verificarEstadoDelRegistro();
});