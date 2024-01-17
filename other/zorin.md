# Zorin OS

When I ran into problems with the Wifi on my Ubuntu, I decided to try something new. I downloaded [Zorin OS](https://zorinos.com/) (core), and the installation went a lot more smooth, even using etcher. Zorin is Ubuntu based, but the company builds on top of it, so I feel like they made it with a better experience. It also looks a lot more aesthetically pleasing than Ubuntu did.

## Issues and Fixes

**Issue:** I had a hard time installing git <br />
**Fix:** I followed this [article](https://stackoverflow.com/questions/30932121/git-installation-error-missing-installation-candidate/51819385#51819385)

**Issue:** My Wifi suddenly stopped working <br />
**Fix:** This goes back to why I ditched Ubuntu. My Ubuntu's wifi stopped. This only kinda worked, as in when I was on a bootable drive testing out Zorin OS it still gave me the same problem. But I ran the code to re-install the Wifi card. `sudo apt-get install --reinstall bcmwl-kernel-source`.

**Issue:** Installing Node <br />
**Fix:** Node is in the Software store, but there are issues with permisisons, especially working with the Firebase CLI Tools. So I uninstalled Node in the Software store, then followed instructions to download [Node Version Manager](https://github.com/nvm-sh/nvm). I ran the Curl command and verified the install like it said. Then you just run the command under the Usage section. When you use NVM, you don't need to use `sudo`.