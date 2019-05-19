---
title: LSD microdosing RCT
description: Self-experiment with sub-psychedelic doses of LSD; no benefit
date: "2017-07-12T17:12:33.962Z"
tags: nootropics, psychology, experiments, predictions, statistics, Silk Road
status: finished
belief: likely
path: "/essay/example-essay"
abstract: History, background, visiting, ordering, using, & analyzing the drug market Silk Road 1
---

> Some early experimental studies with LSD suggested that doses of LSD too small to cause any noticeable effects may improve mood and creativity. Prompted by recent discussion of this claim and the purely anecdotal subsequent evidence for it, I decided to run a well-powered randomized blind trial of 3-day LSD microdoses from September 2012 to March 2013. No beneficial effects reached statistical-significance and there were worrisome negative trends. LSD microdosing did not help me.

[Intrigued](#microdosing) by old scientific results & many positive anecdotes since, I experimented with "microdosing" [LSD](!Wikipedia "Lysergic acid diethylamide") - taking doses ~10μg, far below the level at which it causes its famous effects. At this dosage, the anecdotes claim the usual generic spectrum of positive effects on mood, depression, ability to do work, etc. After researching the matter a bit, I discovered that as far as I could tell, since the original experiment in the 1960s, no one had ever done a blind or even a randomized self-experiment on it.

The self-experiment was simple: I calculated [how many doses I needed](#power-calculation) and whether the experiment was [worth running](#voi), ordered 2 250μg tabs off [Silk Road](Silk Road#lsd-case-study), [designed](#design) the experiment (I dissolved one in distilled water, put the solution in one jar & tap water in the other, and took them in pairs of 3-day blocks), ran it, and analyzed it.

The [results of my pre-specified analysis](#testing-the-metrics):

1. Sleep (using my [Zeo]()):

    - latency: none (_p_=0.49)
    - total sleep: none (_p_=0.12)
    - number of awakenings: none (_p_=0.25)
    - morning feel: increased (_p_=0.011)

        There is an increase in "Morning Feel" from 2.6 to 2.9, _d_=0.42; correcting for performing 7 different tests, this result is not statistically-significant (it does not survive a [Bonferroni correction](!Wikipedia) (since $0.011 > \frac{0.05}{7}$) nor the [_q_-value approach](Zeo#fn7) to family-wise correction).
2. [Mnemosyne](Spaced repetition) flashcard scores: none (_p_=0.68)
3. Mood/productivity: none (_d_=-0.18; _p_=0.27)
4. Creativity: none (_d_=-0.19; _p_=0.28)

I concluded that if anything, the LSD microdosing may have done the opposite of what I wanted.

Given that this is the opposite of almost all microdosing anecdotes and this pattern suggests [placebo](!Wikipedia) & [expectancy effects](!Wikipedia "Subject-expectancy effect"), I strongly urge any future self-experimenters to up their methodological rigor, and especially to blind their doses to avoid both placebo & [nocebo](!Wikipedia) effects. If they fear the consequences of publication, I am willing to host their writeup on this page; [my PGP key is available](Links#contact).

# Background

I've long been interested in psychedelics for the insights they may offer into our brains:

> "...When I did 2 hits of acid, I had the exact opposite experience of seeing God. The fact that such a tiny amount of a mere chemical could effect my 'soul' so profoundly was proof positive that the soul is completely material. I already believed this intellectually, but this experience solidified this knowledge into my very being. So personally, I would recommended experimenting with a psychedelic or two for those who wish to study Philosophy." --[darius42](https://news.ycombinator.com/item?id=5210978)

But I'd never actually tried any. Besides being illegal and relatively expensive or hard to get, proponents have been clear that a "good trip" requires someone experienced to watch over you and an appropriate environment - neither of which I had available. So it'd always been something to do later, and pure curiosity about the experience was not enough to break my inertia.

I say "curiosity about the experience" because I am dubious about the actual epistemic value of the psychedelic experience; my interest, like [William James](http://www.theatlantic.com/past/issues/96may/nitrous/nitrous.htm "The Nitrous Oxide Philosopher: Do drugs make religious experience possible? They did for James and for other philosopher-mystics of his day. James's experiments with psychoactive drugs raise difficult questions about belief and its conditions"), is in what I can learn from the experience about myself and religion. The claims made by psychonauts are frequently extravagant and unjustified; the tangible benefits are either unrelated to the truth of the experience (such as lessened anxiety of death), purely internal (what one wants to do with one's life), or true but unrelated to the claims inferred from the experience and verifiable in a non-psychedelic context (the invention of [PCR](!Wikipedia)). If one feels at one with everything in the universe and decides to devote his life to feeding starving children, his devotion to charity proves nothing about the universe, and even if the experience were true at face-value, that would not be enough either - if one felt the opposite, that the universe were not one, would that somehow make the starving children OK? [Sam Harris](http://www.samharris.org/blog/item/drugs-and-the-meaning-of-life "'Drugs and the Meaning of Life', 5 July 2011") takes an approach very much like mine:

> The mere existence of psychedelics would seem to establish the material basis of mental and spiritual life beyond any doubt - for the introduction of these substances into the brain is the obvious cause of any numinous apocalypse that follows. It is possible, however, if not actually plausible, to seize this datum from the other end and argue, and [Aldous Huxley](!Wikipedia) did in his classic essay, _[The Doors of Perception](!Wikipedia)_, that the primary function of the brain could be eliminative: its purpose could be to prevent some vast, transpersonal dimension of mind from flooding consciousness, thereby allowing apes like ourselves to make their way in the world without being dazzled at every step by visionary phenomena irrelevant to their survival. Huxley thought that if the brain were a kind of "reducing valve" for "Mind at Large," this would explain the efficacy of psychedelics: They could simply be a material means of opening the tap.
>
> ...Unfortunately, Huxley was operating under the erroneous assumption that psychedelics decrease brain activity. However, modern techniques of neuroimaging have shown that these drugs tend to increase activity in many regions of the cortex (and in subcortical structures as well) [Note 1/24/12: a recent study on [psilocybin](!Wikipedia) actually lends some support to Huxley's view. --SH] . Still, the action of these drugs does not rule out dualism, or the existence of realms of mind beyond the brain - but then nothing does. This is one of the problems with views of this kind: They appear to be unfalsifiable. [Physicalism, by contrast, could be easily falsified. If science ever established the existence of ghosts, or reincarnation, or any other phenomenon which would place the human mind (in whole or in part) outside the brain, physicalism would be dead. The fact that dualists can never say what would count as evidence against their views makes this ancient philosophical position very difficult to distinguish from religious faith.]
>
> Of course, the brain does filter an extraordinary amount of information from consciousness. And, like many who have taken these drugs, I can attest that psychedelics certainly throw open the gates. Needless to say, positing the existence of a "Mind at Large" is more tempting in some states of consciousness than in others. And the question of which view of reality we should privilege is, at times, worth considering. But these drugs can also produce mental states that are best viewed in clinical terms as forms of psychosis. As a general matter, I believe we should be very slow to make conclusions about the nature of the cosmos based upon inner experience - no matter how profound these experiences seem.

The potential "mystical experience" or "encounter with God" has considerable interest for me, though. Even back when I was a very young child, I have always [been atheistic](Mistakes#religion); at first, because religions didn't seem like very good explanations of the world, but then because I read through various scriptures & the Bible & higher Biblical criticism & philosophy books without finding anything convincing^[As opposed to other things, like beautiful - I am still an admirer of the Old Testament's [Wisdom literature](!Wikipedia).]. I always wondered whether my disbelief was due to *reasoned grounds* as I claimed, or a simple lack of the right *experiences*: other people seem to have mystical experiences and find prayer satisfactory and believe fervently, and I sporadically hear of [converts](!Wikipedia "List of converts to Christianity from atheism") who have "road to Damascus" experiences (like SF author [John C. Wright](!Wikipedia "John C. Wright (author)") hallucinating and converting to Catholicism [after a heart attack](http://johncwright.livejournal.com/117818.html)). Sporadic hallucinations are a poor ground for belief, as a mental hospital demonstrates, but nevertheless they are quite convincing; it seems that for many, seeing really is believing. Many years later, I have yet to have a mystical or religious or ["peak"](!Wikipedia "Peak experience") experience which could either convert me or leave me unmoved, and thus empirically settle the issue as to why I am an atheist - absence of experience, or reasoned belief? Hence, it is tempting to force the issue. (If you have a psilocybin-induced hallucination of God and then become a theist, that's a good piece of evidence that stuff like the argument from evil or argument from silence *weren't* why you were an atheist. And so if you were claiming previously that they were, you were either lying or badly mistaken.) [Thomas Nagel](!Wikipedia): (["A Philosopher Defends Religion"](http://www.nybooks.com/articles/archives/2012/sep/27/philosopher-defends-religion/?pagination=false))

> It is illuminating to have the starkness of the opposition between [Plantinga's](!Wikipedia "Alvin Plantinga") theism and the secular outlook so clearly explained. My instinctively atheistic perspective implies that if I ever found myself flooded with the conviction that what the [Nicene Creed](!Wikipedia) says is true, the most likely explanation would be that I was losing my mind, not that I was being granted the gift of faith. From Plantinga's point of view, by contrast, I suffer from a kind of spiritual blindness from which I am unwilling to be cured.

Everything I've heard or read is consistent with what such experiences seem to be: the brain in a very unusual state, malfunctioning in many respects and perhaps functioning better in a few other respects. No one expects to discover a new truth about the universe in the throes of _delirium tremens_ or amphetamine psychosis - isn't it parsimonious to extend this to psychedelics as well? If there were some 'truthiness' to the states, I had to think: of the many thousands of mind-altering substances investigated over the centuries, it would be quite remarkable if the few which grant access to new truths were also the very same ones which produce pleasant or enjoyable trips!

So the trip itself is of little direct value, but the 3 categories of effects I outlined are. Everyone talks about Openness (see later) and creativity in relation to psychedelics (eg. [_Wired_](https://web.archive.org/web/20140106080448/http://www.wired.com/science/discoveries/news/2006/01/70015?currentPage=all "LSD: The Geek's Wonder Drug?")/[discussion](https://news.ycombinator.com/item?id=2497360)). I would offer a more concrete analogy: creativity is a kind of optimization activity like [simulated annealing](!Wikipedia) in which one searches through a vast number of possibilities for the right thing. (This seems to be similar to [James L. Kent's views](https://www.erowid.org/library/review/review.php?p=317 "Review: _Psychedelic Information Theory: Shamanism in the Age of Reason_, by James L. Kent").) In simulated annealing, we can think of the possibilities as a [fitness landscape](!Wikipedia) dotted with mountains and valleys, and we are trying to find the lowest point; we start at random points, and jump around randomly and see how low we wind up. How big are our jumps? This is the "temperature". The temperature starts high, since we may be a very long way away from the lowest point, but as we get lower and closer to the sea, we turn down the temperature and start making small jumps so we don't jump right back onto a mountain or something like that. (Imagine looking through a dictionary: you flip through whole chunks to get the letter right, then you start flipping through pages so you don't overshoot, and finally you read through an individual page.) The temperature has to change, or we will waste a lot of time and may never find our target: if the temperature is always high, no sooner have we found an excellent candidate than we have jumped half a continent away, but if it's always low, we will literally inch around and not find the low point a few miles away. Simulated annealing itself has been applied to neural networks, so it may be more than just an analogy to say our brains do something similar. At first you brainstorm, generating myriads of disparate ideas, but you focus on a few candidates, brainstorm variants, and begin carefully fine-tuning them. You hope you don't spend too much time tinkering that you miss your deadline, but also that you don't spend too little time brainstorming that you miss some brilliant elegant solution.

And LSD? Perhaps doses large enough that you become so 'creative' that you start seeing what is not there are analogous to turning the temperature up a thousand degrees: the frantic annealing may hit upon some remote undiscovered great idea (eg. PCR) but this will usually just throw away all one's current good results in favor of some random dreck. Genuine thought and breakthroughs are the pinnacle of human thought, achieved after endless labor and dependent on many dead-ends, bits of knowledge, and intuited truths; randomness seems like it would usually make things much worse[^Charlton], and in general, pharmacological interventions [have little luck improving things](Drug heuristics). Think of dreams: 4 or 5 a night, hugely random - and only occasionally if ever do they deliver real insight or a valid idea. Isn't it a standard joke that you discover the secret of the universe or the perfect song in a dream, wake up & write it down, and in the morning it is worthless? It's probably no accident that dreams so rarely produce useful insights and also parts of the brain - particularly parts of the prefrontal cortex - are [shut down](DNB FAQ#lucid-dreaming) or operating differently.

[^Charlton]: [Bruce Charlton](!Wikipedia) in [_Psychiatry and the Human Condition_](http://www.amazon.com/Psychiatry-Human-Condition-Bruce-Charlton/dp/1857753143/) on psychedelics:

    > Creativity is here seen [by psychedelic proponents] as something to be liberated. It is sometimes claimed that by rendering apparently peak experiences more common and controllable, drugs may allow the attainment of a 'higher' form of human evolution. Sorry to be boring, but: Evolutionary theory takes exactly the opposite view to [Aldous] Huxley - instead of humans 'naturally' knowing everything and evolving the ability to experience less; biology sees the starting point in insentient, inert matter and regards the capacity to perceive anything at all as having evolved gradually over many millions of years. Knowledge is certainly not out there waiting to burst in on our minds as soon as intoxication lets it through. Rather, the capacity to attain knowledge, to perceive, and to be aware of our perceptions, are all adaptations that have been painstakingly constructed over an evolutionary timescale. Neither is scientific creativity spontaneous, natural or pre-formed; it is attained by constructive human striving - something made, not a spontaneous fact of nature. No scientific breakthroughs have ever come from ignorant and uneducated prodigies who happened to be intoxicated. Neither does creativity in science emerge like a beautiful butterfly breaking from a chrysalis of social convention, rather it is something constructed by efforts and gifts (and luck) - including the efforts and gifts of colleagues. Science requires knowledge and skill as well as the right state of mind.

> "Once in my life I had a mathematical dream which proved correct. I was twenty years old. I thought, my God, this is wonderful, I won't have to work, it will all come in dreams! But it never happened again." --[Stanislaw Ulam](!Wikipedia)^[January 14, 1974, in "Conversations with Gian-Carlo Rota"; as quoted on pg262  of [_Turing's Cathedral_](http://www.amazon.com/Turings-Cathedral-Origins-Digital-Universe/dp/1400075998/) (2012) by [George Dyson](!Wikipedia "George Dyson (science historian)")][^Hadamard]

[^Hadamard]: Although Ulam may be exceptional in having even one dream. [Jacques Hadamard](!Wikipedia), [_An Essay on the Psychology of Invention in the Mathematical Field_](https://archive.org/details/eassayonthepsych006281mbp) (1945), pg27

    > Let us come to mathematicians. One of them, Maillet, started a first inquiry as to their methods of work. One famous question, in particular, was already raised by him that of the "mathematical dream", it having been suggested often that the solution of problems that have defied investigation may appear in dreams. Though not asserting the absolute non-existence of "mathematical dreams," Maillet's inquiry shows that they cannot be considered as having a serious significance. Only one remarkable observation is reported by the prominent American mathematician, Leonard Eugene Dickson, who can positively assert its accuracy....Except for that very curious case, most of the 69 correspondents who answered Maillet on that question never experienced any mathematical dream (I never did) or, in that line, dreamed of wholly absurd things, or were unable to state precisely the question they happened to dream of. Five dreamed of quite naive arguments. There is one more positive answer; but it is difficult to take account of it, as its author remains anonymous.

# Microdosing

But if we turned up the temperature just a few degrees, we *might* wind up burning our cake, but then again we might cook it to perfection. Theoretical speculation, of course, but with some plausibility to it.

The [old research literature](https://www.erowid.org/chemicals/lsd/lsd_dose1.shtml "Abstracts regarding low doses of LSD (Less than 50μg)") is mixed but suggests that LSD doesn't do much under 20μg. Nonetheless, when I read ["The Heretic"](http://www.themorningnews.org/article/the-heretic) about [James Fadiman](http://www.jamesfadiman.com/)'s ideas about "micro-dosing" and an [earlier interview](http://www.bestofyoutoday.com/ask-nutrition-expert/learn-what-effects-low-dosage-psychedelic-have-your-mental-health) as well as [_Vice_](http://motherboard.vice.com/blog/can-a-low-dose-go-a-long-way  "Can a Low Dose Go a Long Way?") piece (I later read his _[The Psychedelic Explorer's Guide](http://www.amazon.com/The-Psychedelic-Explorers-Guide-Therapeutic/dp/1594774021/)_), and that it seemed to work well for a variety of people, the old musings came back to mind. A psychedelic LSD dose is 100μg+, and Fadiman's recommended micro-doses 10μg. That puts micro-doses well into the sub-hallucinatory range, and removes most of my safety concerns (since even if there were problems with chronic LSD consumption, "the dose makes the poison"). Certainly it sounds good:

> "Micro-dosing turns out to be a totally different world," Fadiman extolled. "As someone said, the rocks don't glow, even a little bit. But what many people are reporting is, at the end of the day, they say, 'That was a really good day.' You know, that kind of day when things kind of work. You're doing a task you normally couldn't stand for two hours, but you do it for three or four. You eat properly. Maybe you do one more set of reps. Just a good day. That seems to be what we're discovering." Elsewhere Fadiman has been more specific about the logbooks he's received. One physician reported that micro-dosing got him "in touch with a deep place of ease and beauty." A vocalist said she could better hear and channel music. In general, study participants functioned normally in their work and relationships, Fadiman has said, but with increased focus, creativity, and emotional clarity. Until he releases his data archive in a comprehensive manner, it is, of course, not possible to scrutinize the validity of his claim..."I just got a report from someone who did this for six weeks," Fadiman said. "And his question to me was, 'Is there any reason to stop?'" More laughter throughout the hall, another adjustment of bifocals...it also allows him to follow the recommendation of a longtime, now-deceased friend, [Albert Hofmann](!Wikipedia), who, according to Fadiman, called micro-dosing "the most under-researched area of psychedelics."

Fadiman was part of the team which ran the [Psychedelics in problem-solving experiment](!Wikipedia), administering 50μg doses of LSD - close, albeit not identical, to microdosing levels - to people working on unsolved technical problems, while they tried thinking about the problems again; they apparently often solved them. There are many fans of LSD microdosing in the relevant [Bluelight.ru](http://www.bluelight.ru/vb/threads/266623-The-Low-Dose-LSD-Appreciation-Thread) & [Longecity](http://www.longecity.org/forum/topic/51969-low-dose-lsd-as-a-nootropic/) & Reddit [1](http://www.reddit.com/r/Psychonaut/comments/1n93n4/the_lsd_microdosing_experiment/)/[2](http://www.reddit.com/r/Nootropics/comments/1n99k3/the_lsd_microdosing_experiment_xpost_rpsychonaut/)/[3](http://www.reddit.com/r/Drugs/comments/1ok9iy/another_lsd_microdosing_experiment/)/[4](http://www.reddit.com/r/LSD/comments/1m3jj1/the_most_amazing_effect_during_daily_small_doses/) & [Silk Road forum](/docs/sr/2013-10-16-lsdmicrodosing.maff) discussions (though others [wonder about tolerance](http://www.drugs-forum.com/forum/showthread.php?t=116671) after repeated microdoses). Further, LSD used to be popular in Silicon Valley and used by many computing pioneers (see _[What the Dormouse Said](!Wikipedia)_, Markoff 2005).

None of this, however is particularly strong evidence. To address them in order:

- the original experiment had unavoidable flaws^[I don't blame them for this, since they were abruptly interrupted by a higher power before they could do anything but a pilot experiment (and barely even that). But the flaws can't be ignored or wished away.]; for example:

    - the problem-solving experiment's _n_ was small; drawing estimates from the [methodological, statistical, & meta-analytic literature](DNB FAQ#flaws-in-mainstream-science-and-psychology), we'd expect something like <17% chance the experiment would replicate
    - and the active placebo introduces concerns of its own (perhaps [mescaline](!Wikipedia) impedes problem solving rather than LSD helping)
- subsequent anecdotes all are neither random nor blind:

    - we know placebo effects can be extremely powerful - see the [Shulgin orange juice story](http://www.nytimes.com/2005/01/30/magazine/30ECSTASY.html?pagewanted=print&position=&_r=0 "Dr. Ecstasy") - and that water can be mistaken for LSD ([Abramson et al 1955](/docs/1955-abramson.pdf "Lysergic Acid Diethylamide (LSD-25): Xv. the Effects Produced By Substitution of a Tap Water Placebo"), [Linton & Langs 1962](/docs/1962-linton.pdf "Placebo Reactions in a Study of Lysergic Acid Diethylamide (LSD-25)"))
    - the anecdotes typically are using smaller than 50μg doses
    - they claim unquantified benefits
    - psychedelic users are not famous for their reliable anecdotes & critical thinking
    - haphazard procedures introducing arbitrarily large systematic biases
    - the lack of randomization forbids causal interpretation (correlation≠causation)

In general, I find it curious that while supposedly something like 5-10% of the American population has at some time taken a psychedelic and we know many tech figures have used it, very few specific breakthroughs like PCR can be credited to LSD use; of course many would not admit to LSD helping them out, but given the claimed large effect size and how many people have used LSD, there should still be more than the handful of documented examples.

# Experiment
## Design

LSD is an acute water-soluble drug. This makes dosing easy: take a single dose of 250μg, dissolve it in some water (refrigerated), and then consume 1/10th for a dose of 25μg. Some online anecdotes microdose daily, while others microdose every 2 or 3 days.

I ordered 2 tabs [from VitaCat on Silk Road](Silk Road#lsd-case-study):

![2 250μg doses of LSD on "Mayan" blotter paper, shipped from Germany in a sealed plastic sheet](/images/silkroad/lsd/vitacat-frontback.jpg)

He shipped them in an envelope in an airtight sealed plastic sheet; I kept them refrigerated, underneath a box to block light, and kept sealed until I opened it and used the first one for a trip. The remaining tab was kept in the refrigerator until a week later. (Given that people routinely stash tabs in books and other places, I doubt that the week did it much damage.) The next morning, I added 25ml of distilled water^[LSD is neutralized by [even small amounts of chlorine](!Wikipedia "LSD#Reactivity and degradation"); later I learned chlorine is not added to my well, so this precaution was unnecessary.] into an airtight mason jar, dropped the blotter in, shook vigorously, refrigerated overnight, and removed the blotter the next afternoon.

Self-blinding a liquid is as straightforward as [self-blinding pills](Nootropics#blinding-yourself): 2 opaque containers (one marked; both kept in refrigerator) into which a milliliter dropper puts a dose of LSD water and a dose of regular water.

This suggests the following design: a randomized dose on day 1, followed by days 2 and 3 off, then on day 4, drinking the second container; on day 7, examine the containers recording whether active/placebo and finally, starting over as day 1 of a new pair of 3-day blocks.  The power analysis (see next section) indicates >19 active days are desirable, so 190+μg are needed; this can be diluted into an evenly divisible amount like 19ml of water and then 1ml extracted each day. 3 days seems to be the maximum that most microdosing enthusiasts consider a dose active for, so there shouldn't be issues with tolerance or carryover. I ran this design by Dr. Fadiman, who did not object. (This design can be seen as a [crossover study](!Wikipedia): [repeated measures](!Wikipedia "Repeated measures design") of the same subject serving as their own control. No washout period to protect against carry-over, though, since I did not expect noticeable effects 4 days out from a microdose, and my later analysis suggests there was none.)

VitaCat's Mayan tabs were advertised as 250μg, and I diluted the remaining tab into 20ml of water, so nominally each 1ml dose would have 12.5μg of LSD, which is at least twice the level (5μg) a number of people have claimed benefits from microdosing, so even if the tab was overstated by 100μg, the dose should still be enough to produce any effects.

I took one additional step: temporarily suspending my [lithium self-experiment](Nootropics#lithium-experiment). There are many mostly-negative opinions online about the interactions of LSD & lithium, although most commenters seem to be talking about *therapeutic* doses of lithium - which are 10-15x larger than the 10mg of lithium orotate which I may have been taking if it wasn't a placebo week. (It later turned out that it was indeed a placebo week so my precaution was unnecessary.) But there is no point in risking the described negative effects or the weakening of the trip, so 2 weeks before, the experiment was paused. Obviously I can't prove that this is sufficient, but I think it was enough: I was taking 10mg orotate every other day (on average) and the anecdotes which caused me to place it on hold were from people taking psychiatric doses which are closer to 500mg, and they generally seem to think that the effect of lithium didn't last for months (which is consistent with the fairly fast metabolism of lithium in the body, ~24 hour half-life); as well, I stopped it weeks before the trip, which went fine, which was itself a week before starting microdosing. So for the lithium to have been a problem, one would have to postulate that the levels of lithium, already 2 orders of magnitude below those claimed to cause problems, did not noticeably interfere with the trip, but somehow did interfere with results spread over 6 months afterwards.

The listed benefits are to mood, productivity, and creativity. We might also want to check other metrics to see if any LSD benefit came at a cost. So I will use my usual metrics plus a new creativity one:

- [Zeo]() sleep data (primarily: latency, total sleep, number of awakenings, morning feel)

    I expect little or no effect on these 4 metrics, or the more obscure ones like sleep composition (light/REM/deep percentages). Two-tailed tests.
- [Spaced repetition]() performance

    Average grade of cards reviewed on a given day; I expect no effect or a benefit (the simulated annealing analogy sounds like it might also work for memory). One-tailed.
- mood/productivity self-rating: 1-5

    3 is a normal day, 2 below-average, 4 a very good day, 5 fantastic etc. The *major* prediction of the microdose theory is that mood/productivity/creativity will increase, so the final analysis should exploit our prior and use a one-tailed test that the ratings will increase (since higher=better).
- creativity rating: 1-3

    Similar. This is not a metric I currently track, but would be a new one. One-tailed.
- active/placebo prediction

    A prediction recorded at the end of each block on PredictionBook.com; this is not a dependent variable, but a check for whether there is a reliably noticeable subjective effect.
- Before/after [Openness to experience](!Wikipedia) questionnaires

    Openness is one of the Big Five personality traits, roughly linked with creativity, interest in novelty and variety; while [Conscientiousness](Conscientiousness and online education) (think self-discipline & hard-work) tends to increase with age, Openness seems to decrease. Personality traits, like IQ, are notoriously hard to change & predictive of many things about a person. [MacLean et al 2011](http://ud13_26.ud13.udmedia.de/hexenopas-pilz-tagebuch/wordpress/wp-content/uploads/2011/10/J-Psychopharmacol-September-28-2011.pdf "Mystical Experiences Occasioned by the Hallucinogen Psilocybin Lead to Increases in the Personality Domain of Openness"), a rare RCT of [psilocybin](!Wikipedia), found that Openness was still increased a few percentage points >1 year after dosing. (While not that large in magnitude, MacLean et al 2011 compares it with the reduction in Openness over 4 decades and increase from successful antidepressants or substance abuse treatment.) The effect seemed to be driven by those reporting a *mystical* experience; despite identical starting Openness, those reporting a non-mystical experience seemed to see theirs fall. The study has [many weaknesses](http://hardsci.wordpress.com/2011/09/29/does-psilocybin-cause-changes-in-personality-maybe-but-not-so-fast/ "Does psilocybin cause changes in personality? Maybe, but not so fast"), but is still the best such study I know.

    Since to maximize effectiveness, any full trip should be taken before micro-dosing, this suggest 3 samples: before-trip, after-trip, after-micro-dosing.

    My first long Big Five survey result (using [Personality Project](http://test.personality-project.org/)) in early 2012 put my Openness at the [87^th percentile](/docs/2012-gwern-personalityproject.html "Personality-project long Big Five report: first"); the [second](/docs/2012-gwern-personalityproject-2.html "Personality-project long Big Five report: second"), 2 days after the trip, was identical (87th percentile). Since I had no mystic experience, this is consistent with MacLean et al 2011's analysis. A [third followup in March 2013](/docs/2013-gwern-personalityproject.html "Personality-project long Big Five report: third"), after the microdosing experiment, put me at the 93rd percentile (needless to say, the confidence intervals for all 3 overlap due to the percentile ranking being based on relatively few questions: ~6 for each personality factor).

We don't need to worry about time-of-day effects. The LSD microdoses were at similar times each day (right after getting up). All the dependent variables were generally recorded/done at consistent times, except for the spaced repetition scores since I sometimes reviewed in the afternoon, but [I've already investigated time-of-day effects](https://groups.google.com/d/topic/mnemosyne-proj-users/8yZz9BbqKl4/discussion "[Mnemosyne-proj-users] Statistics: is time of day of reviews stored?") in my spaced repetition performance and they are trivially small both in my dataset & in a multi-million-review dataset drawn from thousands of Mnemosyne users.

## Limitations

There are 3 major potential problems with this experiment: the results may not generalize beyond me, the tabs may not have contained substantial levels of LSD, and the LSD may have degraded while being stored.

### Validity

The first problem is inherent to the design and cannot be fixed without other people (who are not me) running comparable experiments. When _n_=1, as it does here, you are dealing with results that may be of high [internal validity](!Wikipedia) which means that inside the experiment, the conclusion of the analysis is (in this case, "I did not benefit in these specific ways from LSD microdosing"), but it is difficult or impossible to know what the [external validity](!Wikipedia) is ("people do not benefit in these specific ways from LSD microdosing"). This is a general problem with my [nootropics self-experiments](Nootropics). I am not very optimistic that there will be any replications of this experiment: it seems no one else has tried this in the 60 years or so since LSD was banned, anyone who does so may not publish their results, and most people are not as patient as I am in running self-experiments.

Now, we can still *speculate* about how my results might generalize to other people. If LSD microdosing worked for only a small fraction of the population, where are all the negative anecdotes? You see *some* negative ones, sure, but very few in general (I'd guess well under 10% of anecdotes). Or, is there any _a priori_ reason to expect LSD microdosing to have a lot of variation from person to person? Does the fact that I had an enjoyable and problem-free trip suggest I am a "responder" (assuming microdosing does work)? Which does one consider more plausible: that my _n_=1 datapoint is explained by interpersonal variation and I just happened to both blind it and be the unlucky guy who naturally doesn't benefit, or that interpersonal variation is irrelevant and the stark difference between my datapoint and the anecdotes is fully explained by the methodological problems & other biases which happen when people don't use randomization & blinding? Personally, I see stuff like placebo effects all the time in research (in fact, you could argue that my [dual n-back meta-analysis](DNB meta-analysis) is about demonstrating that simple expectancy effects can be worth >6 points on IQ tests), and so I don't just consider the second explanation to be possible, I consider it to be the *default* explanation. For me, anecdotes about supplements are considered placebo/expectancy/non-randomization/publication-bias/underpowered/biased-recall/etc until proven innocent.

### Dosage
#### Any

The next question is, how can I be sure I got LSD? A black market is not exactly a lab-quality supplier.

The answer is that I cannot be *sure*, any more than anyone getting LSD from a non-lab source (which is everyone) can be sure. All I can say is that the seller, VitaCat, was reputable; [the Avengers](/docs/sr/2013-10-15-lsdavengers.maff) regularly tested wares to keep sellers honest and VitaCat's premium Mayan tabs passed the lab tests twice and even up until the end in October 2013 his LSD was considered one of, if not the, best LSD on SR, and very strong as he claimed^[An important point, since most ordinary LSD tabs, as measured by the DEA (reported in its [_Microgram_](https://www.erowid.org/library/periodicals/microgram/) publication) and other sources, are closer to 100μg than 250μg.]; in general, the FBI reported high quality levels for their purchases of LSD among other drugs; the price was not too good to be true (quite the opposite); the physical small size of the tabs meant that it had to be *some* highly psychoactive chemical; my trip using one tab matched reports of LSD trips very closely (and in particular trip reports used claimed doses of >150μg), and did not match the RC trip descriptions I've read; there was no bitter taste indicative of possible alternative hallucinogens; and so on. Personally, I would be very surprised if what I bought was not LSD.

Lab testing is [not available in the USA (as of 2003)](https://www.erowid.org/chemicals/lsd/lsd_article1.shtml "LSD Analysis: Do we know what's in street acid?") according to Erowid, and [EcstasyData](http://www.ecstasydata.org/faq.php) will not test LSD ("we can not reliably identify [LSD] because of the many isomers and related chemicals that look similar in a mass spectrometer") or report dose estimates - not that I was keen on paying $100, waiting 3+ weeks, and using up a tab or two. (The LSD Avengers apparently had access to lab tests in the Netherlands.) I decided to also not [Ehrlich test](!Wikipedia "Ehrlich's reagent") because I could not afford the 5-tab purchase (when the LSD Avengers call VitaCat a "premium" or "elite" seller, they weren't kidding), and all an Ehrlich test could tell me was whether there was any alkaloid chemical in it (which was something I could figure out for myself just by taking a tab), and not even whether it was LSD, and not the dose - which is what I actually needed to know. If I had been able to afford more tabs, I probably would've done a test anyway (it would at least have reassured me I wasn't getting an RC), but I only had 2 tabs. I needed 1 for the microdoses, and 1 to trip with, so... Between tripping and testing, it was an easy choice.

#### Useful dose?

Drugs typically follow [dose-response relationship](!Wikipedia)s of some sort, sometimes with interesting shapes like the U-curve of the [Yerkes-Dodson law](!Wikipedia) for stimulants. Is it possible that the results might be due to falling into a bad place in LSD microdosing's curve, whatever it is?

It's possible that doses might be an issue. But my problem is that even with a dose-response curve, I should have seen *something* in the results. Generally, biological 'thresholds' aren't some magic binary switch where 10μg does nothing whatsoever and 11μg is day and night difference - they're just slopes that incline faster in that region. They do not look like binary circuits where at 10μg they do absolutely nothing and then at 15μg go to the moon. If I saw zero positive effects, on a large sample size, at 10-12μg, why would I expect a huge difference on 25μg especially when the original evidence for LSD microdosing is so weak and questionable? If 15μg was better than 12, then I should have observed something like a medium effect. If 20μg was better than 12, I should have observed something like a small-medium effect. If 30μg was best, I should have seen signs of a small effect, possibly not statistically-significant, but clear point-value shifts. I observed none of that. VitaCat's tab should've been no lower than 200μg, which would still yield 19 microdoses well above the apparent threshold of 5μg; even if it was just 100μg, that would still be above 5μg per microdose.

I am also suspicious of this response because there is no solid evidence of what the dose-response curve would be for microdosing, even just the basic shape, much less specific dose levels that someone could tell me that my dose was all wrong and worthless. And it's such a convenient fully-general excuse, a [no true Scotsman](!Wikipedia): "Xμg didn't work for you? Must've taken the wrong dose! Try again with [more/less]!" (But [one man's modus ponens is another man's modus tollens](Prediction markets#modus-tollens-vs-modus-ponens)...)

Try again? Well, it is the obvious second experiment, trying multiple levels of doses (eg. 1, 2, and 3ml doses). But I'm not doing a second one: it took something like 6 months to get any level of certainty with the dose I was using, and if I bought more tabs, then that's even more opportunity to argue that I bought bunk LSD or that the tabs differed in dose etc. Given that I didn't see any benefits, I simply cannot justify taking more time to explore a potential supplement which failed the first test. It doesn't begin to pass the cost-benefit/VoI test for me.

I suggest that anyone trying their own experiment also try multiple dosages. But only if they are already blinding & randomizing. Not every methodological improvement is of equal value.

### Degradation

Having gotten LSD, could the LSD have then been destroyed in preparation or storage? For example, in the comments, a Jessica Darko claims:

> But more damaging is that the drug degrades quickly and is very sensitive to its environment. It degrades in the presence of oxygen, heat and light. A common house fridge provides all three- the door is opened at least once a day (to get your dose) letting light in. The container is open to the air which provides oxygen, and while a fridge is cool, it is does not absolutely prevent degradation of the drug due to heat. I've seen storage recommendations for this drug involving sealed, light opaque containers, kept frozen in an icebox and the admonition that this will only preserve it for a few weeks.

If freezing cannot store safely LSD for more than a few weeks, then clearly it is hopeless to expect microdoses to last the few months of the experiment.

LSD does have a reputation for being fragile. However, Darko's claims seem to be entirely false and an excellent example of [proving too much](!Wikipedia). If LSD really did degrade within weeks under the most optimal conditions (and presumably just days under more normal conditions), how did *anyone ever consume LSD*? Drug supply chains do not operate so fast that they can whisk LSD from the chemist to the user in just a few days. If LSD really did degrade within days, how did anyone ever buy LSD off SR? We can read about LSD distribution chains in places like in the [trial transcripts for William Leonard Pickard](/docs/sr/2003-pickard-lsd-trial-transcript2.pdf) and there is no indication of LSD requiring ultra-fast delivery or being ultra-time-sensitive. No one in any of the forum threads or web pages on LSD microdosing states that breakdown is a concern if stored in the dark or refrigerated (as I did); Fadiman does not mention it as a concern in his book, and he did not mention it as a potential issue when I sent him the experiment design with time-scale. If the claim was even remotely true, it is difficult to see how [Earth & Fire Erowid could](https://www.erowid.org/chemicals/lsd/lsd_article2.shtml) find a vial of LSD which "After 55 years, stored at varying room temperatures, the LSD seemed to be fully potent." [Alexander Shulgin](!Wikipedia) remarks [in _TiHKAL_](https://www.erowid.org/library/books_online/tihkal/tihkal26.shtml " #26. LSD-25") that "As a salt, in water, cold, and free from air and light exposure, it [LSD] is stable indefinitely." And it's difficult to see how [Li et al 1998](http://jat.oxfordjournals.org/content/22/6/520.full.pdf "Stability study of LSD under various storage conditions") (to borrow [Wikipedia's summary](!Wikipedia "LSD#Reactivity and degradation")) could reach results like the following:

> A controlled study was undertaken to determine the stability of LSD in pooled urine samples.[71] The concentrations of LSD in urine samples were followed over time at various temperatures, in different types of storage containers, at various exposures to different wavelengths of light, and at varying pH values. These studies demonstrated no significant loss in LSD concentration at 25°C [77°F] for up to four weeks. After four weeks of incubation, a 30% loss in LSD concentration at 37°C [98.6°F] and up to a 40% at 45°C [113°F] were observed. Urine fortified with LSD and stored in amber glass or nontransparent polyethylene containers showed no change in concentration under any light conditions. Stability of LSD in transparent containers under light was dependent on the distance between the light source and the samples, the wavelength of light, exposure time, and the intensity of light. After prolonged exposure to heat in alkaline pH conditions, 10 to 15% of the parent LSD epimerized to iso-LSD. Under acidic conditions, less than 5% of the LSD was converted to iso-LSD.

## Power calculation

The descriptions are that the effects are strong & noticeable, so a large [effect size](!Wikipedia) suggests a small experiment; but with 6 metrics, we will want to correct for [multiple comparisons](!Wikipedia) (which need will lower the required _p_-value in our one-tailed tests). We'll assume a large effect size, _p_=0.01, and [paired](!Wikipedia "Crossover study")/[within-subject](!Wikipedia "Repeated measures design") experimental design^[Because this is a cross-over design with repeated AB/BA pairs, I could legitimately treat this as a repeated-measures situation and use a paired t-test. But as it turns out, using a more conservative two-sample _t_-test was not going to change anything in our conclusion. A paired _t_-test is more powerful than a two-sample _t_-test, so when we know that the paired _t_t-test turned in non-significant _p_-values (as they did), we then know what the two-sample tests would say: they will just give even more non-statistically-significant results than the paired did.]:

~~~{.R}
library(pwr)
pwr.t.test(d=0.8,type="paired",power=0.80,alternative="greater",sig.level=0.01)

     Paired t test power calculation

              n = 18.47818
~~~

19 pairs means 19 active and 19 placebo doses, 38 days total. This does not seem unduly onerous, but note that we're assuming LSD has a strong effect since if we cut the effect size in half to _d_=0.4 (a medium-small effect) we need 66 pairs or 132 days! (If the effects were oversold so _d_=0.4 was the correct estimate, and we went with 19 pairs, we would not have an 80% chance of detecting the effect but rather a 24% chance. Oh well. "We do what we can, because, we must - for the people who are still alive.")

How we treat individual days will matter: do we average the data for each block of 3 days into a single data point, or do we treat each dose as resulting in 3 data points - the effect on the first day, the lessened effect on the second day, and the weakest effect on the third day? (And then the next dose.) The latter seems to be a better strategy, and so with 250μg we get 25 doses of 10μg, each dose is 3 days so as much as 75 days for active and a similar amount for placebo. (75 pairs gives us a similar power calculation all the way down to _d_=0.4.)

In retrospect (after observing the trends which didn't reach significance), since I specified 7 metrics, it probably would have been better to be conservative and specify a significance-level of `sig.level=(0.05/7)` or 0.0071 rather than `sig.level=0.05/5` or 0.0100.

## VoI

> For background on "value of information" calculations, see the [Adderall calculation](Nootropics#value-of-information-voi).

With background, design, and power calculation out of the way, we can calculate costs & values.

1. Cost of regular LSD microdosing

    A check of listings on the [Silk Road]() indicates that 300μg can be bought for 5-6btc or \$45; 300μg translates to 30 doses, or 90 days if I follow the 3-day dose pattern some recommend; the yearly cost of LSD is then $\frac{45}{\frac{90}{365}} = 183$. Discounted at 5% annually, the net-present-value/lifetime-cost of switching to LSD would be $\frac{183}{ln 1.05} = 3,751$. We can reuse this figure as the potential benefit of LSD microdoses, since if the effect is positive and large enough to notice, then it seems worth roughly 50 cents a day!

    There are 3 major categories of additional costs: the medical risk one runs during the experiment (principally mental), the legal risk, and the reputational risk.

    1. Schizophrenia and other issues:

        Earlier, I looked into research bearing on the relation of [LSD and Schizophrenia](!Wikipedia), and concluded that the evidence was most consistent with LSD having small health risks (that is, the damaged or ill sought out all sorts of drugs including LSD, but LSD did not cause the damage or at best caused the illness to surface earlier) with some correlations of [psychiatric benefit from use](http://www.plosone.org/article/info%3Adoi%2F10.1371%2Fjournal.pone.0063972 "'Psychedelics and Mental Health: A Population Study', Krebs & Johansen 2013"); this was over the general LSD population including brain-frying large doses, so the risk for microdoses ought to be much smaller. Much later it occurred to me that the rarity of using LSD along with sheer small size of LSD actually reduces the risk of consumption compared to many other products, simply because dangerous doses of many contaminants or poisons won't fit: blotters reportedly max out at ~500μg. Compare that with, say, piracetam where people take <3g of powder daily; if the piracetam was just 0.3% contaminants, that's as much as 1mg of the stuff - but a blotter can't even hold 1mg of *any* substance, much less an active dose of some substance plus accidental contamination. Overall, I feel comfortable rounding it to zero. To estimate the possible impact on schizophrenia, I looked into estimates of hallucinogen consumption and found that estimates ranged from 7-12% of the entire American population (~22-38 million people) had consumed at some point, which over something like a 60-year lifespan (teenager to very old adult) implies something like 600,000 hallucinogen 'virgins' per year (a figure echoed in one of Fadiman's articles).
    2. Prison:

        Searching, I found a [1994 federal Sentencing Commission document](http://web.archive.org/web/20121010052703/http://www.ussc.gov/Data_and_Statistics/Federal_Sentencing_Statistics/State_District_Circuit/1995/cae95.pdf "GUIDELINE DEFENDANTS SENTENCED BY PRIMARY OFFENSE CATEGORY (October 1, 1994, through September 30, 1995)") listing 83 sentences involving LSD that year (while searching I also found some information indicating that 400μg is considered 1 dose, so the microdose experiment would involve <1 dose!); news articles suggest many (most?) of those would be for sellers and manufacturers, so a further analysis would reduce the risk accordingly. In any case, even if we multiply by 50 for each state, $\frac{600000}{50\times83} = 145$ suggesting a rough estimate of 1 in 145 chance of being convicted. Leniency could be expected for a first-time non-violent non-trafficking offender, so we could set the cost of this outcome at perhaps just $100,000, or an expected loss/cost of $700.
    3. Social consequences:

        Some reputational effects are clearly negative: a use of LSD would be a big issue in some roles like running for elected office or being CEO of a large company (unless one is a secular saint like [Steve Jobs](!Wikipedia)), especially since I would obviously be unable to make an excuse like "youthful experimentation" or "a momentary lapse of judgment", this writeup demonstrating that my use was thoroughly premeditated; however, this does not bother me inasmuch as I am unfitted by both temperament and talent for such positions. (Something similar could be said about security clearances.) In many more conservative regions, it would be a substantial negative, but I am already a poor fit for such regions and I don't know whether an LSD use would be very negative at the margin, or whether *any* of my experiments or essays have already done the damage.

        On the positive side, however: in some groups or regions like California (which may yet lie in my future), a use of LSD may be a net positive as it indicates valued qualities like open-mindedness. The lifetime consumption rate implies that something like 12% of the population would not judge me harshly for any use. That I have been careful and responsible in my experimentation, and had multiple purposes in addition to mere recreation, will lessen the offense for many people (but possibly would increase my guilt in the eyes of others). There are many famous LSD users like [Bill Gates](!Wikipedia), [Richard Feynman](!Wikipedia), [Oliver Sacks](!Wikipedia), [Francis Crick](https://news.ycombinator.com/item?id=4312369), [Kary Mullis](!Wikipedia) etc, but they seem to have discussed their drug use only after achieving mainstream success; worse, the famous users all seem to have been associated with the 1960s or with computers, suggesting tolerance for them may be a passing phase and younger people not so lenient (but on the other hand, [marijuana legalization](!Wikipedia "Legal history of cannabis in the United States") efforts are actually succeeding before and during 2012, suggesting that America may be more tolerant in the future).

        All considered: I am not sure what the reputational cost would be, nor do I have good ways to estimate it, and given the invisibility of many reputational costs - how do you know when someone *didn't* offer something to you or how people are bad-mouthing you? - I may never know the actual cost to me (compared to, say, being arrested for LSD possession).
2. How much will the experiment cost to run?

    The procedure each morning uses up no more than 5 minutes so $\frac{38\times 5}{60} \times 8 = 25$ dollars of time. The sleep, spaced repetition, and mood/productivity data I already collect, and the creativity self-rating is another few seconds, and so not worth calculating. I'm not sure if I have an appropriate dropper/syringe available; that and other supplies might tack on another $10. So $45+25+10=80$ dollars.
3. Priors:

    The accuracy of the information ranges 20-80% depending on the effect size; since it's inline with my previous knowledge of LSD and based on more than a handful of anecdotes, I would be somewhat optimistic about there being an effect, so a 50% chance the effect exists.
4. Value of Information

    Power times prior times benefit minus cost of experimentation: $0.2-0.8 \times 0.5 \times 3751 - 80 - 700 =$ -405 to +720. If we cut out the legal risk, the range is +295-1420 and the experiment well worth doing; our estimate of the legal risk and the effect size determine whether we find it worth doing.

## Data

Before starting the microdosing experiment, I used the first tab for a classic trip. The trip was both educational and enjoyable and what I expected based on the trip reports I'd read on Erowid and many other places (I may post my writeup at some point), albeit I did not have the mystical or peak experience I was really hoping for, nor did I change my mind substantially on anything in the background section.

I then waited roughly a week to reduce potential tolerance before starting the microdosing experiment proper.

0. Zeroth block (before-after tripping, excluding the trip day): 17,18,19 September: 0

    20,21,22 September: 1
1. First block: 2,3,4 October 2012: 0

    Second block: 5,6,7 October: 1 (prediction: placebo then active, [45%](http://predictionbook.com/predictions/8588))
2. First block: 20,21,22 October: 1

    Second block: 24,25,26: 0 ([55%](http://predictionbook.com/predictions/8958))
3. First block: 27,28,29: 0

    Second block: 4,5,6 November: 1 ([60%](http://predictionbook.com/predictions/9553))
4. First block: 7,8,9 November: 1

    Second block: 15,16,17 November: 0 ([40%](http://predictionbook.com/predictions/10119))
5. First block: 19,20,21 November: 0

    Second block: 22,23,24: 1 ([40%](http://predictionbook.com/predictions/10627))
6. First block: 26,27,28 November: 0

    Second block: 2,3,4 December: 1 ([60%](http://predictionbook.com/predictions/11579))
7. First block: 5,6,7 December: 1

    Second block: 8,9,10 December: 0 ([40%](http://predictionbook.com/predictions/12103))
8. First block: 11,12,13 December: 0

    Second block: 14,15,16 December: 1 ([40%](http://predictionbook.com/predictions/12772))
9. First block: 17,18,19 December: 1

    Second block: 20,21,22 December: 0 ([50%](http://predictionbook.com/predictions/13457))
10. First block: 31 December 2012, 1, 2, January 2013: 0

    Second block: 3, 4, 5 January: 1 ([40%](http://predictionbook.com/predictions/14373))
11. First block: 6, 7, 8 January: 1

    Second block: 9, 10, 11 January: 0 ([50%](http://predictionbook.com/predictions/14685))
12. First block: 12, 13, 14 January: 1

    Second block: 15, 16, 17 January: 0 ([40%](http://predictionbook.com/predictions/14775))
13. First block: 18, 19, 20 January: 1

    Second block: 22, 23, 24 January: 0 ([60%](http://predictionbook.com/predictions/15001))
14. First block: 25, 26, 27 January: 0

    Second block: 28, 29, 30 January: 1 ([40%](http://predictionbook.com/predictions/15176))
15. First block: 31 January, 1, 2 February: 0

    Second block: 3, 4, 5 February: 1 ([65%](http://predictionbook.com/predictions/15376))
16. First block: 6, 7, 8 February: 0

    Second block: 10, 11, 12 February: 1 ([50%](http://predictionbook.com/predictions/15712))
17. First block: 13, 14, 15 February: 1

    Second block: 16, 17, 18 February: 0 ([40%](http://predictionbook.com/predictions/15936))
18. First block: 20,21,22 February: 1

    Second block: 23,24,25 February: 0 ([60%](http://predictionbook.com/predictions/16145))
19. First block: 26,27,28 February: 0

    Second block: 1,2,3 March: 1 ([60%](http://predictionbook.com/predictions/16283))
20. First block: 4,5,6 February: 0

    Second block: 7,8,9 February: 1 ([75%](http://predictionbook.com/predictions/16483))

Subjectively, I noticed nothing in the LSD blocks: no "positive effects", no body load, nothing like "hard to focus", visualizing things was not "effortless", I did not feel "I could grasp concepts much faster", nor that I was "more tired, spacier, and very apathetic" in the control blocks.

## Fadiman comments

After I completed the experiment and prepared the data, but before doing any analysis (besides the prediction accuracy to check the blinding), I emailed Fadiman the following questions, and he replied:

>> 1. You've seen my planning and methodology write up, and I've attached the current version of my full writeup with everything I've added or changed since (mostly more background, a log of dates, that sort of thing) if you want to reread it. Do you have any objections to how I did it?
>
> Most important: I am deeply impressed and pleased with your totally original and cleverly designed experiment. That you are able to add a double-blind to a one person self-study is a delight in itself. I am incredibly happy to see how many different ways you went at this. In terms of the general write up, I happened to be an ardent fan of a mix of data, personal reflection and observation. Scientific writing all too often does everything it can to make the subject under scrutiny as dull as possible in the writing, as uninteresting as possible, and heaven forbid, to include any genuinely real and personal commentary. So I love the way you did it exactly. The changes all seem to me expansions and improvements.
>
>> 2. Have you or anyone else as far as you know, done a long blind/randomized/both self-experiment on LSD microdosing?
>
> Short answer. No. Long answer: no one. Longest answer - the number of people are doing self-experiments with LSD and other psychedelics and even MDMA is expanding. No one is even approaching what you're doing.
>
>> 3. If the results turn out to be non-statistically-significant or have very small effect sizes, why do you think they might have turned out that way? Which reasons would you have most confidence in as an explanation of null results?
>
> I do have some guesses as to why non-significance might occur, and that is putting aside just the obvious statistical possibility of using small sample sizes. I will be actually very content to see null results since it will force me and others to dig more deeply for possible reasons. So far, you are the first who might produce such results and certainly since you're the first double-blind, it adds to the value of what you're doing. As you probably know there's a big controversy in the regular medical literature about how many serious drug studies of multibillion-dollar drugs and up with no [statistically-]significant differences a few years out from their sales launch and almost always from university-based studies, not being paid by the pharmaceutical company.
>
> In psychedelic studies, 100% success rates are much harder to describe to non-psychedelic audiences used to more conventional and much lower success rates about almost everything.
>
> One possible reason, that only you can answer, and you may have done so in the body of the text, but if so I missed it. I'm not sure that you took a couple of non-blind micro-doses beforehand to be sure that you could notice a difference with every placebo and positive intention going with you to notice the difference to establish a personal baseline of awareness of the substance. If that was not done, then it's not at all clear that the very simple measurements used on a daily basis were sensitive enough to pick up days on and days off. The more usual studies from other people that I've seen, (none of them even attempting a double-blind or any blind at all,) are looking for a set of internal changes that they have previously experienced. These may be as subtle as eating a healthier lunch, doing a few more reps at a gym, being able to focus on the task an hour longer and so forth. I have a couple of write-ups in my book and when you get to them, you can see that we're dealing with fairly intricate internal measures which you also cover in detail now and then in your personal commentaries.
>
> That's my favorite possible reason. Another is that, while some people are very aware on the day of the micro-dose, others are clear that it is a two-day experience, and a few even longer. If even a tiny residue of the micro-dose is still active at the time of the next dose, it might make it harder to distinguish and on from an off day.
>
> However, I'm also aware that also for some people, the dose is too low.
>
> The report in my book that I find most charming, a woman who's been micro-dosing for about 8 years - except during her pregnancy - uses 20 µg, which for me would be perceptual. So an alternative reason, even though the least interesting one, is that your dose was too low. A few people had felt it was better to drop down to 7 or 8µg to not get too high. Human variability.
>
> I'm sure I can come up with more complicated reasons, but you asked what my thoughts were before we completed the analysis and there you are.
>
>> 4. Do you expect the results to turn out positive? (By positive here, I mean statistically-significant after multiple correction and _d_>0.1.) How much so?
>
> I did expect the results to turn out positive because there are real effects that have been reported, not only in my little studies, but for the past few thousand years in indigenous societies who of course have experimented with micro-doses and every other conceivable form of use.
>
> As to how [statistically-]significant the statistical breakout would be - I've not really thought much about it. This was your study and your level of statistical sophistication clearly exceeds my own. I tend to be somewhat suspicious of any study where the statistics are fairly exotic, since I know from watching my graduate students PhD dissertations, that when really simple and almost intuitively obvious statistics don't show results, they start to shop around until they find something that gives them a positive result even if it's a statistic that nobody else seems to know about. I watch statistical consultants assure students that they will find something that will justify hiring them. Is this pure science as God and Descartes would have it? Not in my book but hey, the real world is never as clean as the data derived from it.
>
>> 5. Are you willing to be quoted on any of the above?
>
> Of course, you are free to quote me in anything you write, and I'm free to complain that I was quoted out of context or anything else I choose to say to cover my tail. But in this case, you did the work - you asked me to review the work - and therefore my review becomes part of the total package.

I did this for much the same reason as I wrote down the exact metrics and analysis in advance: to specify what results are expected, how one will interpret them, and to eliminate the temptation to fudge or modify or spin or self-deceive about any of it.

## Analysis
### Preparation

Preparing the data:

Needed to extract Mnemosyne scores for the past [175 days](http://www.timeanddate.com/date/durationresult.html?m1=9&d1=16&y1=2012&m2=3&d2=9&y2=2013&ti=on); for a multi-level model analysis, I'll want even more days which were neither active nor control so I extract even more days than that (back 451 days). Using a Mnemosyne script in the development repository, I set the time interval:

~~~{.Python}
+++ mnemosyne/mnemosyne/example_scripts/export_stats.py 2013-03-10 21:54:04 +0000
@@ -12,7 +12,7 @@
 data_dir = None
 mnemosyne = Mnemosyne(data_dir)

-for n in range(-10, 0):
+for n in range(-275, -1):
     start_of_day = mnemosyne.database().start_of_day_n_days_ago(abs(n))
~~~

Then run it, extracting the average grade & transforming the days I didn't review for R:

~~~{.Bash}
./bin/python ./mnemosyne/example_scripts/export_stats.py \
     | cut -d ' ' -f 2 | sed -e 's/None/NA/' > ~/mnemosyne.csv
~~~

In R I read in a hand-trimmed Zeo export (`lsd.csv`), parse dates, add in the Mnemosyne daily grades, the mood/productivity & creativity daily self-ratings, and write it all back out:

~~~{.R}
lsd <- read.csv("lsd.csv")
lsd$Date <- as.Date(lsd$Date, format="%m/%d/%Y")
# Zeo's CSV export silently omits missing days; look for them to hand-edit empty rows in
# which(!((as.Date("2012-06-09"):as.Date("2012-09-15")) %in% lsd$Date))
mnemo <- read.table("mnemosyne.csv")
lsd$Mnemosyne <- NA
lsd$Mnemosyne <- mnemo$V1
mp <- read.csv("mp.csv")
lsd$MP <- NA
lsd$MP <- mp$MP
creativity <- read.table("creativity.csv")
lsd$Creativity <- NA
lsd$Creativity <- creativity$V1
write.csv(lsd, file="lsd.csv", row.names=FALSE)
~~~

### Blinding

How successful was the blinding: could I guess whether I had gotten a LSD or a placebo? A comparison of the log score shows my self-assessments were only slightly better than random (eg. remove the last prediction, and the random guesser performs equally or better):

~~~{.Haskell}
let predictions = [(True,  0.45),(False, 0.55),(True,  0.60),(False, 0.40),(True,  0.40),(True,  0.60),
                   (False, 0.40),(True,  0.40),(False, 0.50),(True,  0.40),(False, 0.50),(False, 0.40),
                   (False, 0.60),(True,  0.40),(True,  0.65),(True,  0.50),(False, 0.40),(False, 0.60),
                   (True,  0.60),(True,  0.75)]
logScore ps = sum $ map (\(result,p) -> if result then log p else log (1-p)) ps

logScore predictions
~> -13.4685

log 0.50 * fromIntegral (length predictions)
~> -13.8629
~~~

### Graphing data

Below are the 8 main dependent variables, depicted over time & colored by whether it fell in a dose 3-day block or control/placebo block. In descending order of importance:

![Daily self-rating of mood+work accomplished, 1-5 (higher is better)](/images/nootropics/lsd-mp.png)

![Daily self-rating of creativity/good-ideas, 1-3 (higher is better)](/images/nootropics/lsd-creativity.png)

![Averaged recall performance of Mnemosyne flashcards, 0-5 (higher is better)](/images/nootropics/lsd-mnemosyne.png)

The 5 sleep variables:

![Number of times awoken in a night as recorded by my Zeo (lower is better)](/images/nootropics/lsd-awakenings.png)

![Total minutes spent awake after falling asleep (lower=better)](/images/nootropics/lsd-timeinwake.png)

![Daily self-rating about how well-rested I feel immediately upon awakening (higher=better)](/images/nootropics/lsd-morningfeel.png)

![Total minutes between putting on Zeo headset & entering sleep (lower=better)](/images/nootropics/lsd-timetoz.png)

![Total minutes spent asleep (higher=better)](/images/nootropics/lsd-totalz.png)

### Testing the metrics

Results from the multivariate regression:

1. Sleep:

    - latency: none
    - total sleep: none
    - number of awakenings: none
    - morning feel: increased

        There is an increase in "Morning Feel" from 2.6 to 2.9, _d_=0.43, _p_=0.011; correcting for performing 7 different tests, this result is not statistically-significant (it does not survive a [Bonferroni correction](!Wikipedia) (since $0.0231 > \frac{0.05}{7}$) nor the [_q_-value approach](Zeo#fn7) to family-wise correction). The post hoc MANOVA confirms that there is heterogeneity between days between days (_p_=0.036), and it is probably being driven mostly or entirely by the morning feel.
2. Flashcard scores: none
3. Mood/productivity: none (_d_=-0.18)
4. Creativity: none (_d_=-0.19)
5. active/placebo prediction: see previous section
6. Before/after Openness: see previous section

For ease of interpretation, the results of the regression in a table:

Variable         Effect     _p_-value  Coefficient's sign is...
------------     ------    ----------- -------------------------
`MP`            -0.14      0.27        worse
`Creativity`    -0.12      0.28        worse
`Mnemosyne`     -0.00      0.68        worse
`Total.Z`        14.3      0.12        better
`Time.to.Z`      2.04      0.49        worse
`Time.in.Wake`   2.78      0.29        worse
`Awakenings`     0.64      0.25        worse
`Morning.Feel`   0.37      0.01        better

### Conclusion

Overall, there seems to have been no meaningful effects, and worrisome trends. I will not be investigating LSD microdosing further, as it is highly likely to be a waste of time.

#### Source code

The full analysis, using a [multivariate linear regression](!Wikipedia) followed by [MANOVA](!Wikipedia):

~~~{.R}
R> lsd <- read.csv("http://www.gwern.net/docs/2013-gwern-lsdmicrodose.csv")
R> # filter out baseline
R> lsd <- lsd[!is.na(lsd$LSD),]

R> l <- lm(cbind(MP, Creativity, Mnemosyne, Total.Z, Time.to.Z, Time.in.Wake, Awakenings, Morning.Feel)
            ~ LSD, data=lsd); summary(l)
Response MP :

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)   3.0339     0.0898   33.79   <2e-16
LSD          -0.1430     0.1293   -1.11     0.27

Residual standard error: 0.69 on 112 degrees of freedom
  (13 observations deleted due to missingness)
Multiple R-squared:  0.0108,    Adjusted R-squared:  0.00197
F-statistic: 1.22 on 1 and 112 DF,  p-value: 0.271


Response Creativity :

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)   1.4068     0.0734    19.2   <2e-16
LSD          -0.1159     0.1056    -1.1     0.28

Residual standard error: 0.564 on 112 degrees of freedom
  (13 observations deleted due to missingness)
Multiple R-squared:  0.0106,    Adjusted R-squared:  0.00179
F-statistic:  1.2 on 1 and 112 DF,  p-value: 0.275


Response Mnemosyne :

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)  3.82558    0.01625  235.40   <2e-16
LSD         -0.00958    0.02340   -0.41     0.68

Residual standard error: 0.125 on 112 degrees of freedom
  (13 observations deleted due to missingness)
Multiple R-squared:  0.0015,    Adjusted R-squared:  -0.00742
F-statistic: 0.168 on 1 and 112 DF,  p-value: 0.683


Response Total.Z :

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)   519.80       6.36   81.67   <2e-16
LSD            14.28       9.16    1.56     0.12

Residual standard error: 48.9 on 112 degrees of freedom
  (13 observations deleted due to missingness)
Multiple R-squared:  0.0212,    Adjusted R-squared:  0.0125
F-statistic: 2.43 on 1 and 112 DF,  p-value: 0.122


Response Time.to.Z :

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)    26.58       2.05   12.95   <2e-16
LSD             2.04       2.95    0.69     0.49

Residual standard error: 15.8 on 112 degrees of freedom
  (13 observations deleted due to missingness)
Multiple R-squared:  0.00425,   Adjusted R-squared:  -0.00464
F-statistic: 0.478 on 1 and 112 DF,  p-value: 0.491


Response Time.in.Wake :

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)    21.93       1.80   12.17   <2e-16
LSD             2.78       2.59    1.07     0.29

Residual standard error: 13.8 on 112 degrees of freedom
  (13 observations deleted due to missingness)
Multiple R-squared:  0.0101,    Adjusted R-squared:  0.00128
F-statistic: 1.15 on 1 and 112 DF,  p-value: 0.287


Response Awakenings :

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)    7.237      0.382   18.96   <2e-16
LSD            0.635      0.550    1.16     0.25

Residual standard error: 2.93 on 112 degrees of freedom
  (13 observations deleted due to missingness)
Multiple R-squared:  0.0118,    Adjusted R-squared:  0.00297
F-statistic: 1.34 on 1 and 112 DF,  p-value: 0.25


Response Morning.Feel :

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)    2.593      0.100   25.92   <2e-16
LSD            0.370      0.144    2.57    0.011

Residual standard error: 0.769 on 112 degrees of freedom
  (13 observations deleted due to missingness)
Multiple R-squared:  0.0557,    Adjusted R-squared:  0.0473
F-statistic: 6.61 on 1 and 112 DF,  p-value: 0.0114

R> summary(manova(l))
           Df Pillai approx F num Df den Df Pr(>F)
LSD         1  0.142     2.17      8    105  0.036
Residuals 112

R> # MP is the most important metric; what is the effect size (Cohen's d) here?
R> (mean(lsd[lsd$LSD==1,]$MP) - mean(lsd[lsd$LSD==0,]$MP)) / sd(lsd$MP)
[1] -0.1782
R> (mean(lsd[lsd$LSD==1,]$Creativity) - mean(lsd[lsd$LSD==0,]$Creativity)) / sd(lsd$Creativity)
[1] -0.1921
~~~

None of the _p_-values are greater than the normal cutoff after multiple-correction, although `Morning.Feel` comes close:

~~~{.R}
R> p.adjust(c(0.27, 0.28, 0.68, 0.12, 0.49, 0.29, 0.25, 0.011), method="BH") < 0.05
[1] FALSE FALSE FALSE FALSE FALSE FALSE FALSE FALSE
~~~

Finally, I plot the 8 graphics seen in the previous section:

~~~{.R}
R> png(file="~/wiki/images/nootropics/lsd-totalz.png", width = 780, height = 680)
R> qplot(Date, Total.Z, color=LSD, data=lsd)
R> dev.off()
R> png(file="~/wiki/images/nootropics/lsd-timetoz.png", width = 780, height = 680)
R> qplot(Date, Time.to.Z, color=LSD, data=lsd)
R> dev.off()
R> png(file="~/wiki/images/nootropics/lsd-timeinwake.png", width = 780, height = 680)
R> qplot(Date, Time.in.Wake, color=LSD, data=lsd)
R> dev.off()
R> png(file="~/wiki/images/nootropics/lsd-awakenings.png", width = 780, height = 680)
R> qplot(Date, Awakenings, color=LSD, data=lsd)
R> dev.off()
R> png(file="~/wiki/images/nootropics/lsd-morningfeel.png", width = 780, height = 680)
R> qplot(Date, Morning.Feel, color=LSD, data=lsd)
R> dev.off()
R> png(file="~/wiki/images/nootropics/lsd-mnemosyne.png", width = 780, height = 680)
R> qplot(Date, Mnemosyne, color=LSD, data=lsd)
R> dev.off()
R> png(file="~/wiki/images/nootropics/lsd-mp.png", width = 780, height = 680)
R> qplot(Date, MP, color=LSD, data=lsd)
R> dev.off()
R> png(file="~/wiki/images/nootropics/lsd-creativity.png", width = 780, height = 680)
R> qplot(Date, Creativity, color=LSD, data=lsd)
R> dev.off()
~~~

### Microdose effect length

One final detail to go with the previous analysis is to take a look at whether there were issues with 3-day blocks being a bad choice.

I classified by hand each day in the relevant period by how many days distant it was from the preceding LSD microdose (that is, the first day of an LSD block is 0, the second day is 1, the third day is 2, and so on up to 7, and past that I just round down to 7). The idea is that this lets us ask for a linear fit relating MP on days which are _n_ distant from a LSD microdose and see if there's any apparent trend - it may be that we failed to see a statistically-significant relationship because we lumped in all days together.

~~~{.R}
model1 <- lm(MP ~ DaysSince, data=lsd); summary(model1)

Residuals:
    Min      1Q  Median      3Q     Max
-1.0760 -0.8587  0.0171  0.1413  1.1413

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)   2.8587     0.0986    29.0   <2e-16
DaysSince     0.0310     0.0206     1.5     0.13

Residual standard error: 0.712 on 173 degrees of freedom
  (99 observations deleted due to missingness)
Multiple R-squared: 0.0129, Adjusted R-squared: 0.00721
F-statistic: 2.26 on 1 and 173 DF,  p-value: 0.134

plot(jitter(lsd$MP, 0.5) ~ lsd$DaysSince, xlab="Increasing time since a microdose", ylab="Mood/productivity")
abline(model1)
~~~

![MP regressed against how long ago the last LSD microdose was - if it was helping, we would expect MP to decrease as we get further away from the last dose.](images/nootropics/lsd-laggeddose.png)

More generally, we can re-run the multivariate regression with days-since as another predictor and see if it adds anything:

~~~{.R}
R> l1 <- lm(cbind(MP, Creativity, Mnemosyne, Total.Z, Time.to.Z, Time.in.Wake, Awakenings, Morning.Feel)
             ~ LSD + DaysSince, data=lsd); summary(l1)
Response MP :

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)   3.2090     0.2980   10.77   <2e-16
LSD          -0.2847     0.2639   -1.08     0.28
DaysSince    -0.0323     0.0524   -0.62     0.54

Residual standard error: 0.692 on 111 degrees of freedom
  (13 observations deleted due to missingness)
Multiple R-squared:  0.0142,    Adjusted R-squared:  -0.00358
F-statistic: 0.798 on 2 and 111 DF,  p-value: 0.453


Response Creativity :

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)   1.2435     0.2434    5.11  1.4e-06
LSD           0.0162     0.2155    0.08     0.94
DaysSince     0.0301     0.0428    0.70     0.48

Residual standard error: 0.565 on 111 degrees of freedom
  (13 observations deleted due to missingness)
Multiple R-squared:  0.015, Adjusted R-squared:  -0.00273
F-statistic: 0.846 on 2 and 111 DF,  p-value: 0.432


Response Mnemosyne :

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)  3.80753    0.05400   70.51   <2e-16
LSD          0.00502    0.04781    0.10     0.92
DaysSince    0.00333    0.00949    0.35     0.73

Residual standard error: 0.125 on 111 degrees of freedom
  (13 observations deleted due to missingness)
Multiple R-squared:  0.0026,    Adjusted R-squared:  -0.0154
F-statistic: 0.145 on 2 and 111 DF,  p-value: 0.865


Response Total.Z :

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)   545.47      21.01   25.97   <2e-16
LSD            -6.49      18.60   -0.35     0.73
DaysSince      -4.73       3.69   -1.28     0.20

Residual standard error: 48.7 on 111 degrees of freedom
  (13 observations deleted due to missingness)
Multiple R-squared:  0.0355,    Adjusted R-squared:  0.0181
F-statistic: 2.04 on 2 and 111 DF,  p-value: 0.135


Response Time.to.Z :

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)    32.69       6.80    4.81  4.8e-06
LSD            -2.91       6.02   -0.48     0.63
DaysSince      -1.13       1.19   -0.94     0.35

Residual standard error: 15.8 on 111 degrees of freedom
  (13 observations deleted due to missingness)
Multiple R-squared:  0.0122,    Adjusted R-squared:  -0.00562
F-statistic: 0.684 on 2 and 111 DF,  p-value: 0.506


Response Time.in.Wake :

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)   26.155      5.978    4.38  2.7e-05
LSD           -0.639      5.292   -0.12     0.90
DaysSince     -0.779      1.051   -0.74     0.46

Residual standard error: 13.9 on 111 degrees of freedom
  (13 observations deleted due to missingness)
Multiple R-squared:  0.015, Adjusted R-squared:  -0.00275
F-statistic: 0.845 on 2 and 111 DF,  p-value: 0.432


Response Awakenings :

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)    9.374      1.251    7.49  1.8e-11
LSD           -1.093      1.108   -0.99    0.326
DaysSince     -0.394      0.220   -1.79    0.076

Residual standard error: 2.9 on 111 degrees of freedom
  (13 observations deleted due to missingness)
Multiple R-squared:  0.0396,    Adjusted R-squared:  0.0223
F-statistic: 2.29 on 2 and 111 DF,  p-value: 0.106


Response Morning.Feel :

Coefficients:
            Estimate Std. Error t value Pr(>|t|)
(Intercept)    2.181      0.330    6.61  1.4e-09
LSD            0.704      0.292    2.41    0.018
DaysSince      0.076      0.058    1.31    0.193

Residual standard error: 0.766 on 111 degrees of freedom
  (13 observations deleted due to missingness)
Multiple R-squared:  0.0701,    Adjusted R-squared:  0.0533
F-statistic: 4.18 on 2 and 111 DF,  p-value: 0.0177

R> summary(manova(l1))
           Df Pillai approx F num Df den Df Pr(>F)
LSD         1  0.142     2.15      8    104  0.038
DaysSince   1  0.076     1.07      8    104  0.390
Residuals 111
~~~

None of the estimates are statistically-significant, but the MANOVA suggests that there's modest evidence that the amount of time since a dose matters. To summarize the results for using `DaysSince` as well in a neat little table:

Variable       Effect     _p_-value   Coefficient's sign is...
------------   ------    ----------- -------------------------
`MP`           -0.03      0.54        worse
`Creativity`    0.03      0.48        better
`Mnemosyne`     0.00      0.73
`Total.Z`      -4.73      0.20        worse
`Time.to.Z`    -1.13      0.35        better
`Time.in.Wake` -0.78      0.46        better
`Awakenings`   -0.39      0.07        better
`Morning.Feel`  0.08      0.19        better

Do we get a better fit if we omit days "too far" from the microdose, reasoning that the effects would've stopped? Looking just at MP to keep things simple:

~~~{.R}
R> for (i in 7:2) { print(summary(lm(MP ~ DaysSince, data=lsd[!(lsd$DaysSince>=i),]))); }
~~~

days removed  correlation  _p_
------------- -----------  ----
                +0.03100   0.13
7th             +0.00418   0.90
6,7             -0.00514   0.89
5,6,7           -0.05220   0.32
4,5,6,7         -0.06680   0.35
3,4,5,6,7       -0.17400   0.11
2,3,4,5,6,7     +0.00000   1.00

Obviously the _p_-values are meaningless in this application; more importantly, the reversal of coefficient sign and changing coefficient size & significance don't suggest anything in particular to me about dose period.

### Advanced analysis: multi-level models

One of the topics I play around with sometime, although I am very far from mastering them, are [multi-level models](!Wikipedia); you can think of them as linear models which can better handle datasets where there's some sort of grouping or categorizing going on. (The canonical example is student test scores: you could regress on them individually, but you'll get better results if you cluster them by classroom, school, and school district.)

None of the data variables except the 'creativity' self-rating were collected just for this LSD microdosing experiment: they all have an extensive baseline before and after the experiment. These LSD-free days can't help us estimate how LSD days looked (how could they?), but using MLMs, they may help us nail down what LSD-free days in general look like and reduce uncertainty in estimating their true mean, which makes the comparison to LSD days a little more accurate.

~~~{.R}
# install.packages("lme4")
library(lme4)
lsd <- read.csv("http://www.gwern.net/docs/2013-gwern-lsdmicrodose.csv")

lsd$Phase <- ifelse(is.na(lsd$LSD), TRUE, FALSE)

# Analysis: we want to examine the effect of LSD on:
# Total.Z, Time.to.Z, Time.in.Wake, Awakenings, Morning.Feel, Mnemosyne, MP, & Creativity
lmer(Total.Z ~ LSD + (1|Phase), data=lsd)

...
Random effects:
 Groups   Name        Variance Std.Dev.
 Phase    (Intercept)   54.9    7.41
 Residual             2544.3   50.44
Number of obs: 124, groups: Phase, 1

Fixed effects:
            Estimate Std. Error t value
(Intercept)   521.42       9.77    53.4
LSD            13.15       9.06     1.5

Correlation of Fixed Effects:
    (Intr)
LSD -0.464

R> lmer(Time.to.Z ~ LSD + (1|Phase), data=lsd)
Linear mixed model fit by REML
Formula: Time.to.Z ~ LSD + (1 | Phase)
   Data: lsd
  AIC  BIC logLik deviance REMLdev
 1030 1041   -511     1030    1022
Random effects:
 Groups   Name        Variance Std.Dev.
 Phase    (Intercept)   5.12    2.26
 Residual             237.89   15.42
Number of obs: 124, groups: Phase, 1

Fixed effects:
            Estimate Std. Error t value
(Intercept)    26.40       2.99    8.82
LSD             2.03       2.77    0.73

Correlation of Fixed Effects:
    (Intr)
LSD -0.463

R> lmer(Time.in.Wake ~ LSD + (1|Phase), data=lsd)
Linear mixed model fit by REML
Formula: Time.in.Wake ~ LSD + (1 | Phase)
   Data: lsd
  AIC  BIC logLik deviance REMLdev
 1007 1019   -500     1007     999
Random effects:
 Groups   Name        Variance Std.Dev.
 Phase    (Intercept)   4.25    2.06
 Residual             197.56   14.06
Number of obs: 124, groups: Phase, 1

Fixed effects:
            Estimate Std. Error t value
(Intercept)    21.82       2.73    8.00
LSD             2.69       2.52    1.07

Correlation of Fixed Effects:
    (Intr)
LSD -0.463

R> lmer(Awakenings ~ LSD + (1|Phase), data=lsd)
Linear mixed model fit by REML
Formula: Awakenings ~ LSD + (1 | Phase)
   Data: lsd
 AIC BIC logLik deviance REMLdev
 624 636   -308      617     616
Random effects:
 Groups   Name        Variance Std.Dev.
 Phase    (Intercept) 0.184    0.429
 Residual             8.553    2.925
Number of obs: 124, groups: Phase, 1

Fixed effects:
            Estimate Std. Error t value
(Intercept)    7.306      0.567    12.9
LSD            0.419      0.525     0.8

Correlation of Fixed Effects:
    (Intr)
LSD -0.463

Linear mixed model fit by REML
Formula: Morning.Feel ~ LSD + (1 | Phase)
   Data: lsd
 AIC BIC logLik deviance REMLdev
 296 307   -144      283     288
Random effects:
 Groups   Name        Variance Std.Dev.
 Phase    (Intercept) 0.0125   0.112
 Residual             0.5792   0.761
Number of obs: 124, groups: Phase, 1

Fixed effects:
            Estimate Std. Error t value
(Intercept)    2.597      0.148   17.59
LSD            0.339      0.137    2.48

Correlation of Fixed Effects:
    (Intr)
LSD -0.463

# investigate Morning Feel more closely to get a 95% CI
R> m <- mcmcsamp(lmer(Morning.Feel ~ LSD + (1|Phase), data=lsd), n=100000); HPDinterval(m, prob=0.95)$fixef
                lower   upper
(Intercept) -68.78845 72.7857
LSD           0.06933  0.6086

R> mp <- lmer(MP ~ LSD + (1|Phase), data=lsd); mp

Linear mixed model fit by REML
Formula: MP ~ LSD + (1 | Phase)
   Data: lsd
 AIC BIC logLik deviance REMLdev
 286 297   -139      273     278
Random effects:
 Groups   Name        Variance Std.Dev.
 Phase    (Intercept) 0.0106   0.103
 Residual             0.5057   0.711
Number of obs: 127, groups: Phase, 1

Fixed effects:
            Estimate Std. Error t value
(Intercept)    3.016      0.136    22.2
LSD           -0.127      0.126    -1.0

Correlation of Fixed Effects:
    (Intr)
LSD -0.461

R> mpm <- mcmcsamp(mp, n=100000); HPDinterval(mpm, prob=0.95)$fixef
               lower  upper
(Intercept) -64.5565 73.305
LSD          -0.3773  0.121


R> lmer(Creativity ~ LSD + (1|Phase), data=lsd)
Linear mixed model fit by REML
Formula: Creativity ~ LSD + (1 | Phase)
   Data: lsd
 AIC BIC logLik deviance REMLdev
 220 232   -106      206     212
Random effects:
 Groups   Name        Variance Std.Dev.
 Phase    (Intercept) 0.00629  0.0793
 Residual             0.29930  0.5471
Number of obs: 127, groups: Phase, 1

Fixed effects:
            Estimate Std. Error t value
(Intercept)   1.3750     0.1046   13.15
LSD          -0.1052     0.0971   -1.08

Correlation of Fixed Effects:
    (Intr)
LSD -0.461
~~~

As before, the highest _t_-value even with partial pooling to the extensive baseline data, is for 'Morning Feel'. The MLM spits out a 95% CI for its effect being increasing the score by 0.07-0.61 (0.34 would be an increase of _d_=0.42, which is nice). In contrast, the original _t_-test for 'Morning Feel' gave a CI of 0.05-0.63; so the pooling gained us a slightly narrower CI.

More importantly, what about mood/productivity (`MP`)? An ordinary linear model on just the data gives a CI of -0.3765-0.123. The MLM gives instead -0.3773-0.121. So unfortunately, the extra work doesn't noticeably change the conclusion.

# External links

- Discussion:

    - [Hacker News](https://news.ycombinator.com/item?id=6565869)
    - [Reddit](http://www.reddit.com/r/Nootropics/comments/1onbz3/lsd_microdosing_a_randomized_blind_selfexperiment/)
    - [Shroomery](http://www.shroomery.org/forums/showflat.php/Number/18993960)
- ["Are mystical experiences metaphysical evidence?"](https://meaningness.wordpress.com/2011/09/12/are-mystical-experiences-metaphysical-evidence/)/["Epistemology and enlightenment"](https://meaningness.wordpress.com/2012/09/13/epistemology-and-enlightenment/) -(David Chapman)

<!--
# Trip report

In September 2012, I prepared a [table of LSD vendors & products](Silk Road#vendor-table). When a particular vendor's listings went up, I added them in and they were no-brainer to order. I ordered a 2-tab Mayan on the 5th and they arrived on the 19th barely within my predicted time period of [2 weeks](http://predictionbook.com/predictions/8140 "My LSD order will arrive within 2 weeks: 70%") (but they [did arrive](http://predictionbook.com/predictions/8141 "My LSD order will arrive: 90%")). I rather liked their stealth packaging, that would not have occurred to me. My main complaint was that I was expecting it to arrive by the 15th or 16th, and when I PMed the vendor for the tracking number (I had paid for that), he never replied. More than a little annoying at the time, but the package did arrive, so I decided to leave a 5-star review after my trip.

I spent the next day doing the first tab. I should mention I have never done any psychedelics before, so I cannot possibly guess whether they were 250μg as advertised. It was a long and exhausting day, so I will just sketch it. I had a light breakfast, went through my checklist of preparations: empty camera, back up computer, clean up, shower & dress nicely, hide modafinil & other tab of LSD, and then review the trip plan - meditation, music, and walk.

At 1:25PM I finished preparations, took the tab sublingually, and went outside with my blanket to meditate. I noticed no taste beyond the paper. It was an extremely nice day out, with a very bright sun but a cool steady breeze off the water. I was disappointed in the first hour when nothing seemed to be happening during my meditation except I found it unusually easy to concentrate. I wondered if my slight muscle tremors were related, but I find the half-lotus posture difficult so that is not unusual. By 1:54 I finished meditating. A little disappointed that after half an hour, nothing seemed to be happening, I headed inside for some music.

The music was unusually absorbing; but within 15 minutes (by 2:26), a vague tiredness like I needed a nap, a headache, and some nausea had built up. At 2:45, I made myself a PB&J sandwich, but the bad feeling doesn't go away so I decide it's a good time to go for a long walk. (I check my pupils in the mirror before going. They seem a little bigger but I wasn't sure if I was imagining it - I don't regularly check my pupils' dilation.)

The walk at 2:50 makes me feel a little better within 10 minutes. During the walk, I notice my body seems to be feeling 'mechanical' and my movements weaker, with my skin feeling like a flesh glove (if that metaphor makes sense), although at the same time, the bright sunlight and cool wind feel exceptionally vivid to my senses; I was reminded of when I went skydiving and on the way down, the world seemed to 'pop'. Apparently the acidhead term for this is 'body load'. My normal chatter of thoughts and introspection slowed down considerably, perhaps because the walk was making me feel much better and I was trying to enjoy the raw sensations. I was relieved that the LSD was not a bust as I had begun to fear, since that would force a hard choice (continue the microdosing experiment with LSD of unknown quality or quantity, or abandon it by using the second tab to see if the first tab was a fluke?). One persistent problem was my jaw or neck muscles seemed to be rigid or clenching and I had to keep relaxing them or they would create a sort of want-to-vomit feeling, which was pretty strange when I focused on it. But I still wasn't impressed by the experience.

In no real hurry at all, by 3:25 I got to the end of the road where there's a beautiful view of the inlet and the sky. As I usually do on this walk, I happened to spend a little time cloud-watching, and I realized that the clouds were strobing like stop-animation as I focused on individual patches; in particular, I realized that I could force a visual flip (like the young/old woman optical illusion or the rabbit-duck illusion) from seeing a sky of blue with thin clouds to a roiling stormscape where the blue was the black, and the white clouds were just the illuminated underside. Quite interesting, and an unexpected [figure-ground](!Wikipedia "Figure-ground (perception)") inversion. I also could temporarily force [pareidolia](!Wikipedia) by visualizing and willing the clouds to form claw or grasping hands or vaguely human-like shapes.

This absorbed my attention for half an hour or so until a guy on the pier asked if I was OK (I hope just because I'd been laying looking like I was taking a nap and not because I was visibly tripping). I waved him off successfully but I decided it was a good time to head back. The walk back was entirely uneventful, although I stopped at the grove of trees by my place to watch the clouds some more from a longer perspective.

Back home, I spent the next 2-3 hours listening to music by _[Explosions in the Sky](!Wikipedia)_ tracks, which while planning I had thought would sound better on LSD. I was right - the experience was amazing. Lying in bed with my eyes blindfolded and just listening carefully, I have never followed the music so well, or been so moved emotionally or physically by it. My misanthropic soul was moved twice to tears.

Entirely wrung out by the experience, I went out to watch the sunset over the creek with the cat and ruminate over the day. This actually turned out to be almost as meaningful, since I realized as the cat gamboled over our little hill of a few tons of rocks that a cat or fox playing on a pile of rocks as the sun set was a good metaphor for my own life. (I am a thorough-going atheist, and as I predicted, I had no real [mystical experience](http://predictionbook.com/predictions/8159 "LSD: I will experience a partial or fully mystical experience, 35%") and I [remained an atheist](http://predictionbook.com/predictions/8144 "I will cease to identify as an atheist after my LSD trip: 10%").) This realization made me feel better.

When I went in, I was sitting in the bathroom thinking how my expectations were guiding the visual effects, and I thought to myself, "Speaking of pareidolia, I bet even this orange-bleach-stained towel could become something interesting if I focus hard enough" and after a few minutes I realized that I could see the stains as the Tibetan underworld god [Yama](!Wikipedia) and see the flames flicker behind the towel. (Yama is not important to me and I do not think about him, so I don't know how he came to mind. For a report in middle or high school long ago, I had drawn by hand a large albeit stripped down copy of [a Yama mandala](http://www.thangka-mandala.com/blog/wp-content/uploads/Mara-Wheel-of-Life.jpg). His design was really cool and I guess it stuck!)

After that I watched _[Wings of Honneamise](!Wikipedia)_ (I prefer it to _2001: A Space Odyssey_, and needed to rewatch it for my Gainax research), which was as excellent as I remembered. I noticed a number of things this time around that I hadn't the first time, like the protagonist employing his sword training in dealing with an assassin - echoing the general theme of him drawing on the training & space program he had previously considered useless. I also think I understand his attempted rape better: throughout the movie appear dichotomies between peace & war, good and bad - the space program is peaceful but used to spark war, technology is what lifts up man but also used to hurt and kill, etc. The protagonist befriends the woman and orphan, but the motivation to love can also be the motivation to desire.

By 9:39, I finished it and then did some dual n-back to see how bad my performance was 9-10 hours after dosing (average: 50/20/41/42/47). Some generic reading and chatting online rounded off my day. By this point, I felt pretty much fine except for some odd fine motor control issues: typing had become surprisingly challenging as I had to *think* about it. But I was kind of tired from all the new experience, so I went to bed - whereupon I suffered massive insomnia. This apparently isn't an unknown effect, although the reports I read did not emphasize it, and I should have planned on going to bed more like 3AM. Oh well. A lesson is learned but the damage is irreversible.

To quantify what I mean by 'massive insomnia', here are the Zeo numbers: I went to bed at 12:50AM, took 2.1 hours to fall asleep, slept for only 7.4 hours, awoke 8 times, and self-rated my morning feel at 1. All of these values are extreme for me: in z-scores, the last 4 are respectively 8.713 (!), -0.7232, 0.5249, & -2.304.

Overall, a good experience as [I expected](http://predictionbook.com/predictions/8160 "LSD: My trip will be generally positive (and not a 'bad trip'), 75%") especially since I [experienced no law enforcement trouble](http://predictionbook.com/predictions/8142 " I will be visited or questioned or arrested by police over my LSD order.") and so far have [experienced no flashbacks](http://predictionbook.com/predictions/8161 "LSD: I will experience any kind of 'flashback' within 5 years, 5%"). But I'm not sure I'll ever need to do a LSD trip again (the second tab is for the microdose experiment), and I don't understand how people can do it on even a monthly basis, for a number of reasons: LSD isn't cheap, for starter; I felt it was too powerful an experience to undergo for frivolous reasons (I definitely see why it was investigated in connection with brainwashing); and in particular, one shouldn't weaken it but save it for when one has questions or needs.

In retrospect, 250μg may have been too high and responsible for the 'body load' and the insomnia. I've felt somewhat similar feelings with too-high doses of stimulants and nootropics. (I don't regard it as a big deal, though: the insomnia was much more unpleasant, and I think could have been dealt with by staying up later.) Otherwise, the dose was OK. As I said, I had planned things and hidden anything incriminating and had already done the risk analysis, so I wasn't worried about police. It was a beautiful day out, few people were around, and I knew I was safe (and also that thinking I was safe helped *make* me be safe - '[set and setting](!Wikipedia)', right?). Plus, I seem to be an unusually calm and emotionally controlled person, so I had even less reason to fear turning out like the cliched 'friend panicking in the woods after a dose'. It seemed to work out.
-->

<!--
> I am surprised that your predictions for becoming a theist after the
> experience were so high! I'm also surprised that you would continue with the
> experiment regardless. I would have thought that this would represent a
> destruction of some kind of sacred values.

I have a healthy respect for the power of material conditions. I'm not the sort of person to think 'sure, plenty of other people found religion after hallucinating/taking-drugs/etc, but I'm sure *I'm* immune!' I'd rather be a theist knowing they're believing for irrational reasons and that it's an alief, than an atheist unsure whether it's belief or alief.

> Much of your experience sounds familiar, so there you go. The visual
> effect is interesting, it makes it so much more clear that high-level
> concepts do feed back down into lower level perceptions.

Yes, like an ultra-powerful version of visual illusions like the rabbit-duck one. I wonder if any of the people in illusions are had taken psychedelics at some point and been impressed by the top-down influence of apparently-bottom-up processes?

> Music is indeed
> incredible. I usually assume 12 hours of sleeplessness after dosing, FYI.
>
> "My misanthropic soul was moved twice to tears." - This interests me the
> most, largely because you self-identify as misanthropic. I'm curious where
> that comes from, whether this is something you endorse, and whether this
> experience has changed that in any way.

It comes from a sort of 'everyone on the Internet is wrong' feeling. For better or worse, I spend a lot of time interacting with people who are ignorant, unaware of the huge flaws in their beliefs and approaches, biased, uncalibrated, and uninclined to do anything about this. (LW is not excluded here. How many times have I spent 5 seconds in Google to confirm or disconfirm a claim, which another commenter was too lazy to do? I think the list I was keeping is up to 30 entries or so.)

The comments on my LSD microdosing experiment bring this out in dramatic relief: everyone is eager to find some flaw, no matter how improbable, which will let them dismiss the results completely and not update in the slightest bit. Will any of them do a better experiment to improve the claimed fatal flaw? Hell no!
I can't even except Fadiman here. While he didn't give me any of the bullshit a lot of people did, I asked him before I posted it whether he or anyone else had attempted to replicate my experiment. No one had. To emphasize that: Fadiman is a trained psychologist who appreciates the need for systematic data collection + randomization + blinding with easy access to LSD who is keenly interested in microdosing inasmuch as he has done microdosing for decades while publicly professing its value, who understands & admires my procedure and has had at least half a year to replicate my experiment himself - and has not done so!

It's not like this is a trivial issue for him, it's basically his career at this point. It's not like it's a trivial question for microdosing users, it's a hassle which comes with real legal risk. Yet...

"Reading Anton Chekhov's stories, one feels oneself in a melancholy day of late autumn, when the air is transparent and the outline of naked trees, narrow houses, greyish people, is sharp. Everything is strange, lonely, motionless, helpless. The horizon, blue and empty, melts into the pale sky, and its breath is terribly cold upon the earth, which is covered with frozen mud. The author's mind, like autumn sun, shows up in hard outline the monotonous roads, the crooked streets, the little squalid houses in which tiny, miserable people are stifled by boredom and laziness and fill the houses with an unintelligible, drowsy bustle. ... There passes before one a long file of men and women, slaves of their love, of their stupidity and idleness, of their greed for the good things of life; there walk the slaves of the dark fear of life; they straggle anxiously along, filling life with incoherent words about the future, feeling that in the present there is no place for them. ... In front of that dreary, gray crowd of helpless people there passed a great, wise, and observant man: he looked at all these dreary inhabitants of his country, and, with a sad smile, with a tone of gentle but deep reproach, with anguish in his face and in his heart, in a beautiful and sincere voice, he said to them: "You live badly, my friends. It is shameful to live like that.""

> Have you noticed any lasting effects in general?

I felt better about myself for a little while, but I think it wore off. The most noticeable lasting effect so far has been anger at the blatant intellectual dishonesty of many pro-LSD commenters...
-->