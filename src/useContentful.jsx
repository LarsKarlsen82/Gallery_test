import { createClient } from "contentful";

const useContentful = () => {
  const client = createClient({
    space: import.meta.env.VITE_PUBLIC_SPACE_ID,
    accessToken: import.meta.env.VITE_PUBLIC_ACCESS_TOKEN,
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
