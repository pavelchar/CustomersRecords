# CustomersRecords

## Available Scripts

Remember to run both projects.

In the "vue-client" directory run:

### `yarn serve`

or

### `npm start`

In the "AspNetCore" directory run:

### `dotnet run`

please, make sure you have installed all dependencies, Sqlite local database with **testdb** database and **Customers** table. Update **ConnectionStrings** inside **appsettings.json** file with your local path to DB.

### Some notes:

- Due to some connectivity issues with backend, client uses hardcoded data set **customers** which normally would come as an API response.
- Also in real project I would:
  - Add Vue-Router for navigating between views
  - Expand some list view functionality - filter, sorting, search, etc.
  - Implement loading on scrolling or pagination
