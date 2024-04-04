import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: "v2qphgxvkqfe",
    accessToken: "_EK4B8HAXXZuDT0VWxgLneyUwsSJHsxoDxf9l_Id5Fc",
    host: "preview.contentful.com"
  });

  const getAuthors = async () => {
    try {
      const entries = await client.getEntries({
        content_type: "gallery",
        select: "fields"
      });

      const sanitizedEntries = entries.items.map((item) => {
        const avatar = item.fields.avatar.fields;
        return {
          ...item.fields,
          avatar
        };
      });

      return sanitizedEntries;
    } catch (error) {
      console.log(`Error fetching authors ${error}`);
    }
  };

  return { getAuthors };
};

export default useContentful;
