# RS School REST service  

## Prerequisites  

- Git - [Download & Install Git](https://git-scm.com/downloads).
- Node.js - [Download & Install Node.js](https://nodejs.org/en/download/) and the npm package manager.
- Docker Desktop - [Download & Install Docker Desktop](https://docs.docker.com/get-docker/) for Windows, Mac or Linux  

## Download and install rest-service application  

### Downloading application
```
git clone {repository URL}
```
### Installing NPM modules
```
npm install
```
### Building application
```
npm run build
```
### Building Docker images
```
docker compose build
```
### Creating and starting Docker containers
```
docker compose up
```  
  

After starting containers the rest-service app will be available on specified port (4000 as default).  

The App connected to postgres database.  On first launch, the application creates the database structure from the migration file located in the ./src/migration  

Database files will be located in the local folder ./database  

You can open in your browser OpenAPI documentation by typing http://localhost:4000/doc/.  

(For more information about OpenAPI/Swagger please visit https://swagger.io/.)  

## Testing application  

After application running open new terminal and enter:  

To run all tests

```
npm run test
```

To run only one of all test suites (users, boards or tasks)

```
npm run test <suite name>
```  
  
  
### Auto-fix and format

```
npm run lint
```  
  

### Debugging in VSCode  

Press <kbd>F5</kbd> to debug.

For more information, visit: https://code.visualstudio.com/docs/editor/debugging
