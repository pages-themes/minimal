---
title: DMCM2024 Programme
layout: default
permalink: /DMCM2024//HenningHermjakob/
---

<img src="/images/places/Belval08.jpg"/>

<table>
  <tr>
    <td style="width: 140px;">
      <img src="/images/teamhq/HenningHermjakob.jpg" width="135"/></td>
    <td> 
      <a href="https://www.ebi.ac.uk/people/person/henning-hermjakob/" target="_blank"><b>Henning Hermjakob</b></a>, Head of Molecular Systems Services, European Bioinformatics Institute (EMBL-EBI), Cambridge, UK
    </td>
  </tr> 
</table>

### Reactome: from hierarchical pathway diagrams to multi-omics analysis of public data

The [Reactome Knowledgebase](https://reactome.org) provides access to manually curated and peer reviewed pathways, organized as a hierarchy of networks of molecular transformations in a single consistent data model (Milacic et al, 2024). This network is enriched with detailed annotations for each molecule and pathway. The data is accessible through an intuitive, interactive web-based application, where users can view the data at different levels of detail and get direct access to all annotations. This enables non-bioinformatic experts to quickly visualize biological processes perturbed by a disease. 

Building on our successful collaboration with the DiseaseMaps community (Ostaszewski et al., 2021), we are increasing our efforts in pandemic preparedness, among others through the recent release of the Respiratory Syncytial Virus (RSV) Infection Pathway. We are now also providing “early access” to pathways still awaiting external review, to extend the available data, and to invite community collaboration as in the Covid-19 Disease Maps project.
In order to support quantitative pathway analyses, we developed the ReactomeGSA analysis platform (Griss et al., 2020). As a key feature, ReactomeGSA can analyze multiple datasets simultaneously, which enables users to quickly compare datasets on the pathway level. The continuously increasing amount of publicly available data makes it common practice for researchers to directly compare their datasets with published ones. In order to simplify this process, several resources exist that use consistent bioinformatics pipelines to re-process these datasets. Two leading resources for these datasets are the EMBL-EBI Expression Atlas (Moreno et al., 2022) and the GEO RNA-seq Experiments Interactive Navigator (GREIN) (Mahi et al., 2019), providing access to thousands of manually curated microarray, transcriptomics, and proteomics datasets. 

ReactomeGSA now includes a search function that enables users to directly search for public datasets in Expression Atlas and GREIN from within ReactomeGSA, that can then be loaded into a ReactomeGSA analysis. These new features are available through a completely re-developed web interface as well as the ReactomeGSA Bioconductor R package. This major update therefore greatly simplifies the reuse and integration of public datasets in the quantitative, comparative pathway analyses provided by ReactomeGSA.


