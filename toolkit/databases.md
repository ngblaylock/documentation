# Databases

There are a lot of options out there for databases. Here are some of my favorite free/nearly free ones.

## Tabletop

::: warning
This might be going away soon. Looks like Google Sheets is going through an overhaul, and this script may not work. Check in on it when you can.
:::

Tabletop is a way to pull data from Google Sheets. Essentially, publish the sheet to the web, and it will do some magic to pull in a JSON with the spreadsheet data. It takes a little finesse to get working with Nuxt, but overall, it is a good, free tool for an easy database solution.

View project on [GitHub](https://github.com/jsoma/tabletop). 

## GSX2JSON

This is a pretty easy to use library to get data from Google Sheets as an actual API. It is read-only, so it works similar to Tabletop. The big issue with this is that the API is a HTTP, not HTTPS. This means that if your website is secured with HTTPS, then this will not work. You can host this code on a node server and run it as HTTPS, but I don't know how to do that... yet.

View project on [GitHub](https://github.com/55sketch/gsx2json).

## SheetDB

This is a good product that is very easy to use. It is a paid for monthly service, so keep that in mind. This will not only read from the spreadsheet, but will also write to it. 

[sheetdb.io](https://sheetdb.io)

## JSON Box

This is a really easy to use site to get your JSON up and live. Using this on a static site can cause a security vulnerability. Others can come in and easily overwrite your data if they know what they are doing. But, it is pretty cool for prototyping.

[jsonbox.io](https://jsonbox.io)

## Other Data Storage Options

- [Firebase Firestore](https://firebase.google.com/docs/firestore/)
- [Airtable](https://airtable.com)
- [Hasura](https://hasura.io)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)