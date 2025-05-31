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

## Static Hosting

Static hosting is easier to do than a GitHub workflow. It is also handy if the domain is registered there.

1. In the main dashboard, click the dropdown for "Compute (Workers)" and go to "Workers & Pages".
2. Create a new project.
3. MAKE SURE YOU ARE ON THE "PAGES" TAB, not the "Workers" tab. Import the GitHub repository that you want to connect. You may need to connect your GitHub account.
4. You will probably be re-directed to GitHub to give permissions to Cloudflare. Give it permission to a repo, then back in Cloudflare select that repo and click "Begin Setup".
5. Setup the production branch, build command, and output directory, then click "Save and Deploy".

This should get you started with hosting. You can configure things further by updating the custom domain, and how branch builds should be handled.