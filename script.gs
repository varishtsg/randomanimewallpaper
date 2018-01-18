function getWallpaper() {

    //some variables
    var emailID = "<email address>";
    var labelName = "<label name>";                     //to sort mail in Your Gmail Sent Folder
    
    var site = SitesApp.getSite("site","<name of your google sites site>"); 
    var page = site.getChildByName("<name of your announcements page>"); 
    var mailer = GmailApp;
 
    //Define the root folder 
    var folder = DriveApp.getFolderById("<Enter the ID of the folder you wish to use here>"); 
    var subFolders = folder.getFolders();           //Gets all the subfolders from the root folder
    var folders = []; 

    //Method 1: Recursively add folders to the folders[] array 
    while(subFolders.hasNext()){ 
        var folderLog = subFolders.next(); 
        folders.push(folderLog.getId()); 
        //Logger.log(folderLog.getName());
    } 

    //Method 2: Use your own custom list of folders here 
    var folders = ['Custom list of folders separated by commas']; 

   //NOTE: Use only one of the two methods to access the folders

    //Select a random directory 
    var folderID = folders [Math.floor(Math.random() * folders.length + 1)];  

    //Generate the folder name 
    var folderName = DriveApp.getFolderById(folderID).getName(); 
 
    //store the files 
    var file = null; 

    //Load the google drive folder 
    var files = DriveApp.getFolderById(folderID).getFiles(); 
    var results = []; //get the files while(files.hasNext()){ results.push(files.next().getId()); 
}
 
//Finally get a random file 
if (results.length == 0){ 
    file = null; 
} 
else{ 
    file = results[Math.floor(Math.random() * results.length + 1)]; 
    var attachment = DriveApp.getFileById(file); 
}
 
//Making the urls
if (file) { 
    var fullUrl = "https://drive.google.com/uc?id="+ file; 
    var pubDate = Utilities.formatDate(new Date(), "GMT+5:30", "EEE, dd MMM yyyy HH:mm:ss z"); 
    var imgTag = '<img src="'+fullUrl+'" />'; 

    //Making an announcement on the specified page
    page.createAnnouncement(pubDate, imgTag); 

    //Mails a copy of the image to the specified email address
    mailer.sendEmail(emailID, attachment.getName(), "Anime Wallpaper for " + pubDate + "\nFrom the folder: " + folderName, { attachments: [attachment] , label: labelName}); 
};
