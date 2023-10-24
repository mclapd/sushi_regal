import { Client } from "@notionhq/client";

const NotionApi = async (req, res) => {
  const notionSecret = process.env.NOTION_TOKEN;
  const notionDatabaseId = process.env.NOTION_DATABASE_ID;

  const notion = new Client({ auth: notionSecret });

  if (!notionSecret || !notionDatabaseId) {
    throw new Error("Notion Error");
  }

  const query = await notion.databases.query({
    database_id: notionDatabaseId,
  });

  return query;
};

export default NotionApi;
