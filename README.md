# Sushi Regal

This project was started for friends of mine who runs sushi cafes, but the details they wanted were not discussed yet, so it was not implemented.

Menus including information about menus must be added, modified, and deleted whenever necessary, and this must be managed in a database.

My friends know nothing about databases and web programming and it would be really painful for me to do applying changes every time.

So I had to find a way to do this easily. Since Notion is easy for anyone to use, they can create a database using it and write down the contents of the menu as if they were taking notes there.

I decided to make it. Photos of food were restricted due to restrictions on using photos uploaded by Notion (found on Stack Overflow).

I ended up uploading a photo to Cloudinary and sending the photo's link to NEXT.js through Notion.

I briefly paid attention to SEO, checked for problems through lint, and also paid some attention to optimizing web page loading.

> This page based on Youtuber webdecoded's ["NextJs Portfolio Tutorial"](https://www.youtube.com/watch?v=Kb1f5bvF6f4&t=125s), and would like to say thanks to her!

![sushi-regal](https://github.com/mclapd/sushi_regal/assets/10877205/57038911-5057-4906-a898-6d8d60e8fcbd)

## How to use this code

1. Download
2. npm i
3. Create .env file with followings

   `NOTION_TOKEN=`

   `NOTION_DATABASE_ID=`

4. npm run build or dev

## How to setup Notion

1. Create a Notion page
2. Create a database inline on the page
3. Create schema (e.g. Name, Tags, Description, Image_Url, ...)
4. Go to "My integrations" and create a new integration
   - Uncheck "Update content" and "Insert content"
   - Select "No user information"
5. Go to the Notion page created
6. Click "Add connections" and select the created integration

## How to link food pictures

1. Create picture folder
2. Upload food pictures
3. Double click a food picutre
4. Select "Optimazaion and Delivery" tab and copy the picutre link
5. Go to Notion page and put the link on Image_Url in the database
