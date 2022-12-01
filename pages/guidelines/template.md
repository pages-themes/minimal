---
title: Planning template
layout: default
permalink: /template
---

# Planning template

<table>
<tr>
<td style="width: 32px;" align="center"><a href="../downloads/template.docx"><img src="../images/guidelines/docx_icon.svg" style="width: 32px;"/></a></td>
<td style="vertical-align:middle"> <a href="../downloads/template.docx">Download template</a></td>
</tr>
</table>

This document is intended as a template for planning the content of a disease map. It can be adjusted to a specific project depending on the topic, objectives and input from domain experts. The overall purpose of this document is to initiate a quick start of map development by focusing on priority pathways and by conveniently organising initial information. It can be maintained throughout the project or discontinued when more advanced management tools are employed, for example, a map in MINERVA with a possibility of exporting all molecules and interactions, analytical tools, Neo4j graph database for advanced access and management, etc.

## Table of contents

[Map setup](#map-setup)  
&nbsp; &nbsp; &nbsp; [Development team](#development-team)  
&nbsp; &nbsp; &nbsp; [Domain experts](#domain-experts)  
&nbsp; &nbsp; &nbsp; [Map purpose](#map-purpose)  
&nbsp; &nbsp; &nbsp; [Scope](#scope)  
&nbsp; &nbsp; &nbsp; [Granularity](#granularity)    
&nbsp; &nbsp; &nbsp; [Sustainability plan](#sustainability-plan)  
&nbsp; &nbsp; &nbsp; [Resources](#resources)  
[Disease description](#disease-description)  
&nbsp; &nbsp; &nbsp; [Disease search terms](#disease-search-terms)  
&nbsp; &nbsp; &nbsp; [Disease identifiers](#disease-identifiers)  
&nbsp; &nbsp; &nbsp; [Related diseases](#related-diseases)  
&nbsp; &nbsp; &nbsp; [Disease subtypes](#disease-subtypes)  
[Map content](#map-content)  
&nbsp; &nbsp; &nbsp; [Cell types involved](#cell-types-involved)  
&nbsp; &nbsp; &nbsp; [Pathways involved](#pathways-involved)  
&nbsp; &nbsp; &nbsp; [Molecules involved](#molecules-involved)  
&nbsp; &nbsp; &nbsp; [Modules/hallmarks](#modules-hallmarks)  
[Causes and outcomes](#causes-and-outcomes)  
&nbsp; &nbsp; &nbsp; [Causes](#causes)  
&nbsp; &nbsp; &nbsp; [Outcomes](#outcomes)  
[Treatment and recovery](#treatment-and-recovery)  
&nbsp; &nbsp; &nbsp; [Treatment](#treatment)  
&nbsp; &nbsp; &nbsp; [Recovery mechanisms](#recovery-mechanisms)  

## Map setup

This section outlines main decisions for map setup including map purpose, its scope and the data model chosen.

### Development team

Please list authors of the map, with names, affiliations, ORCIDs and contact emails. Please mark the contact details of the lead developer.

### Domain experts

It is advised to have three-twelve members in the panel of domain experts involved in the map development, normally clinicians, immunologists and bench scientists. This way it is possible to develop a consensus view on disease mechanisms and shape a conceptual disease model adequately represented and practically applicable in preclinical research.

### Map purpose

This section should highlight motivation for map development and intended applications of the map. If this disease map is planned as part of a larger translational project, what are the goals of that project and the role of the map in it.

### Scope

Initial description of what the scope of the map might be and what would be sufficient to include in the first version.

### Granularity

It is possible to choose from Process Description (most detailed), Activity Flow (middle level of details) and top-level view in Activity Flow (minimal details and many omitted interactions). The top-level view often takes the form of a cellular interaction diagram, especially for immune system disorders (for example, [AsthmaMap Cellular Interactions](https://asthma-map.org/ci)).

### Sustainability plan

The sustainability plan should include map storage and online access, map maintenance (for example, with changes of IDs in connected databases) and possible regular updates.

### Resources/funding

This section describes resources available for the map development, or, if at a proposal stage - resources required. It is important to make sure that adequate resources are allocated. An initial estimation can be one researcher for two years but it depends on the topic, the scope, the level of granularity, availability of domain experts involved, sustainability plan and intended applications such as possible computational modelling and hypothesis verification experiments. Expected expertise of map developers: biology, bioinformatics or other related fields. 

## Disease description

Disease identifiers and search terms help to determine the focus and put the topic in the context of related diseases and comorbidities.

### Disease search terms

Here we collect search terms suggested by the experts or identified while reading key review papers. Example search queries are provided on the [knowledge formalisation](https://disease-maps.org/formalisation#pubmed-search) page.

### Disease identifiers

Disease identifiers can be searched via the [Disease Ontology](https://disease-ontology.org). For example, for asthma: DOID:2841, EFO:0000270, GARD:10246, ICD10CM:J45, ICD9CM:493, KEGG:05310, MESH:D001249, NCI:C28397, OMIM:600807, UMLS_CUI:C0004096. For allergic asthma as a subtype of asthma: DOID:9415, ICD10CM:J45, ICD9CM:493.0, UMLS_CUI:C0155877. 

### Related diseases

Working with disease identifiers might help to determine the focus of the map and connect related diseases and comorbidities. For example, for asthma, related diseases are chronic obstructive pulmonary disease (COPD) and obesity, and also the diseases of the “atopic march” - progression from atopic dermatitis to allergic rhinitis and asthma. Parasite infections can be studied in connection to asthma to understand the role of immunoglobulin E (IgE) in asthma. Exploring these aspects can lead to interesting hypotheses and collaborations.  

### Disease subtypes

This section lists disease phenotypes (observable characteristics, without direct implication of specific mechanisms) and, if such information available, endotypes (distinct molecular mechanisms), discussed in the literature and suggested by domain experts.  

## Map content  

This part can be adjusted to a specific project and normally lists such map components as key molecules, pathways and cell types involved, as well as outlines larger-scale modules planned.  

### Cell types involved

This section helps to gradually build a list of tissues and cell types involved in disease mechanisms, with the corresponding collection of evidence in publications.

### Pathways involved

At initial stages it is important to identify priority pathways to start developing the first version of the map while more information is collected and the design of the map is determined.

### Molecules involved  

Molecules involved can be found in the literature and prioritised according to their role in the disease. Databases such as [Open Targets Platform](https://platform.opentargets.org) can be used. For example, for allergic asthma: [MONDO_0004784](https://platform.opentargets.org/disease/MONDO_0004784/associations).

### Modules/hallmarks

This section helps to plan larger-scale building blocks (map modules) that reflect hallmarks of a disease. For example modules of the [Atlas of Cancer Signalling Networks](https://acsn.curie.fr/ACSN2/downloads.html) (ACSN) include angiogenesis, innate immunity, adaptive immunity, regulated cell death, cancer-associated fibroblast, etc. For learning more about the concept of disease hallmarks, please review “The hallmarks of cancer” (Hanahan & Weinberg, 2000, [PMID: 10647931](https://pubmed.ncbi.nlm.nih.gov/10647931/)) and “Hallmarks of cancer: the next generation” (Hanahan & Weinberg, 2011, [PMID: 21376230](https://pubmed.ncbi.nlm.nih.gov/21376230/)). Modules can also be shaped according to the role of different cell types involved.

## Causes and outcomes

This part focuses on larger-scale physiological-level phenomena that in diagrams are normally present in the form of phenotype entities.

### Causes

Information about disease aetiology helps to reconstruct the order of molecular events and to organise map modules.

### Outcomes

Similarly to the “Causes” section, listing disease outcomes helps to reconstruct the order of molecular events and to organise map modules. Often disease outcomes are visualised as phenotype entities in diagrams. For example: bronchospasm, hyperplasia, airway inflammation, airflow obstruction, fibrosis, plasma leakage in the AsthmaMap top-level view [version 1.2.02](https://asthma-map.org/ci3).

## Treatment and recovery

Introducing treatment and recovery mechanisms are advanced options that can be considered. 

### Treatment

Relevant treatment is to be listed, especially medications that are routinely prescribed and continuously used by patients. The effects of drugs can be included in the description of disease mechanisms.

### Recovery mechanisms

If applicable and if known, information on recovery mechanisms should be reviewed and considered for inclusion.
