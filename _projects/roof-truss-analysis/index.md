---
order: 3
layout: post
title: Analysis of Roof Truss
description: Evaluated structural performance of a 40 ft x 80 ft roof truss under combined roofing and snow loads using FEA. Compared two support configurations and recommended adding a central vertical support, reducing maximum deflection by 76% from 3.13 inches to 0.75 inches.
skills:
  - ANSYS Mechanical
  - Finite Element Analysis (FEA)
  - Structural Analysis
  - Load Calculation
  - Truss Element Modeling
  - Hand Calculations
main-image: /projects/roof-truss-analysis/rooftruss.png
report-url: /assets/reports/roof-truss-analysis-report.pdf
---

## Objective
Determine whether a 40 ft x 80 ft roof truss structure requires additional support under combined roofing and snow loads of 150 lbf/ft2, and quantify the deflection improvement if an additional support is added.

## Process
- Modeled a 2D truss structure in ANSYS representing one of eight assemblies in the roof system. Material: Western White Pine (E = 10 GPa). Element type: truss elements with one element per member to ensure equilibrium at each node
- Calculated total load from roofing materials and snow across the sloped surface -- 150 lbf/ft2 distributed across 8 trusses, resolving into force components at each top chord node (Fx = 30,000 lbf, Fy = -15,000 lbf per side)
- Simulated two support configurations: Note: Load distribution and number of truss assemblies were inferred from the problem schematic. Results are valid within these assumptions.
  - Config 1: Fixed supports at both ends of the bottom chord only
<div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: flex-start; justify-content: center;">
  <figure style="margin: 0; width: fit-content; text-align: center;">
    <img src="/projects/roof-truss-analysis/7.png" alt="Boundary conditions, configuration 1" style="height: 220px; width: auto; display: block; margin: 0 auto;" />
    <figcaption style="text-align: center; font-size: 0.9em; color: #666; margin-top: 6px;">Config 1 with end supports only </figcaption>
  </figure>
  </div>

  - Config 2: Fixed supports at both ends plus an additional vertical support at the center of the bottom chord
<div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: flex-start; justify-content: center;">
  <figure style="margin: 0; width: fit-content; text-align: center;">
    <img src="/projects/roof-truss-analysis/8.png" alt="Boundary conditions, configuration 2" style="height: 220px; width: auto; display: block; margin: 0 auto;" />
    <figcaption style="text-align: center; font-size: 0.9em; color: #666; margin-top: 6px;"></figcaption>
  </figure>
</div>
<p style="font-size: 0.95em; color: #666; margin-top: 8px; text-align: center;">Config 2 with additional central support </p>


## Results
- Config 1: Maximum vertical deflection of 3.13 inches at mid-span -- insufficient restraint causing excessive sagging under load

<div style="text-align: center;">
  <figure style="margin: 12px auto; width: fit-content; text-align: center;">
    <img src="/projects/roof-truss-analysis/9a.png" alt="Config 1 total deformation" style="height: 220px; width: auto; display: block; margin: 0 auto;" />
    <figcaption style="max-width: 700px; text-align: center; font-size: 0.95em; color: #666; margin: 6px auto 0;">Config 1 total deformation (4x scale), maximum deflection of 3.13 inches at center of bottom chord</figcaption>
  </figure>
</div>

- Config 2: Maximum vertical deflection reduced to 0.75 inches -- a 76% reduction

<div style="text-align: center;">
  <figure style="margin: 12px auto; width: fit-content; text-align: center;">
    <img src="/projects/roof-truss-analysis/10a.png" alt="Config 2 total deformation" style="height: 220px; width: auto; display: block; margin: 0 auto;" />
    <figcaption style="max-width: 700px; text-align: center; font-size: 0.95em; color: #666; margin: 6px auto 0;">Config 2 total deformation (4x scale), maximum deflection reduced to 0.74 inches with central support added</figcaption>
  </figure>
</div>

- X-direction deflection also reduced from 0.78 inches to 0.33 inches at load application points

## Conclusion
The original end-only support configuration is inadequate for the expected roof and snow loads. Adding a central vertical support at the bottom chord mid-span reduces deflection by 76% and significantly improves long-term structural stability without a major increase in material or complexity.

## Report
📄 [Click here for full report](/assets/reports/RoofTruss_SudarsanSrinivasan.pdf)
