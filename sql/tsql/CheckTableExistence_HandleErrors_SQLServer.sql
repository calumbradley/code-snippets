-- Explanation:
-- 	•	sys.tables: This is a system view in SQL Server that contains information about all tables in the database.
-- 	•	SCHEMA_ID('YourSchemaName'): This function gets the schema ID of the specified schema. Replace 'YourSchemaName' with the appropriate schema (e.g., dbo for the default schema).
-- 	•	TRY...CATCH: This block is used to handle errors. If an error occurs within the TRY block, control is transferred to the CATCH block where the error can be handled.
-- 	•	ERROR_MESSAGE(): Returns the error message in the CATCH block.
BEGIN TRY -- Check if the table exists
IF EXISTS (
    SELECT 1
    FROM sys.tables
    WHERE name = 'YourTableName'
        AND schema_id = SCHEMA_ID('YourSchemaName')
) BEGIN PRINT 'Table exists';
END
ELSE BEGIN PRINT 'Table does not exist';
END
END TRY BEGIN CATCH -- Print error message in case of an error
PRINT 'An error occurred: ' + ERROR_MESSAGE();
END CATCH