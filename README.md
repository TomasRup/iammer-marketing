# Installation

After downloading the file from Themeforest, You will find SuperProps.zip file. Then unzip the SuperProps.zip and run the following commands on SuperProps folder to get started with the project.

```sh
yarn
```

```sh
// For starting GatsbyJs Server run
yarn gatsby-dev
```

GatsbyJs server will start in `localhost:8000`

```sh
// For starting NextJs Server run
yarn next-dev
```

# Explaining Containers

In the `containers` directory you will get folder for our every template. If you want to use App template. Then in the `App` directory you will get folders containing different section of the template like `Banner`, `Footer`, `Testimonial`, `Navbar` etc.

All of these containers contains regular reactjs code.

# Deployment
For deploying your final project you have to build your project first. To build the project you have to follow below procedure.


### NextJs

To build the nextjs version run below commands.

```
yarn next-build

// To check the build version locally run below command
// Not necessary if you don't want to check on your local.

yarn next-start
```

If you want to host the static html version of your nextjs project then run the below command to build static version

```
yarn next-export
```

# Deployment Support

## now.sh

### GatsbyJs

We have given now.sh deployment by default. For hosting the project in now.sh first you have to rename `gatsby-landing.now.json` to `now.json`.

You can change the name according to your project in now.json file like:

```
{
	"name": "your_project_name"
}
```

Now run below command after building the project.

```
now
```

### NextJs

For deploying nextjs on now.sh you have rename `landing.now.json` to `now.json`. Now run below command after building the project.

```
now
```

You can change the name according to your project in now.json file like:

```
{
	"name": "your_project_name"
}
```

## Firebase

### NextJs

Rename `landing.firebase.json` to `firebase.json`. Then build your project with `nexjs` build command we have discussed above.

Before running the below deploy command, you have to delete the `/public/index.html` file. and
go to `/landing/package.json`, find engines and do the following

```
"engines": {
    "node": "8"
}
```
