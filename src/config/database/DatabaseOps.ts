import { Knex } from "knex";
import NyasaLogger from "@config/logger/NyasaLogger";

class DatabaseOps implements DatabaseOperations {
  private db: Knex;

  constructor(db: Knex) {
    this.db = db;
  }

  async recordExists(table: string, column: string, value: string): Promise<boolean> {
    try {
      const count = await this.db(table)
        .where(column, value)
        .limit(1);

      return count.length > 0;
    } catch (error) {
      NyasaLogger.info(`Error checking if record exists in table ${table}:`, error);
      throw new Error(`DATABASE_ERROR⚠️:: Database Error`); //TODO: Add custom error class
    }
  }

  async createRecord<T>(table: string, values: T[] | T): Promise<T> {

    if (!table) {
      throw new Error("Table name cannot be empty");
    }

    if (!values) {
      throw new Error("Values cannot be empty");
    }
    try {

      const results = await <T>this.db(table).insert(values).returning("*") as unknown as T[];

      return results[0] as T;
    } catch (e) {
      const error = e as Error;
      throw new Error(error.message);
    }
  }

  selectRecord<T>(table: string, column: string, value: string): Promise<T> {
    try {
      return this.db(table)
        .where(column, value)
        .first();
    } catch (error) {
      NyasaLogger.info(`Error checking if record exists in table ${table}:`, error);
      throw new Error(`DATABASE_ERROR⚠️:: Database Error`); //TODO: Add custom error class

    }
  }

  async updateRecord<T>(table: string, id: number | string, values: Partial<T>): Promise<T> {
    try {
      return <T>this.db(table)
        .where({ id })
        .update(values)
        .returning("*");

    } catch (error) {
      NyasaLogger.info(`DATABASE_ERROR⚠️:: Error updating data in table ${table}:`, error);
      throw new Error(`DATABASE_ERROR⚠️:: Database Error`); //TODO: Add custom error class

    }
  }

  selectRecords<T>(table: string, column: string, value: SelectableDataTypes): Promise<T[]> {
    try {
      return this.db(table)
        .where(column, value).returning("*");
    } catch (error) {
      NyasaLogger.info(`Error checking if record exists in table ${table}:`, error);
      throw new Error(`DATABASE_ERROR⚠️:: Error checking if record exists in table ${table}:`);
    }
  }

  selectRecordsWithoutCondition<T>(table: string): Promise<T[]> {
    try {
      return this.db(table).returning("*");
    } catch (error) {
      NyasaLogger.info(`Error checking if record exists in table ${table}:`, error);
      throw new Error(`DATABASE_ERROR⚠️:: Error checking if record exists in table ${table}:`);
    }
  }

}

export default DatabaseOps;