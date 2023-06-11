type SelectableDataTypes = boolean | string | number;
type SelectableDataTypesRecord = Record<string, SelectableDataTypes>;


interface DatabaseOperations {
  recordExists: (table: string, column: string, value: string) => Promise<boolean>;
  createRecord: <T>(table: string, values: T[] | T) => Promise<T>;
  updateRecord: <T>(table: string, id: number | string, values: Partial<T>) => Promise<T>;
  selectRecord: <T>(table: string, column: string, value: string) => Promise<T>;
  selectRecords: <T>(table: string, column: string, value: SelectableDataTypes) => Promise<T[]>;
  selectRecordsWithoutCondition: <T>(table: string) => Promise<T[]>;

}