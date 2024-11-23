# Eshop Backend

This is a simple backend API for an Eshop built with Node.js, Sequelize, and PostgreSQL.

Current working routes: /cart

## Installation

1. Clone the repository

2. Install dependencies

3. Start pg container:
    ```bash
   docker-compose up -d
4. Start API:
    ```bash
   start.bat
4. Load test data:
    ```bash
   npx sequelize-cli db:seed:all

## Test

1. Download the provided Insomnia-cart export file.
2. Open Insomnia and navigate to File > Import.
3. Select the Insomnia-cart file and import it.
4. Use the imported requests to test the cart endpoints.