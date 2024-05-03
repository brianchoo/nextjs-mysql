## Getting Started

First, set up a MySQL database:

1. Open [https://dev.mysql.com/downloads/installer/](https://dev.mysql.com/downloads/installer/) with your browser and download.
2. Open MySQL Workbench and add a new Schema and a new Table.
3. Table consist of 3 fields: id ( select Auto-increment), name and description.
4. Populate the Table with some data
5. On Database menu, click on Database > Connect to Database > Select your Local Instance > Press OK

Second, before running development server:

1. Add a .env.local file in the root folder
2. DB_HOST=your_db_localhost <br> DB_USER=your_db_user <br> DB_PASS=your_db_password <br> DB_SCHEMA=your_db_schema <br> SCHEMA_TABLE=your_schema_table

Lastly, running development server:

```bash
npm install

npm run dev

```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.
