# Sushi Regal

This project was started for a friend of mine who runs sushi cafes, but the details they wanted were not discussed yet, so it was not implemented.

Menus including information about menus must be added, modified, and deleted whenever necessary, and this must be managed in a database.

My friend knows nothing about databases and web programming and it would be really painful for me to do applying changes every time.

So I had to find a way to do this easily. Since Notion is easy for anyone to use, they can create a database using it and write down the contents of the menu as if they were taking notes there.

I decided to make it. Photos of food were restricted due to restrictions on using photos uploaded by Notion (found on Stack Overflow).

I ended up uploading a photo to Cloudinary and sending the photo's link to NEXT.js through Notion.

I briefly paid attention to SEO, checked for problems through lint, and also paid some attention to optimizing web page loading.

> This page based on Youtuber webdecoded's ["NextJs Portfolio Tutorial"](https://www.youtube.com/watch?v=Kb1f5bvF6f4&t=125s), and would like to say thanks to her!

## How to use this code

1. Download
2. npm i
3. Create .env file with followings

   `NOTION_TOKEN=`

   `NOTION_DATABASE_ID=`

4. npm run build or dev
