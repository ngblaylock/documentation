# Linux Ubuntu

Repurpose an old computer that is slow with Linux. Adding Linux isn't super easy to do, but there are a ton of good YouTube tutorials for it.

## Step 1 - Create a Bootable USB

If you know someone who has a bootable USB drive with Linux, or if you already have one, you can skip this step.

In my experience, it took a few attempts with a few different programs. First thing to do is to download the Ubuntu from their [website](https://ubuntu.com/download/desktop). The downloaded file should be a `.iso` file.

Then, you will need to flash it to a disk. You need at least 4GB for this to work. The recommended software Ubuntu recommends for flashing the drive is called [Etcher](https://www.balena.io/etcher/). I tried it, and it didn't work for a few reasons. I watched a good [YouTube Tutorial](https://youtu.be/IQIaDO9nR6Y) and this guy made some software that can be downloaded on his [website](https://www.gsconrad.com). I used the "New - with GUI" version. That one worked for me.

## Step 2 - Partitian the Hard Drive

When that finally works, you either need to set up the dual boot or completely wipe the computer. I am not sure how to do it on a windows, but on a Mac, you go to Disk Utility, and partitian the drive. The YouTube tutorial mentioned earlier gives a good overview of it. I did run into problems with partitioning the drive since my version was an new mac with a different system feature. I just tried partitioning it different sizes and in different formats. When it finally partitioned, I just erased that partition to the format it needed it.

## Step 3 - Set Up Linux

When you have the flash drive and the partition, next thing to do is to set up Linux. Again, I just refered to the YouTube tutorial mentioned earlier. It was a little different setup since the version I installed was newer than his version, but overall, it worked out well, and I got it set up. The instructions were nearly spot on with eachother.

## Step 4 - Customize

There are a few things that I did to customize Linux. First, with Gnome Tweaks, download a few icons and themes. Here are the ones I did: 

- Application: Adwaita
- Cursor: WhiteSur-cursors
- Icons: WhiteSur


# Zorin OS

When I ran into problems with the Wifi on my Ubuntu, I decided to try something new. I downloaded [Zorin OS](https://zorinos.com/) (core), and the installation went a lot more smooth. Zorin is Ubuntu based, but the company builds on top of it, so I feel like they made it with a better experience. It also looks a lot more aesthetically pleasing than Ubuntu did.

## Issues and Fixes

*Issue* I had a hard time installing git

*Fix* I followed this article: https://stackoverflow.com/questions/30932121/git-installation-error-missing-installation-candidate/51819385#51819385