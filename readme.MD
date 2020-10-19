cd into project > `npm i` > `npm start`

Server runs at http://localhost:3000

uses MongoDB for data storage
Database name `company`

Endpoints:

`GET /company` > get all companies and details.
`GET /company/:company_id` > get associated company details.
`POST /company` > add new company and details.
`PUT /company/:company_id` > update details of existing company.
`DELETE /company/:company_id` > remove company and details.