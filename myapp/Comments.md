This project was created as a coding challenge for a job opportunity. 
I started with this version than I decided I needed to take a different approach, but I ended up not having enough time to do it. There was a lot of information to manage and I made the mistake of not setting proper schemas and flux before starting it. The second version was with Apollo Client. Considering the time, I submitted this one but it has pretty basic functionalities and solutions.  

## Planning Phase

My Planning Phase took me around couple hours and I started by reading through the instructions and understanding what needed to be done. 
I decided to do a layout before starting coding so I wouldn't have to worry about that. 
The layout can be seen in my Figma: https://www.figma.com/file/Rp1OZgRIDuQahaqW0bubVSAz/myMovieCatalog?node-id=0%3A1
I made a mobile first design and I didn't do a desktop version. 
In the sequence, by looking at the design, I came up with the components and pages structure and made my folder structure. 

### On State Management 

I missjudged the complexity of state management in this project and I made a bad decision regarding accessing the API 'manually' in the necessary pages. 
I did the project mostly in 8 hours, because I though that it was the deadline. After I learned I could do it in more time I decided to change the project from the beggining and create a proper schema and set the server with Apollo. However, I didn't have the time to finish that and I had submit this version. 
When planning for the components, I planned on very dinamic state changes (you can get an idea by looking at the Figma Layout), but things got out of hand because I was struggling to understand the API structure everytime that I was running a function and it wasn't necessarily giving me back what I expected. 

### What would I change 

Honestly I would start from the beggining and set the environment with Apollo. There is too much data to be managed in this application. 
I would set the schema and take my time to understand the data structure in the API and how I was going to use it on my application. Because, for example, I lost a lot of time trying to make a list with the movies and failing to iterate the items because I couldn't acess the object right. In the end I had to go with a "manual version" because the data was all confused by then. 
I would also create local queries to save locally the states of the films. I had a hard time to manage how to save the information on what movie was clicked, for example. That could be solved with a local query. 

## What Works And Doesn't

The CSS was done with styled-components and it should be looking OK for mobile, because I started with it. The Desktop version is not good because I didn't prepare a design for it and when I returned to think about it, there was no time. I did some media queries there, just so you see that I am aware on how to work with it. 
The first page displays the 19 most popular movies. 
When you click in the Menu, it displays a search field and also some links for different genres. 
The search field doesn't work, because the data was chaotic and I had to organize it before I could apply a filter somewhere that would makes sense. 
Similar lists as displayed for the popular movies are displayed for the other genres. 


### How to run in your machine
The single page application was created with create-react-app and it should work when you download the repository in your machine and run the npm start. 