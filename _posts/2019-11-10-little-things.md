---
layout: post
title:  "Little Things Count: What I Learned From a Tiny UI Box"
date:   2019-11-09 00:00:00 -0700
author: Gernene
categories: blog
permalink: /:categories/:title
contentsrc: /img/blog/2019-11-10-little-things
img: /blog/2019-11-10-little-things/gernene-coding.jpg
desc: Building a UI component the size of a small french fry can teach you a lot about patience, learning, and how to be a better engineer.
---

*This piece was originally written for Halp. Halp builds Slack-first ticketing tools for support teams and shares tips and tricks on its [blog](https://halp.com/blog).*

<br>

Halp’s platform supports conversational ticketing within messaging platform Slack, yet many Halp users access much of the product’s functionality through the complementary web app. Over the past four months, I’ve had the opportunity to design and implement a new feature for Halp’s web UI:

<figure>
    <img src="{{ site.url }}{{ page.contentsrc }}/ticket-view.png" alt="Halp's agent ticket view" title="Halp's agent ticket view UI">
    <figcaption>
        Halp's ticket view - where support agents can answer and edit a support ticket. 
    </figcaption>
</figure>

<br>

Pretty neat, no?

<br>

Oh, by the way…

<br>

The feature I’m referring to is this.

<br>

<figure>
    <img src="{{ site.url }}{{ page.contentsrc }}/french-fry.png" alt="Gernene's web project: a small message input box" title="Gernene's web project: a small message input box">
</figure>

<br>

That’s right—I spent four months developing a single text input.

<br>

I was introduced to this project towards the end of my summer internship at Halp. At the time, Halp’s message input/content editor didn’t yet support functionality essential intuitive conversational messaging. There wasn’t yet emoji support, bold formatting support, nor a way to “mention” or “ping” users in Slack. In short, my goal was to improve Halp’s user experience by building a content editor and parser that mimicked Slack’s message input box. 

I immediately recognized that this would be the smallest project I’d ever worked on. What I didn’t realize, however, was that this project would also, ironically, be one of the projects I would learn most from. Apparently, working on a simple text box can teach you a lot about yourself and how you can grow.

<br>

## Never underestimate the small or overlooked

It’s easy to look at something as ubiquitous as a content editor and dismiss the little box as trivial. Simply emulating Slack’s message input gave me a newfound appreciation for the attention to detail and careful planning embedded in that single component. Do you really appreciate the fact that Slack’s shortcode emoji picker is an arrow-key-traversable grid? I didn’t. Sometimes, the best design goes completely unnoticed. Yet, the deficiency of such becomes an obnoxious pain point. This lesson applies to life in general--when you stop to observe the little things, your world becomes more interesting.

<br>

## Be open to change and iteration

As the project went on, I scrapped and rebuilt my editor implementation over and over again. I experimented with different HTML elements, different JS libraries, and funky text sanitization hacks. Some trials resulted from poor research on my part. However, changes to the web editor’s design or construction often method stemmed from discoveries I made by jumping in and trying different things - to see what worked and what didn’t. Change can be extremely time-consuming but is often necessary, worthwhile, or even inevitable.

<br>

## Have a clear understanding of your objectives, use cases, and available information

I realized many approaches to the editor problem were impossible midway through their implementation, all because they relied on information I didn’t have or weren’t valid for all use cases.

The first version of the Halp editor used a textarea and couldn’t support user “mentions” because I couldn’t store both the user’s name and their id. This prompted a switch to using contentEditable so I could store data in html element properties.

After I created my first, defunct iteration of an “upgraded” web editor, one of Halp’s engineers encouraged me to write out a full spec doc comparing the Halp editor to Slack’s input box. As simple as the activity sounded, the spec sheet helped me copy the Slack editor with greater accuracy, prioritize features, construct test cases, and identify flaws in my work.

<figure>
    <img src="{{ site.url }}{{ page.contentsrc }}/gernene-coding-2.jpg" alt="Halp Engineering Intern Gernene Tan coding" title="Halp Engineering Intern Gernene Tan coding">
</figure>

<br>

## Communicate early with others about your work

An earlier version of Halp’s new editor was deployed to production near the end of my internship in August. However, there were additional security and scalability concerns held by other members of the Halp team. This prompted me to rebuild Halp’s Slack formatting parser using a client-side abstract syntax tree instead of sanitizing an html string and using React’s dangerouslySetInnerHtml. If I had consulted more individuals earlier in the project, I would have saved precious time by working towards the better implementation from the start.

<br>

## Focus on key ideas first

Learning from many of my earlier mistakes, I started my abstract syntax tree parser implementation by identifying key formatting cases the parser would need to handle and implementing methods/functions to handle the most general case. This allowed me to simplify the complicated parser problem and apply the same tools to new situations with far greater ease while creating a more maintainable and scalable system.

<br>

## Commit to the challenge

The Halp editor project pushed me to my limits in many different areas. Sometimes, I would spend days troubleshooting cursor positioning issues I didn’t understand. During the project, I made a conscious effort to find as much information on my own as I could and struggle through problems - a process that made me noticeably better at debugging and problem solving as an engineer. While it’s important to get help when needed and prioritize progress, I found that the editor project provided a chance to better the way I thought and worked. Ultimately, it’s about taking a small opportunity and making a big difference in both a product and who you become as a person.
