--> make a empty folder like react-nursary

--> git clone https://github.com/echorohit/react-nursery.git . // make a clone of master github repositary with his url and also at the end of url make a fullstop (.) sign. with this command it will create a repositary in your local folder which you created

--> type "dir" in windows and "ls -a" in linux // it will show .git folder in react-nursary

--> type "cd .git" then "enter" and then run "dir" // after dir inside .git folder. you will see lots of folders and files

--> go back to your react-nursary folder // come out of .git folder

--> type "git branch" // it will show in which you are working master or your own branches. Current working repository will show with * like *master

--> git checkout -b manish // if you don't create your branch name create it by using "git checkout -b name" command

--> again type "git branch" // you will see that the selected branch name will be manish

--> Now add some text in README.md file

--> type "git status" // to know which files you have modified. If files were not added in git hub then it will show in red color. That means you have changed in file(s) but not added in git hub. After checking which files you unadded modified files. Now you have to add that file in git. For this type below command

--> type "git add modified_file_name" // like README.md. git add command will modified changed file in local git hub.

--> type "git status" // if you have used add command then after running this status, you will modified file(s) in green color.

--> type git commit -m 'do some description what you did in this file' //  this command will 
// If it ask you who you are then you have to tell then you have to run the below command 
git config --global user.name "Manish"
git config --global user.email "makkanimation@gmail.com"
//////////////

//after running global command now your above command (type git commit -m 'do some description what you did in this file') will run

--> then run "git push origin manish" // this will send files origin to manish branch. If there is no branch it will create in server with name.modified changes to clone url

---------------------------
// if it will ask for login password then put that login and password in login page. // This happens when you run git push command first time.
// Sometime it will give you remote fatal error. to resolve this issue you have to send your username to clone url person and take permission from clone url. 

He will send you invitation on your gmail or email address assigned on github. After accepting the invitation, the above command will run successful.
ly.

commands
// .git ignore
------------------------------------------
// On Conflit condition 
--> git checkout master // to switch to master for taking its files 
--> git pull origin master // to call all from online master branch 
--> git checkout manish // to switch to manish branch 
--> git status // to check what was modified 
--> git add modified_file_name 
--> git status // to check what was modified 
--------------------------------------------
// Merging with MELD // After installing MELD
--> git config --global merge.tool meld
 --> git config --global mergetool.meld.path "C:\Program Files (x86)\Meld\Meld.exe"
 
 --> git checkout manish
  --> change in any files like README.md 
  --> git status 
  --> git add README.md 
  --> git commit -m "changes in README"
  --> git status 
  --> git push origin manish
  --> git branch 
  --> git checkout master 
  --> git branch 
  --> git pull origin master 
  --> git checkout manish
  --> git merge master // to merge manish changes in Master
  // if you get conflit error then run MELD mergetool command 
  --> git mergetool // this will open meld. there you can easily compare and change the files 
  --> git status 
  --> git add README.md 
  --> git status 
  --> git commit -m "Merging with MAster"
  --> git push origin manish 
  
 
---------------------

pulling data from master or own branch 
--> git checkout master // if you want to pull data from master branch 
--> git status // to check selected branch status 
--> git pull origin master 
