# Cloudflare

## Domains

This is related to webpages hosted on Firebase and GitHub Pages. 

Tranfering a domain from Squarespace to Cloudflare includes the following steps:

1. Go to "Account Home" and click "Add Domain". This should be one you already own.
2. Select the free plan
3. Double check that the records are all present, then click "Continue to Activation"
4. This gives you two nameservers to update in Squarespace
5. In Squarespace, go to the Domain Nameservers and click "Use Custom Nameservers" and add the two nameservers it gave in the previous step then save. It will ask to disable some DNSSEC security thing. Click continue.
6. Back at Cloudflare go to the next step. It might take a few minutes to a few hours, but you should get an email saying it has been activated.
7. Once connected, you need to make sure to **Configure the SSL/TLS to Full (strict) encryption mode.** This is under the SSL/TLS section > Custom SSL/TLS > Full (Strict) option. If you don't do this you will not have a working URL.
8. Now you should be able to start the actual transfer process
9. Go to Squarespace and under the "Overview" page there will be a button at the bottom of the page that says "Request Transfer Code." Click this, then click "Unlock." It might take some time to get the email with the transfer code.
10. After some time you should have a domain transfer code emailed to you from Squarespace. In Cloudflare go to the overview page of the domain and look for "Transfer to Cloudflare". Click the link.
11. Enter the transfer code in the field provided.
12. You will need to pay to transfer the domain, so setup payment then continue. The transfer process has begun, and should take 5-ish days to complete.
13. Once you receive an email saying that the transaction has taken place, you can verify it worked by going to Cloudflare. When you go to Squarespace it should show that it is not connected. Go into the domain and disconnect from your account.

That is all that needs to be done.

## Static Hosting

Static hosting is easier to do than a GitHub workflow. It is also handy if the domain is registered there.

1. In the main dashboard, click the dropdown for "Compute (Workers)" and go to "Workers & Pages".
2. Create a new project.
3. MAKE SURE YOU ARE ON THE "PAGES" TAB, not the "Workers" tab. Import the GitHub repository that you want to connect. You may need to connect your GitHub account.
4. You will probably be re-directed to GitHub to give permissions to Cloudflare. Give it permission to a repo, then back in Cloudflare select that repo and click "Begin Setup".
5. Setup the production branch, build command, and output directory, then click "Save and Deploy".

This should get you started with hosting. You can configure things further by updating the custom domain, and how branch builds should be handled.
