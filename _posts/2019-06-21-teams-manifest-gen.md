---
layout: post
title:  "MS Teams: Automating Manifest Generation"
date:   2019-06-06 00:00:00 -0700
author: Gernene
categories: blog
permalink: /:categories/:title
contentsrc: /img/blog/2019-06-06-teams-app-upload
img: /blog/2019-06-06-teams-app-upload/screenshot10.jpg
desc: Building a UI component the size of a small french fry can teach you a lot about patience, learning, and how to be a better engineer.
---

*This piece was originally written for Halp. Halp builds Slack-first ticketing tools for support teams and shares tips and tricks on its [blog](https://halp.com/blog).*

<br>

As Halp’s Microsoft Teams integration has developed, we’ve switched from installing our apps in Teams’s App Studio to a sideloading. Basically, sideloading is the process of uploading a custom Teams app by uploading said app’s zip package to the Teams Store. This zip package contains your app’s manifest.json file and your app’s icons. If you haven’t done so before, we’ve written a [two-part guide](/blog/teams-app-upload) on how to upload your own custom Microsoft Teams app.

Because manifest.json contains items that are unique to each development environment (think app and bot secrets), I automated manifest package generation to keep code consistent while speeding things along. It doesn’t have to be a difficult process, but it’ll make your tinkering much easier - and this can be applied to all sorts of projects!

<br>

## Configure environment variables

You may need to add some environment variables if you have not done so already:
APP_ID - Your Teams app ID. This ID is an arbitrary random GUID that is used to identify a specific app when it’s uploaded to Teams.
BOT_ID - The ID of your bot. This ID identifies the bot in Microsoft’s Bot Framework and Azure services.
DOMAIN - Your local tunnel domain. I’m using ngrok, which lets you access a local-running app from an ngrok.io domain. This is necessary if you want to test your local app in Teams.

These environment variables will be used to configure the generated manifest with your unique details.

We’re currently using dotenv to load environment variables. Dotenv can be installed using:

<code>
npm install dotenv
</code>

Just create a .env file in your project’s root directory and add your environment variables like:

<code>
APP_ID=&lt;your app ID&gt;<br>
BOT_ID-&lt;your bot ID&gt;<br>
DOMAIN=yourappname.ngrok.io<br>
MANIFEST_VERSION=&lt;your manifest version (ex: 1.0.0)&gt;
</code>

<br>

## Set up a manifest generation file

I created a file called manifest.js where I call any environment variables I need and store my manifest data as an object. Using the Node.js module fs, we can convert our manifest object to json and create a manifest.json file with all our data.

<script src="https://gist.github.com/Gernene/a1db6dcadf579d00a2acbb5013264810.js"></script>

<br>

## Bundle everything into a zip file

We can use gulp to create a zip file containing our generated manifest.json and any icons our app uses. You will be able to find your new app package at manifest/app.zip.

First, install the necessary dev dependencies

<code>
npm install del --save-dev<br>
npm install gulp --save-dev<br>
npm install gulp-zip --save-dev
</code>

Then add this gulpfile to your root folder:

<script src="https://gist.github.com/Gernene/6872fcbabdd6e7fb330a8f6f66bda00b.js"></script>

<br>

## Create an npm script

Add an npm script to your package.json. Now, when you run npm run generate, manifest.js will generate a new manifest.json file and gulp will bundle everything into the zip package.

Add a generate script to your package.json “scripts”

<code>
"generate": "node src/manifest.js && gulp"
</code>

Important: You must place node manifest.js before gulp. This ensures that the manifest.json file is updated before everything is bundled into a zip.

Each time you want to generate a new zip, just **change your MANIFEST_VERSION environment variable** and then run:

<code>
npm run generate
</code>

<br>

## You made it!

That’s all you have to do! 
Now, upload your package to Teams and enjoy!

<figure>
    <img src="{{ site.url }}{{ page.contentsrc }}/screenshot10.jpg">
    <figcaption>
        Upload your manifest file via the MS Teams store tab
    </figcaption>
</figure>
