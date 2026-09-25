---
order: 0
layout: case-study
featured: true
title: "SharkNinja"
description: "Consumer product development through mechanical testing, failure investigation, and design validation. My work connected what happened inside the machine to changes that could be tested and released."
role: "New product development"
main-image: /experience/sharkninja/sharkninja.png
skills: ["Product validation", "Root cause analysis", "Prototyping", "Supplier collaboration"]
---

<nav class="case-nav" aria-label="On this page"><a href="#scraper">Scraper performance</a><a href="#compressor">Compressor investigation</a><a href="#condensation">Condensation testing</a><a href="#automation">Test-data automation</a></nav>

## Product context

A slush machine freezes a thin layer of liquid onto a refrigerated barrel. A rotating auger scrapes and mixes the product, so changes to the scraping surface and cooling behaviour can affect the final consistency. I worked with the new product development team on performance, reliability, and practical ways to evaluate design changes.

<div class="case-gallery">
  <figure class="case-figure">
    <a href="https://sharkninja.my/products/ninja-slushi-fs301" target="_blank" rel="noopener">
      <img src="https://sharkninja.my/cdn/shop/files/FS301-ATF-05.png?v=1775181973" alt="RapidChill illustration showing liquid circulating around the refrigerated cylinder" loading="lazy" decoding="async">
    </a>
    <figcaption><strong>Cooling and circulation.</strong> Liquid circulates around the refrigerated cylinder as it cools. Illustration: <a href="https://sharkninja.my/products/ninja-slushi-fs301" target="_blank" rel="noopener">SharkNinja</a>.</figcaption>
  </figure>
  {% include case-figure.html src="/assets/case-studies/slush-barrel-ice.jpg" caption="Ice formation and scraping. The refrigerated barrel is the freezing surface; the rotating auger scrapes and mixes the product. Photo from my portfolio materials." %}
</div>

<div class="case-context-secondary">
{% include case-figure.html src="/experience/sharkninja/Slushi%20exploded%20diagram.webp" caption="FS301 exploded view showing the vessel, auger, and surrounding components." %}
</div>

<h2 id="scraper">Evaluating a change to the ice-scraping surface</h2>

### Problem

Microribs are small rib-like features on the auger's scraping surface, intended to improve ice removal. Reported performance was inconsistent. Removing the features required evidence that the machine could still deliver the intended recipe performance.

### My approach

I shortlisted eight key recipes that could be affected by the change and compared performance against the relevant KPIs. I assessed the results recipe by recipe to identify where the design change affected performance.

{% include case-figure.html src="/assets/case-studies/slush-scraper-test.jpg" caption="Ice accumulation during scraper evaluation. This image illustrates the test context; the decision was based on comparisons across eight recipes." %}

### Decision and validation

Six of the eight recipes performed on par without microribs. For the remaining two, I proposed reducing condenser cooling fan speed based on recipe detection and freezing point. I validated those changes and released them into production.

<p class="case-result"><strong>Outcome:</strong> Six recipes achieved parity without microribs; the remaining two were addressed through validated, recipe-dependent fan control changes.</p>

<h2 id="compressor">Investigating recurring compressor stalls</h2>

### Investigation

I investigated recurring stalls across five affected units, reproducing the behaviour and conducting teardown inspections. Witness marks and shaft seizure provided physical evidence to guide the investigation. I coordinated directly with the supplier in China to share findings and support further root cause analysis.

{% include case-figure.html src="/assets/case-studies/compressor-teardown.jpg" caption="Compressor shaft inspection during the stall investigation." %}

### Containment and ownership

I supported an interim software correction and follow-up validation to contain the observed stall behaviour. My contribution covered investigation, teardown evidence, supplier coordination, and validation support. Further supplier investigation was needed to establish the full causal chain.

<h2 id="condensation">A faster way to evaluate condensation management</h2>

A humidity chamber was not available for the planned setup. I developed a mist-spray method to evaluate prototype condensation-management designs and used it to assess a proposed redirection of condensate.

{% include case-figure.html src="/assets/case-studies/condensation-observation.jpg" caption="Condensation observed on the assembly during development testing." %}

The method reduced the test cycle time by approximately 80%, providing a practical development test for comparing prototype condensation-management designs.

<h2 id="automation">Automating test-data review</h2>

Different product platforms produced test logs with different data structures. I developed a script to automate data cleanup and processing for the dual-barrel machine, adapting an existing analysis workflow to its data format.

I added plots of relevant operating signals for both barrels, with additional diagnostic information displayed when particular errors occurred. A run-summary box brought the key information together for quicker review.

Other engineers regularly used the revised tool to review test runs, reducing repetitive preparation and making relevant results easier to find.
