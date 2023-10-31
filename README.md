# 300WFinal
BEFORE YOU START CODING, CLONE THE GIT REPOSITORY FIRST. 
AND **EVERY TIME YOU TURN ON YOUR PC DO “git pull” BEFORE YOU START WORKING** OR ELSE YOU WILL **mess up EVERYTHING.**
**Everything you code will be messed up if you code on an out of date version of the project,** so do “git pull” before you code anything.

To clone the git repository, you’ll need to use the SSH link in the github repository
![ssh in github instead of https](https://drive.google.com/file/d/1js0TsxfZkBTfeX5lInMAypd3yMxSNECW/view?usp=drive_link)

We use sparse-checkout, it's a way of setting what folder in the repository we want to pull
![sparse checkout example commands](https://drive.google.com/file/d/14XjXNz7pp6gJ0o5T-8DFWhoPCUBmXg9v/view?usp=drive_link)

Then after this is done, which it should be by the time you guys see the servers, just do a regular “git pull” every time you want the server to pull down the code in the github. 

## Frontend Deployment

Do “npm run build” inside of the front folder on your own computer first. It’ll make a “build” folder in there with static html and JS files. Then do “git add .” and do a git commit to the github repo.
ON THE SERVER do a “git pull”
Then run this command:
sudo cp -r /home/ubuntu/300WFinal/front/build/* /var/www/html/
We use NGINX to serve the front end static files. The default location that NGINX looks for the files to serve is /var/www/html/.
This command takes the build folder’s files and copies them into /var/www/html/.

## Backend Deployment
idk yet

## Database Deployment
idk yet


Kept you waiting, huh?

![Snake Smile from Metal Gear Solid 3: Snake Eater](https://i.pinimg.com/736x/3d/6d/c2/3d6dc2991602a1bab0cece2278e6d8bf.jpg)