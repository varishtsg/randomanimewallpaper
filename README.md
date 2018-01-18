# Random Anime Wallpaper

This is code that works behind the [RandomAnimeWallpaper website][RAW link].  
It is a site which provides random anime wallpapers (some NSFWish) from the collection of Anime Wallpapers from this [Google Drive folder][drive folder] and its sub directories.

## What do I do with it?

The wallpaper feed sub topic on the website posts direct links to the wallpapers. You may use these links to create a recipe using IFTTT and use the site's RSS feed to set your phone's wallpaper to the posted random wallpaper; or do many other things.

We also have a [sub-reddit][sub-reddit link] and a [Flickr page][flickr link] where these images are posted. So, you can use them as well.

I'll see what I can do for other platforms like Twitter or Imgur. If you would like to suggest a wallpaper to be added to the collection I'll post a link to a form or something soon.

## How the website works

- The website selects a random image from the specified google drive folder/folders and posts it.  
The sole purpose of doing this is to get a make a rss feed out of it.
- Once you have a rss feed up and running, you can play around with it as you please - post it to flickr, reddit, blogger and a lot of places.  
The RSS feed service in IFTTT is very helpful and can be used to do some creative stuff.
- Now, to get the images to be pushed out as an RSS feed, you use the [google apps script][script].  
Note that in theory, it should work with a new version of google sites. But I haven't tested that as it works fine without errors in the classic version of the sites.
- Before installing this script, do create an announcement page in your google sites site and note down the name of the page.  
This is done so that we can push the URLs to the images on a separate page and get that sweet RSS feed from that page. You may experiment with different pages. However, announcements template kinda works the best.

### Note:

You may have noticed that in the last part of the code I send out a mail.  
After a lot trial and error, I found that using IFTTT to post the image to reddit worked fine, but the image used to expire after a couple of hours.  
The image linked worked fine when accessing from the site page itself, however the image wouldn't open when trying to open from reddit. 

My next plan of action was to post to flickr or imgur or wherever the image could be accessed publicly and easily at all times, using IFTTT. But then this would give me a time penalty ranging from anywhere between 5 mins to 25 mins.  
Okay, since we aren't designing a time critical application, this should not bother many people, but I wanted to reduce it even more. 

Thats when I realised that we can post to Flickr using email as well and email will be sent almost instantly whenever this script is run.  
Thus reducing the time penalty to a few seconds and maximum of 1 minute. And thus I've included the mailer.  
You may remove the mailer completely and this should work fine and still give you a rss feed on the announcements page.  
This image from flickr can be converted to RSS and/or be posted to reddit etc.

#### Hope this guide helps you. If you have any queries or suggestions, feel free to message me on [Twitter][twitter link].

[RAW link]: https://sites.google.com/site/randomwallpapergenerator/home
[drive folder]: https://drive.google.com/drive/folders/0B7tDwmzUKv8HOWlLYUt0U1UtN3M
[sub-reddit link]: https://www.reddit.com/r/RandomAnimeWallpapers/
[flickr link]: https://www.flickr.com/photos/senpaivg/
[script]: script.gs
[twitter link]: https://twitter.com/senpaivg
