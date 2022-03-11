# Profile Viewer with MERN (second go!)

### Backend 
- ExpressJS, NodeJS
#### Things I'm learning
- built with Express, Node, JWT, Mongoose, CORS, dotenv, express-async-handler, nodemon, bcrypt
- user can login with tokens generated from JWT and encrpyted using bcrypt
- express is built using old ES5 (not import, but require yadiyada) although i want to learn how to use ES6 but if I read correctly, its still immature for Node..
- Mongoose is used as our database to upload our users and allow users to create a profile.
- Nodemon is used for purely development QoL...
- CORS -> tbh not sure yet. Hopefully I will run into this later and update this.
- Postman
- Folder Structure.

### Frontend 
- React
#### Things I'm learning
- 100% React. I will try and not use libraries to focus purely on CSS, React, React hooks, State, etc.
- Forms (allow user login, registration)
- nav bar no libraries
- css 
- useState, 
- forms

### Things I want out of this
- Learn properly on the full stack of MERN
- Learn how authorization works (Maybe prep myself for OAuth?)
- Learn user instances (login, see user specific details)
- Learn better forms, states, CSS...
- Proper syntax, promises, async/await, how to use Express, how to create a structure (folder/project structure)
- Started learning Git Branching to work on modules rather than just a master branch like before...

### Things to avoid
- Overly designing the CSS. I want to avoid focusing on how it looks and focus more on the data.
- Advanced error checking (basic ones for now)



### Git Cheat sheet
```git init```
```git add .```
```git commit -m "message"```
(initial only) ```git remote add <url>```
```git push -u <remote name> <branch name>```                 example: ```git push -u origin master```

#### New branch? 
If you forgot to create a new branch before editing new code in, use this statement to put all your changes and create a new branch with those changes in it
```git switch -c <name of new branch>```                      example: ```git switch -c createuserlogin```

Else use this command and then do your new edits in.
```git checkout -b <name of new branch>```                    this creates a new branch and switches to it.
https://git-scm.com/book/en/v2/Git-Branching-Basic-Branching-and-Merging

#### Remove any changes since last commit?
```git reset --hard``` WARNING!!! THERES NO GOING BACK!