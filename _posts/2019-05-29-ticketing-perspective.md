---
layout: post
title:  "A Fresh Look at Support Ticketing"
date:   2019-05-29 00:00:00 -0700
author: Gernene
categories: blog
permalink: /:categories/:title
contentsrc: /img/blog/2019-05-29-ticketing-perspective
img: /blog/2019-05-29-ticketing-perspective/halp-gernene.gif
desc: I started my first internship at Halp and am reimagining the company's product in the context of my own experience.
---

*This piece was originally written for Halp. Halp builds Slack-first ticketing tools for support teams and shares tips and tricks on its [blog](https://halp.com/blog).*

<br>

Senior year in high school, I landed a summer internship with local tech startup Halp. At the time, I co-led my school’s student web support team - and one of my responsibilities was answering support emails. These were questions about site features, password reset requests, and the like.

No problem there.

Except for the fact that all three of us were working out of a single shared inbox.

One person might read an email, lack the knowledge to resolve the issue, and then wait for someone else to handle the matter. However, when the rest of us saw the email had been read, it was natural to assume someone was already working on the case. If we were syncing mail to their phone, we might not even receive an email notification.

The result?

Confusion, chaos, and lots of in-team squabbling.

The whole fiasco became such a nuisance that we programmed our own bot to send email notifications to the team’s Slack.

Sad story: *It broke.*

<figure>
    <img src="{{ site.url }}{{ page.contentsrc }}/this-is-fine.jpg">
    <figcaption>
       This is fine.
    </figcaption>
</figure>

When I heard Halp was building a Slack-based IT support ticketing system (and looking for engineering interns!), I felt an immediate connection. I thought, “Wait a minute, this is exactly what we’ve been trying to make! I applied, I interviewed, and the rest is history.

Turns out, ticketing systems like Halp have more applications than I initially imagined. As someone with only rudimentary experience in web support, it took a while to wrap my head around the idea that people were using Slack to report, say, a broken keyboard to their company’s in-house IT department. To illustrate how ticketing systems can benefit organizations in such different contexts, I decided to reimagine my high school experience with the implementation of Halp’s ticketing system.

<br>

## Setting Up

Let’s say Fairview High School decides to start using Halp. I know of three groups who could find Halp particularly useful:
- Administrators answering parent/student questions about school and activities (customer support)
- Web masters answering user questions about the website (web support)
- The school IT professionals who fix broken projectors, computers, etc. (IT support)

Fairview creates its own Slack team and makes all teachers, staff, admin, and student web masters members. The Slack team needs four channels: #administrators, #it, #web, and #general. #administrators would be restricted to administrators, #it for the school’s tech support, and #web for student web masters, like myself. #general would be available for all members (including teachers and staff). After Halp is installed to the Slack team, someone invites @Halp (the Halp bot) to each channel.

<figure>
    <img src="{{ site.url }}{{ page.contentsrc }}/slack-pic.png" style="width: 20rem;">
    <figcaption>
       Slack 
    </figcaption>
</figure>

<br>

## For IT and Internal Ticketing

The main people who need IT support are teachers and staff. If teacher Mr. N’s classroom projector has a seizure in the middle of a presentation, all he has to do is go to the #general channel and text “/halp The projector is dead in room 218” or create a message and then react with the ticket emoji. Halp will ask Mr. N to choose a form: submitting a general question, IT ticket, or web support ticket. Depending on Mr. N’s selection, Halp will show the corresponding form. When Mr. N submits the form, Halp will create a ticket for Mr. N and send a copy to the triage channel (in this case, #it).

An IT technician (the agent) will see Mr. N’s (the requester) ticket in #it and edit/close it accordingly. If the agent or requester closes/replies to a ticket, the other will receive a message from Halp to notify them.

Similarly, if Mr. N has a general or web inquiry, he can repeat the same process, choose the corresponding form, and Halp will send his ticket to the right channel.

<figure>
    <img src="{{ site.url }}{{ page.contentsrc }}/halp-demo.gif">
    <figcaption>
        A demonstration of ticket creation in Halp.
    </figcaption>
</figure>

<br>

## Customer and Web Support

Fairview High School serves many students, parents, and website users - so many that it’d be infeasible to invite everyone to the school Slack. Instead, Fairview creates a support form posted on the school website. The form would ask visitors to specify whether they have a general question about the school or if they need assistance with the website.

When the user submits the form, the form is sent to a different email address depending on whether they specified that they had a general or web inquiry. Halp then syncs the email from the inbox to the corresponding Slack channel.

When an agent (web master or admin) replies to/closes the ticket, Halp sends an email to the requester.

<figure>
    <img src="{{ site.url }}{{ page.contentsrc }}/contact-wt.png">
    <figcaption>
        Web Team's contact form which sends tickets/submissions to the email inbox. 
    </figcaption>
</figure>

<br>

## Last Words

Currently, Halp interns are exploring the possibility of integrating the product with Microsoft Teams. A lot of my enthusiasm for halping (ha) Halp stems from experiencing the inconveniences the product tries to address first-hand.

It’s kind of ironic, and that makes it kind of funny.

As a former member of a support team, I’m now developing a product to support support teams.
