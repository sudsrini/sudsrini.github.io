---
order: 2
layout: case-study
featured: true
title: "Boeing Advanced Research Collaboration"
description: "Mechanical lead for a University of Washington cleaning-robot project. I developed the packaging and cleaning mechanism, then used prototypes and testing to fit the system within a tight vertical envelope."
role: "University of Washington research collaboration \u00b7 Mechanical lead"
main-image: /projects/uw-barc/uw-barc.jpg
skills: ["Mechanical architecture", "SolidWorks", "Concept selection", "Powertrain calculations", "Prototype testing"]
---

<nav class="case-nav" aria-label="On this page"><a href="#packaging">Robot packaging</a><a href="#cleaning">Cleaning mechanism</a><a href="#drive">Brush drive</a></nav>

## Overview

As part of the Boeing Advanced Research Collaboration (BARC) at the University of Washington, I led the mechanical design of an autonomous cleaning robot for non-destructive inspection (NDI) water cells. These tanks required 2–3 days of manual cleaning downtime per cycle. The goal was a compact, fully autonomous system that could operate within tight tank geometries and reduce that maintenance burden.

I served as the mechanical lead in a two-person mechanical team, guiding architecture decisions, subsystem integration, and prototype development from concept through a working prototype build.

### Understanding the NDI cell

The video below provides context for the inspection cell and its operating environment.

{% include youtube-video.html id="ZQQSW8a-vXY" autoplay="false" width="900px" %}

<h2 id="packaging">Iteration 1: packaging and prototype integration</h2>

As mechanical lead, I worked on chassis layout, component packaging, and subsystem integration. CAD helped establish the arrangement before building the initial robot. Iteration 1 demonstrated autonomous movement and provided a physical platform for further development.

<div class="case-gallery">
{% include case-figure.html src="/assets/case-studies/barc-packaging.jpg" caption="Iteration 1 robot packaging in CAD." %}{% include case-figure.html src="/assets/case-studies/barc-prototype.jpg" caption="Iteration 1 physical robot prototype." %}
</div>

<h2 id="cleaning">Revising the cleaning system for a 4-inch height limit</h2>

### Concepts and testing

The revised cleaning assembly had to fit within a maximum height of 4 inches and leave vertical space for the 2D lidar. I used a Pugh matrix to shortlist cleaning concepts, then procured brush options including a green Ryobi brush and a red cylindrical brush.

I designed and 3D printed parts for the test fixtures, assembled the setups, and compared cleaning efficiency. Physical testing informed the selection of the red cylindrical brush and the parts needed for the next assembly.

{% include case-figure.html src="/assets/case-studies/barc-cylindrical-brush.jpg" caption="Selected red cylindrical brush and its drive arrangement." %}

<p class="case-result"><strong>Result:</strong> The resulting assembly was approximately 3.5 inches high, meeting the 4-inch limit while retaining vertical space for the 2D lidar.</p>

<h2 id="drive">Sizing and evaluating the brush drive</h2>

I used hand calculations to evaluate motor options and transmission ratios for a target brush speed of 400 to 600 rpm. The estimated torque requirement was 0.151 N·m per brush, corresponding to approximately 9.5 W at 600 rpm.

The selected motor was a 24 V brushed planetary gearmotor. Its rated operating point was 975 rpm and approximately 0.232 N·m. I ordered multiple pulleys so the drive ratio could be changed and evaluated through testing.

{% include case-figure.html src="/assets/case-studies/barc-brush-fixture.jpg" caption="Brush cleaning test setup with the motor, pulley drive, and prototype support parts." %}

<details class="case-detail"><summary>Motor and ratio calculation</summary>
<p>The motor was an ISL Products MOT-I-81334-IG38. A 2.44:1 reduction was one evaluated configuration: 975 / 2.44 gives approximately 400 rpm, with an ideal output torque of 0.232 × 2.44 ≈ 0.567 N·m before transmission losses. This calculation supported pulley selection; it does not establish the final tested ratio or measured output torque.</p>
</details>
