---
title: About the Site
description: General information about the site
date: "2019-05-11T17:12:33.962Z"
path: "/pages/site"
tags: ["information", "meta", "gatsbyJs"]
abstract: Meta page describing the site concept, purpose and the overall idea to produce long-term content which continues to improve over time; writing methodology, original sources for the idea and overall vision as it evolves
status: draft
published: true
confidence: likely
---

This page is about the implementation details of [amgr.dev](https://amgr.dev) including writing methodology and technical details.

# The Content 

This site was born out a need to keep a long running list of personal knowledge and writing, it was also heavily inspired by the work of [Gwern Branwen](https://www.gwern.net) and this website is heavily based on his format and ideas.

While Gwern has decided to focus solely on writing long term content, I on the other hand still see value on producing shorter pieces of content designed to be short lived in relevance.

## Long Content

Blog posts overall are designed to be quickly consumed over a short time span and then [quickly](https://www.nytimes.com/2009/06/07/fashion/07blogs.html) [abandoned](https://web.archive.org/web/20140126035203/http://www.caslon.com.au/weblogprofile1.htm); today more than ever the idea of quantity over quality seems remarkably noticeable, content overall is often superficial, inaccurate or in some cases intentionally disingenuous. 

This is largely due to the fact the on the age of information overload we are always under pressure to produce more and with more frequency while expected to consume equally large quantities of information. In my opinion, short lived pieces of content still have value and can be valuable tools to quickly share ideas, generate traffic or simply be marketing tools. 

However, as of late I found myself in need to have a more permanent and extensive record of ideas, concepts and general information I want to remember, something close to a personal knowledge base; something that I and others can reference far into the future about specific subjects and concepts; on my search for tooling that would allow me to create a personal knowledge base I stumbled on the [gwern.net](https://www.gwern.net/About#long-content) website and the idea of the [Long Now](http://longnow.org/about/).

> The Long Now Foundation was established in 01996* to develop the Clock and Library projects, as well as to become the seed of a very long-term cultural institution. The Long Now Foundation hopes to provide a counterpoint to today's accelerating culture and help make long-term thinking more common. We hope to foster responsibility in the framework of the next 10,000 years.

From that idea I can build the foundation of this website, which purpose is to tackle and document big topics and projects that otherwise I would normally not tackle in **favour** of a shorter reward loop. My intent is not to showcase some extraordinary level of **genius or extremely clever** prose(both which I strongly lack) rather I want a space and framework that allows me to pour significant amounts of deep work to catalog and develop my own knowledge. 

Long Content to me is content that improves with time and that holds some level of relevance as years go by, in that sense one could classify long content using two dimensions time and depth. One important point of clarification is that the purpose of this endeavor is not to produce [monographs](https://en.wikipedia.org/wiki/Monograph) about the covered topics, at least not intentionally.

Finally, this content is intended to be consumed by me; with the assumption this might useful to someone else, this however has the side effect of the content reflection a lot of my mental dialog and feeling rambley at times.

## Collecting Ideas

At the moment, I don't have a formal method for collecting or cataloging ideas that I want to write about, and for the time being my intent is to have a loose process where I follow my interest and allow that said interest to mature, over the course of a few days.

One idea that I have found tantalizing is the overall concept of the [30 hour method](https://azeria-labs.com/the-importance-of-deep-work-the-30-hour-method-for-learning-a-new-skill/) and how I could applied as a tool to develop long content, the method roughly consists of:

- Pick a skill that can be useful to your current path
- Give it a try for minimum 30 hours (deep work!). You might not like it at first. Don’t get discouraged right away. 

Applying the same set of principles and ideas to writing could result on unexpected benefits and help me develop a strong writing muscle where I can essentially write about almost anything.

Overall, I'll expect the site to be dominated with topics that are present on my mind due either reading them or particular interest to dig deeper.

## Organizing Information

At this time I lack a formal method for collecting information, I use several note taking apps as well handwritten notes; however I have found out is extremely hard to keep good cadence with any of those systems, and one particular subject that deeply interested to explore and develop is a workflow that can help me better curate and store said information.

I collect interesting pieces of content using the [PocketApp](https://getpocket.com) said collection is currently little over 10,000 articles and pieces of information that I have collected for further reading.

## Metadata

One of the core ideas that I have maintained from the framework developed by Gwern is the metadata attached to each page, most of it is self explanatory like the created and update dates, and tags for categorization. There are however 2 tags that are not as intuitive, **status** and **confidence**.

### Confidence Tag

The idea of a confidence tag is based from [Muflax’s “epistemic state” tags](http://webcitation.org/6DuYcqyQ3); on his website Gwern uses some of the original tags like logs, emotional and fiction, while dropping the rest in favour of the use [Kesselman List of Estimative Words](https://www.gwern.net/docs/statistics/bayes/2008-kesselman.pdf) in my case, I've decided to follow the original tags as defined by Muflax, which are:

- **believed** - As far as I know, everything on that page is correct. I endorse it as-written and don’t expect there to be more than minor errors.

- **semi-believed** - The general point is fine, but there are important gaps or parts that are significantly less certain than I originally thought. A rewrite can probably save the conclusion, but be careful.

- **not believed** - It’s just wrong and I changed my mind since I wrote it. Sometimes I note why, and sometimes I disown those topics entirely.

- **speculation** - Just some random idea that I wanted to write more about so I could understand it better. I don’t take it seriously, but it was interesting enough to spend some time with it. That’s the default state.

- **fiction** - It’s complicated. Generally speaking, some aspects of it I do believe. Sometimes it represents a marginalized aspect of me. Some days I just don’t want to care about making my reasoning clear; I just want to write something. Or maybe I felt like trolling. Regardless, don’t base your world-view on fiction, please. Fiction is treason.

- **emotional** - Some cluster of ideas that got itself entangled with a complex emotional state, and I needed to externalize it to even look at it. The ideas are in no way endorsed, but writing about them is occasionally necessary (similar to fiction).

- **log** - Log entries that simply describe what happened without any judgment or reflection. I haven’t thought about it much, I just wrote it down.

I find this original tags align better with my way of thinking and my writing process, albeit I'm sure I'll comeback to review them as time goes on.


### Status Tag

The Status tag describes the state of completion of the particular page, the current possible values are:

- **notes:** Essentially a collection of notes and snippets, no real organization at this stage.
- **draft:** Has some structure and conveys a coherent thesis.
- **in progress:** A well developed version of the draft.
- **finished:** When the page is finally done.

# Technical Details

## Hosting

## Stack and Tools

While I initially tried to replicate the stack and tooling used by Gwern, I ended up selecting a different set of tools and technologies most due to the fact that his original git repo is nowhere to be found and made the process of reverse engineering extremely challenging. 

However, I was able to successfully duplicate much of the styling which I found very appealing, and have since made some minor tweaks to accommodate my own needs and preferences. I expect the styling to be drastically changed if not at all replaced as I continue to use the website on a daily basis.

In terms of technology this website is being powered by [markdown](https://en.wikipedia.org/wiki/Markdown) and [GatsbyJS](https://www.gatsbyjs.org) the site gets compiled into its static format and deployed into the selected cloud provider.

## License

This site is licensed under the [Creative Commons](https://en.wikipedia.org/wiki/Creative_Commons) [public domain (CC-0)](https://creativecommons.org/share-your-work/public-domain/cc0) license.

