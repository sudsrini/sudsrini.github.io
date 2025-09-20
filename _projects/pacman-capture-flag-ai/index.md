---
order: 4
layout: post
title: Pacman Capture the Flag AI Contest
description: Design and implement intelligent agents to compete in a multi-player "Capture the Flag" variant of Pacman with offensive and defensive strategies as part of coursework
skills:
  - Python
  - Object-Oriented Programming
  - Search Algorithms & Pathfinding
  - Multi-Agent Systems
  - Algorithm Design
  - Game AI
  - Adversarial AI
  - Strategy Development
main-image: /projects/pacman-capture-flag-ai/pacman-ai.jpg
report-url: /assets/reports/pacman-capture-flag-report.pdf
---

## Objective
Design and implement intelligent agents to compete in a multi-player "Capture the Flag" variant of Pacman, where agents must balance offense (collecting food in enemy territory) and defense (guarding home food) under limited and noisy observations.

## Process
- Started from the provided baseline impulse agent, which simply reacted to the nearest food or opponent
- Modified and extended the logic to make decisions more goal-directed rather than purely reactive
- Added offensive improvements for safer food collection and return to base
- Enhanced defensive responses by better tracking and intercepting invading opponents using noisy distance data
- Tuned agent performance to stay within strict runtime limits (≤3s per move)

## Results
- Achieved 7th place out of 15 teams in the final round-robin competition
- Outperformed baseline agents by combining improved offensive routing with smarter defensive play
- Demonstrated the ability to analyze existing algorithms, identify weaknesses, and engineer stronger strategies


