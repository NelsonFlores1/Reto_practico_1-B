# Automatización Front-End

[![Automatización Resiliente con Latencia Aleatoria](https://github.com/NelsonFlores1/Reto_practico_1-B/actions/workflows/test-pipeline.yml/badge.svg)](https://github.com/NelsonFlores1/Reto_practico_1-B/actions/workflows/test-pipeline.yml)


Plantilla base para practicar automatización de front-end con despliegue local en Docker.

## Estructura

- `src/`: ambiente base de la aplicación web (dockerizable)

## Flujo recomendado

1. Levantar ambiente web:
   - Ir a `src/`
   - Ejecutar: `docker compose up --build -d`
   - Abrir: `http://localhost:3000`

## Objetivo pedagógico

Este módulo deja una base funcional para que los estudiantes desarrollen por su cuenta:

- Practiquen automatización resiliente con polling.
- Extiendan el patrón POM para nuevas pantallas/escenarios.
- Integren CI/CD sin modificar la base del repo principal.
