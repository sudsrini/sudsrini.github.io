---
order: 2
layout: post
title: Analysis of Rigging Plate
description: Detailed structural and stress analysis of rigging plate components for lifting and hoisting applications
skills:
  - ANSYS Mechanical
  - Stress Analysis
  - Mesh Convergence & Validation Studies
  - SolidWorks
  - Finite Element Analysis (FEA)
  - Engineering Design
main-image: /projects/rigging-plate-analysis/rigging-plate.jpg
report-url: /assets/reports/rigging-plate-analysis-report.pdf
---

## Objective
Evaluate the structural integrity of a steel rigging plate used in rope-access and rescue applications using finite element analysis (FEA). The goal was to determine stress distribution, deformation, and breaking strength while ensuring compliance with the 36 kN strength requirement.

## Process
- Modeled a 10 mm thick steel rigging plate in SolidWorks and imported into ANSYS Mechanical
- Applied steel properties: E = 190 GPa, ν = 0.3, yield strength = 290 MPa
- Used quadrilateral dominant meshing with quadratic elements for accuracy around holes and fillets
- Conducted simulations under applied loads at multiple lugs with fixed boundary support
- Performed mesh convergence studies:
  - **Global Mesh**: tested multiple element sizes, converged at 0.8 mm
  - **Local Refinement**: applied up to 3 levels of refinement near rope lugs to capture stress concentrations

## Results
- Maximum stress observed: 261 MPa at 36 kN load (below steel yield strength)
- Breaking strength estimated at ~40 kN, exceeding the 36 kN requirement
- Maximum deformation = 0.022 mm, negligible relative to geometry size
- Convergence studies confirmed that a 0.8 mm global mesh with local refinement at stress-critical regions provides optimal accuracy

## Conclusion
Analysis validated that the rigging plate design meets safety requirements and can be certified for use.

## Report
📄 [Click here for full report](/assets/reports/RiggingPlate_SudarsanSrinivasan.pdf)
