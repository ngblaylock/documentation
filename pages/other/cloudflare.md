# Cloudflare

## Domains

This is related to webpages hosted on Firebase and GitHub Pages. 

Tranfering a domain from Squarespace to Cloudflare includes the following steps:

1. Go to "Account Home" and click "Add Domain". This should be one you already own.
2. Select the free plan
3. Double check that the records are all present, then click "Continue to Activation"
4. This gives you two nameservers to update in Squarespace
5. In Squarespace, go to the Domain Nameservers. It will ask to disable some DNSSEC security thing. Click yes.
6. Once connected, you need to make sure to **Configure the SSL/TLS to Full (strict) encryption mode.** If not, you will not have a working URL.
7. Now you should be able to start the actual transfer process
8. Go to Squarespace and under the "Overview" page there will be a button at the bottom of the page that says "Request Transfer Code." Click this, then click "Unlock." It might take some time to get the email with the transfer code.
