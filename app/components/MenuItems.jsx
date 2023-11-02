import Image from "next/legacy/image";

const MenuItems = ({ data }) => {
  const title = data.properties.Name.title[0].plain_text;
  const description = data.properties.Description.rich_text[0].plain_text;
  const tags = data.properties.Tags.multi_select;
  const imgSrc = data.properties.Image_URL.url;

  // google driver
  // const extractFileIdFromUrl = (url) => {
  //   const fileIdRegex = /\/d\/([a-zA-Z0-9_-]+)(?:\/|$)/;
  //   const match = url.match(fileIdRegex);
  //   return match ? match[1] : null;
  // };

  // const convertDriveLink = (url) => {
  //   const fileId = extractFileIdFromUrl(url);
  //   if (fileId) {
  //     const convertedUrl = `https://drive.google.com/uc?export=view&id=${fileId}`;
  //     return convertedUrl;
  //   } else {
  //     console.error("No valid Google Drive file found.");
  //     return null;
  //   }
  // };

  // const imgSrc = convertDriveLink(data.properties.Image_URL.url);

  return (
    <div className="flex flex-col m-3 rounded-xl w-full transition duration-300 transform border border-gray-300 hover:scale-105 hover:shadow-lg dark:border-gray-200/50 dark:hover:shadow-gray-400/40">
      <div className="rounded-t-xl responsive">
        <Image
          className="rounded-t-xl"
          src={imgSrc}
          width="100"
          height="60"
          layout="responsive"
          objectFit="cover"
          quality={100}
          alt="cover image"
        />
      </div>
      <div className="p-4 flex flex-col">
        <h1 className="text-2xl font-bold">{title}</h1>
        <h3 className="mt-4 text-xl">{description}</h3>
        <div className="flex items-start mt-2">
          {tags.map((tag) => {
            let backgroundColor;
            switch (tag.name) {
              case "Thornton":
                backgroundColor = "bg-sky-700";
                break;
              case "Warabrook":
                backgroundColor = "bg-violet-700";
                break;
              case "Maitland":
                backgroundColor = "bg-rose-700";
                break;
            }
            return (
              <h1
                className={`bg px-2 py-1 mr-2 rounded-md font-semibold w-30 ${backgroundColor}`}
                // style={{ backgroundColor: backgroundColor }}
                key={tag.id}
              >
                {tag.name}
              </h1>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MenuItems;
