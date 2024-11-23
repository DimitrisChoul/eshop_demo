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
