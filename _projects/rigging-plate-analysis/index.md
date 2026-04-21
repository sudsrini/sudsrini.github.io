---
order: 2
layout: post
title: Analysis of Rigging Plate
description: Performed structural FEA on a steel rigging plate for rope-access and rescue applications, validating compliance with a 36 kN certification strength requirement. Conducted global and local mesh convergence studies to ensure result accuracy. Estimated breaking strength of ~40 kN exceeded the requirement.
skills:
  - ANSYS Mechanical
  - Stress Analysis
  - Mesh Convergence Studies
  - SolidWorks
  - Finite Element Analysis (FEA)
  - 2D Plane Stress Modeling
main-image: /projects/rigging-plate-analysis/riggingplate.png
report-url: /assets/reports/rigging-plate-analysis-report.pdf
---


## Objective
Evaluate the structural integrity of a steel rigging plate used in rope-access and rescue applications using FEA. Determine stress distribution, deformation, and breaking strength while verifying compliance with the 36 kN certification requirement.

## Process
- Modeled the rigging plate as a 2D plane stress system in SolidWorks and imported into ANSYS Mechanical. Material properties: E = 190 GPa, yield strength = 290 MPa
- Applied quadrilateral dominant meshing with quadratic elements -- chosen because 8-node quads capture bending and stress gradients at holes and fillets more accurately than linear elements
- Ran global mesh convergence study across 9 element sizes from default to 0.8 mm -- convergence confirmed at 0.8 mm with less than 1% change between successive refinements
- Applied local mesh refinement up to level 3 at rope lug holes to capture stress concentrations at geometric discontinuities

<div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: flex-start; justify-content: center;">
  <figure style="margin: 0; width: fit-content; text-align: center;">
    <img src="/projects/rigging-plate-analysis/4a.png" alt="Mesh configuration figure 4a" style="height: 220px; width: auto; display: block; margin: 0 auto;" />
    <figcaption style="text-align: center; font-size: 0.9em; color: #666; margin-top: 6px;">Figure 4a</figcaption>
  </figure>
  <figure style="margin: 0; width: fit-content; text-align: center;">
    <img src="/projects/rigging-plate-analysis/4b.png" alt="Mesh configuration figure 4b" style="height: 220px; width: auto; display: block; margin: 0 auto;" />
    <figcaption style="text-align: center; font-size: 0.9em; color: #666; margin-top: 6px;">Figure 4b</figcaption>
  </figure>
  <figure style="margin: 0; width: fit-content; text-align: center;">
    <img src="/projects/rigging-plate-analysis/4c.png" alt="Mesh configuration figure 4c" style="height: 220px; width: auto; display: block; margin: 0 auto;" />
    <figcaption style="text-align: center; font-size: 0.9em; color: #666; margin-top: 6px;">Figure 4c</figcaption>
  </figure>
</div>
<p style="font-size: 0.95em; color: #666; margin-top: 8px; text-align: center;">Mesh configurations, from coarse (1 mm global) to refined (0.8 mm global with level 3 local refinement at rope lug holes)</p>

- Applied boundary conditions: fixed support at top edge, three rope lug loads totaling 36 kN -- two at 45 degree angles and one vertical

<div style="text-align: center;">
  <figure style="margin: 12px auto; width: fit-content; text-align: center;">
    <img src="/projects/rigging-plate-analysis/5.png" alt="Boundary conditions and load setup" style="height: 250px; width: auto; display: block; margin: 0 auto;" />
    <figcaption style="max-width: 700px; text-align: center; font-size: 0.95em; color: #666; margin: 6px auto 0;">Boundary conditions and load setup, fixed support at top edge and three rope lug loads applied at 36 kN total</figcaption>
  </figure>
</div>

## Results
- Maximum von Mises stress: 261 MPa at 36 kN load -- below the yield strength of 290 MPa
  
<div style="text-align: center;">
  <figure style="margin: 12px auto; width: fit-content; text-align: center;">
    <img src="/projects/rigging-plate-analysis/9b.png" alt="Von Mises stress distribution at 36 kN load" style="height: 300px; width: auto; display: block; margin: 0 auto;" />
    <figcaption style="max-width: 700px; text-align: center; font-size: 0.95em; color: #666; margin: 6px auto 0;">Von Mises stress distribution at 36 kN load, maximum stress of 261 MPa concentrated at rope lug holes, below yield strength of 290 MPa</figcaption>
  </figure>
</div>

- Breaking strength estimated at ~40 kN, exceeding the 36 kN certification requirement
- Maximum deformation: 0.022 mm -- negligible relative to geometry
- Local refinement revealed stress concentrations at rope lug holes approaching yield. Adjacent node stresses used for a more realistic assessment given stress singularities at sharp edges
  
<div style="text-align: center;">
  <figure style="margin: 12px auto; width: fit-content; text-align: center;">
    <img src="/projects/rigging-plate-analysis/13.png" alt="Stress comparison between global mesh and local refinement" style="height: 300px; width: auto; display: block; margin: 0 auto;" />
    <figcaption style="max-width: 700px; text-align: center; font-size: 0.95em; color: #666; margin: 6px auto 0;">Stress comparison between global mesh (257 MPa) and global mesh with local refinement (307 MPa), where local refinement captures higher stress concentrations at geometric discontinuities</figcaption>
  </figure>
</div>

## Conclusion
The rigging plate design meets the 36 kN certification strength requirement. Local stress concentrations at rope lug holes suggest that fillet radius adjustments could improve safety margins and long-term fatigue performance.

## Report
📄 [Click here for full report](/assets/reports/RiggingPlate_SudarsanSrinivasan.pdf)
