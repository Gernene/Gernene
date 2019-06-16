---
layout: post
title:  "Microsoft Teams: How to Create and Upload an App (Cont.)"
date:   2019-06-13 00:00:00 -0700
author: Gernene
categories: blog
permalink: /:categories/:title
contentsrc: /img/blog/2019-06-13-teams-app-upload-2
img: /blog/2019-06-13-teams-app-upload-2/gernene-coding2.png
desc: Why Halp uploads apps using a mix of App Studio and Sideloading - and maybe you'd want to too.
---

*This piece was originally written for Halp. Halp builds Slack-first ticketing tools for support teams and shares tips and tricks on its [blog](https://halp.com/blog).*

<br>

I had just finished writing up a guide for uploading custom apps to Microsoft Teams when I realized I left something out.

While I explained how to create and upload a custom Microsoft Teams app, I never explained why I use the procedure that I do.

At first glance, the uploading steps may seem a bit unintuitive if not completely round-about. If you’re more familiar with custom Teams apps, you may have some questions like “Why can’t I just create my app in App Studio?” or “Why can’t I manually create my manifest and generate bot/app secrets in Bot Framework or Azure?”

The thing is, you may very well be able to. In fact, especially depending on the needs of your app, our App-Studio-sideload approach may not be the easiest or most efficient option. There are certain factors to consider when developing and uploading Teams apps - and I wanted to discuss them in the context of developing Halp’s Teams integration.

<br>

## Features, Functionality, and Manifest Versions
For some apps, you may be able to configure everything right within App Studio. This is great, because App Studio is easy to install for an organization - and also to use.

That said, there are certain features App Studio currently doesn’t support. One of the features I had to build for Halp’s Teams integration was a messaging extension that opened Halp’s external web app in a “task module”. The idea was to let users select different ticket forms within the module (ex: an IT ticket, facilities ticket, or a customer support ticket).

<figure>
    <img src="{{ site.url }}{{ page.contentsrc }}/messaging-extension.jpg">
</figure>

Building the feature required adding/modifying certain fields in the manifest.json. Some of said fields required a higher manifest version than the maximum version supported in App Studio at the time (1.4 vs 1.3). In addition, App Studio’s interface didn’t provide any way to customize some of these fields I had to edit.

In scenarios like this, apps must be sideloaded rather than installed via App Studio.
Sideloading refers to the process of uploading an app’s zip package to the Teams Store. This package contains a manifest.json file and any images used for the bot.

<br>

## Creating a new vs pre-existing app
Since I was generating a manifest from scratch, it made good sense to use the App Studio GUI instead of hovering over Microsoft’s manifest schema docs, trying to figure out which items I had to manually add and what types of values/children they supported.

However, now that all the interns working on Halp’s Teams integration need to use the same manifest configuration, we’ve created a “standardized” manifest file that contains configuration for messaging extensions, app configurations, and more. The only unique specifications are those that involve content like app and bot IDs (which are unique to individual development environments).

If you’re using a pre-existing manifest file with heavy customization, you might want to generate your bot and app IDs in Microsoft Azure (more on that later), plug the values into your manifest.json, and then jump straight to sideloading.

<br>

## Keeping track of everything
There are plenty of names that get thrown around regarding Teams development: BotBuilder, BotKit, Microsoft Azure, Bot Framework, Office 365… you name it.

One of the problems we encountered early during development for Halp Teams was figuring out where we were supposed to build bots. Many guides pointed towards Microsoft’s Bot Framework. At the same time, Bot Framework would insist that certain bots be migrated to Azure.

Because so much happens behind the scenes when app and bot secrets are generated in App Studio, using the values and configurations there may be a simple way to, well, make an app work.

<br>

## Summary
Ultimately, for Halp, everything boiled down to a few considerations:
What gets the job done?
What’s most efficient?
How manageable is the process?

We ended up generating all our app/bot secrets in App Studio because it’s quick, simple, and lets us bypass additional frameworks/services. We then sideload our app to allow all available functionality.

That said, there may be a better approach for your app or organization’s unique needs - and that’s great!

How will you choose to upload your app?
