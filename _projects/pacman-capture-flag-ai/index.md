---
order: 4
layout: post
title: Pacman Capture the Flag AI Contest
description: Designed and implemented intelligent agents for a multi-player Capture the Flag variant of Pacman as part of a class-wide tournament at the University of Washington. Finished 7th out of 15 teams in a round-robin competition across fixed and random layouts.
skills:
  - Python
  - Object-Oriented Programming
  - Search Algorithms
  - Multi-Agent Systems
  - Adversarial AI
  - Algorithm Design
  - Strategy Development
main-image: /projects/pacman-capture-flag-ai/pacman.png
report-url: /assets/reports/pacman-capture-flag-report.pdf
---

## Objective
Design and implement intelligent agents that balance offense (collecting food in enemy territory) and defense (guarding home food) under limited and noisy opponent observations, competing in a round-robin tournament against 14 other teams.

## Process
- Started from the provided baseline reflex agent, which simply reacted to the nearest food or opponent
- Analyzed the baseline's weaknesses, including purely reactive behavior with no goal-directed planning
- Added offensive improvements for safer food collection and smarter return-to-base routing
- Enhanced defensive responses by better tracking and intercepting invading opponents using noisy distance data
- Tuned agent performance to stay within strict runtime constraints (3 seconds per move, 15 second startup allowance)

## Results
- Finished 7th out of 15 teams in the final round-robin competition, placing in the top half of a competitive field
- Outperformed baseline agents by combining improved offensive routing with smarter defensive play
- Demonstrated ability to analyze existing algorithms, identify weaknesses, and engineer stronger strategies

## Media

<div style="text-align: center;">
  <figure style="margin: 12px auto; width: fit-content; text-align: center;">
    <video controls playsinline style="max-width: 100%; width: 760px; height: auto; display: block; margin: 0 auto;">
      <source src="{{ '/projects/pacman-capture-flag-ai/tournament.mp4' | relative_url }}" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <figcaption style="max-width: 760px; text-align: center; font-size: 0.95em; color: #666; margin: 6px auto 0;">Agent gameplay, Capture the Flag tournament, UW CSE415, Autumn 2024</figcaption>
  </figure>
</div>

<div style="text-align: center;">
  <figure style="margin: 12px auto; width: fit-content; text-align: center;">
    <video controls playsinline style="max-width: 100%; width: 760px; height: auto; display: block; margin: 0 auto;">
      <source src="{{ '/projects/pacman-capture-flag-ai/test%20layout.mp4' | relative_url }}" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
    <figcaption style="max-width: 760px; text-align: center; font-size: 0.95em; color: #666; margin: 6px auto 0;">Test layout gameplay, showcasing agent behavior on an alternate map configuration</figcaption>
  </figure>
</div>

<div style="text-align: center;">
  <figure style="margin: 12px auto; width: fit-content; text-align: center;">
    <img src="{{ '/projects/pacman-capture-flag-ai/leaderboard.jpg' | relative_url }}" alt="Tournament leaderboard" style="max-width: 75%; width: 760px; height: auto; display: block; margin: 0 auto;" />
    <figcaption style="max-width: 760px; text-align: center; font-size: 0.95em; color: #666; margin: 6px auto 0;">Tournament leaderboard, final placement 7th out of 15 teams</figcaption>
  </figure>
</div>
