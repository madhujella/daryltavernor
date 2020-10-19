cd into project > `npm i` > `npm start`

Server runs at http://localhost:3000

uses MongoDB for data storage
Database name `company`

Endpoints:

1. `GET /company` > get all companies and details.
2. `GET /company/:company_id` > get associated company details.
3. `POST /company` > add new company and details.
4. `PUT /company/:company_id` > update details of existing company.
5. `DELETE /company/:company_id` > remove company and details.