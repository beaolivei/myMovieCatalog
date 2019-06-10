This project was created as a coding challenge for a job opportunity. 
It was built using React, collecting data from MovieDB API - a free API with movie information. 
It is a simple structure and with it you can see lists of movies by genre and popularity. Besides that, it is possible to research for specifc movies. 

## Planning Phase

My Planning Phase took me around couple hours and I started by reading through the instructions and understanding what needed to be done. 
I decided to do a layout before starting coding so I wouldn't have to worry about that. 
The layout can be seen in my Figma: https://www.figma.com/file/Rp1OZgRIDuQahaqW0bubVSAz/myMovieCatalog?node-id=0%3A1
I made a mobile first design and I didn't do a desktop version. 
In the sequence, by looking at the design, I came up with the components and pages structure and made my folder structure. 

### On State Management 

The first version I made was very messy and I was having a hard time managing the states. I thought then that I needed to make a more complex structure and add some type of query system. 
However, as I took a step back and analysed my phase one of planning again I realized that I could simplify the structure by organizing it in a different way. I started from the beggining with a simpler approach and it worked better. 

### Improvement Points

It is a very basic application. What I would do now would be to figure out how to display other pages of the results as the user scroll down, because now it only displays the first page results. 
Also, there is probably a better way to make the genre list and direct it to a new page without creating a new page for each gener. I believe that a function inside the Router could perhaps be the way to write less code. 

### How to run in your machine
The single page application was created with create-react-app and it should work when you download the repository in your machine and run the npm start. 