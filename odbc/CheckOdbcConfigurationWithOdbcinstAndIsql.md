
# CheckOdbcConfigurationWithOdbcinstAndIsql

To verify the `unixODBC` installation and configuration, you can use the following commands:

## 1. List available ODBC drivers
Use the following command to list all installed ODBC drivers from the `odbcinst.ini` file:

```bash
odbcinst -q -d
```

This command will show all installed ODBC drivers.

## 2. List available DSNs
Use this command to list all Data Source Names (DSNs) from the `odbc.ini` file:

```bash
odbcinst -q -s
```

This command will display the DSNs configured in `odbc.ini`.

## 3. Test a DSN connection
To verify that a DSN is working properly, you can attempt to connect using the `isql` command:

```bash
isql DSNname username password
```

Replace `DSNname`, `username`, and `password` with the appropriate values. If the connection is successful, it will display a SQL prompt where you can run SQL queries.
