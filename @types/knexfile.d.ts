export const client: string;

interface connection {
  timezone: string;
  database: string;
  host: string;
  password: string;
  port: number;
  user: string;
}

export const pool: {
  max: number
  min: number
};

export const migrations: {
  tableName: string
};
