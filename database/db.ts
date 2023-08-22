import { Client } from "https://deno.land/x/mysql@v2.10.2/mod.ts";
import { DATABASE, TABLE } from "../config.ts";

const client = await new Client();

client.connect({
  hostname: "127.0.0.1",
  username: "root",
  password: "root",
  db: "",
});

const run = async () => {
  // создание базы данных, если до этого вы не создавали
  await client.execute(`CREATE DATABASE IF NOT EXISTS ${DATABASE}`);

  // выбор базы данных
  await client.execute(`USE ${DATABASE}`);

  // удаление таблицы если она существовала до её создания
  await client.execute(`DROP TABLE IF EXISTS ${TABLE.CHARACTERS}`);

  // создание таблицы
  await client.execute(`
        CREATE TABLE ${TABLE.CHARACTERS} (
          id int(11) NOT NULL AUTO_INCREMENT,
          name varchar(50) NOT NULL,
          PRIMARY KEY (id)
        ) ENGINE=InnoDB DEFAULT CHARSET=utf8;
    `);
};

run();

export default client;
