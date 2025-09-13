---
order: 4
layout: post
title: Analysis of Roof Truss
description: Structural analysis of roof truss systems using finite element methods and engineering principles
skills:
  - ANSYS Mechanical
  - Structural Analysis
  - Finite Element Analysis (FEA)
  - Load Calculation
  - Stress Analysis
  - Engineering Calculations
  - CAD Modeling
  - Material Properties
main-image: /projects/roof-truss-analysis/roof-truss.jpg
report-url: /assets/reports/roof-truss-analysis-report.pdf
---

## Objective
Evaluate the structural performance of a 40 ft × 80 ft roof truss under combined roofing and snow loads using finite element analysis (FEA), and determine whether additional supports are necessary to minimize deflection.


## Process
- Modeled a 2D truss structure representing one of eight assemblies in the roof system
- Applied material properties of Western White Pine (E = 10 GPa, ν = 0.3)
- Defined truss elements with a mesh of 13 elements and 21 nodes
- Distributed a uniform load of 150 lbf/ft² (roofing materials + snow) across trusses, resolving into force components
- Simulated two support configurations:
  - **Config 1**: Fixed supports only at truss ends
  - **Config 2**: Additional central vertical support at the bottom chord

## Results
- **Config 1**: Maximum vertical deflection = 3.13 inches at mid-span → excessive sagging risk
- **Config 2**: Maximum vertical deflection reduced to 0.75 inches (76% improvement)

## Recommendation
Recommended adding a central vertical support to ensure stability, reduce long-term sagging, and enhance load distribution without major material increase.

## Report
📄 [Click here for full report](/assets/reports/RoofTruss_SudarsanSrinivasan.pdf)
