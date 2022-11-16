---
title: Knowledge formalisation
layout: default
permalink: /formalisation
---

# Knowledge formalisation

[PubMed search](#pubmed-search)  
[Reference manager](#reference-manager)  
[Figure search](#figure-search)  
[Figure-to-SBGN](#figure-to-sbgn)  
[Text-to-SBGN](#text-to-sbgn)  
[Pathway databases](#pathway-databases)  


In the context of developing disease maps, "knowledge formalisation" refers to the practice of transforming textual information and figures in publications to the structured format of the [Systems Biology Graphical Notation](https://sbgn.github.io/) (SBGN) standard ([PMID: 19668183](https://www.ncbi.nlm.nih.gov/pubmed/19668183)). Scattered information about disease mechanisms from hundreds of scientific articles is integrated into a single conceptual disease model.

### PubMed search

This section is in preparation. Example search.

PubMed search for asthma mechanisms (accessed 2022-11-16) is shown in the table below. With every new change in the search parameters or search query we have fewer search results and can choose a manageable number of highly relevant publications to start from so they can be checked, shortlisted and read.

| Search query | Filters | Search results |
-------------------------------------------
| asthma mechanisms | no filters | 21,012 results | 
| asthma mechanisms | Article Type: Review | 7,072 results |
| asthma mechanisms | Article Type: Review, Publication Date: 5 Years | 1,900 results | 
| asthma[title] mechanisms | Article Type: Review, Publication Date: 5 Years | 623 results | 
| asthma[title] mechanisms[title] | Article Type: Review, Publication Date: 5 Years | 63 results | 

The search query itself can be made more sophisticated, especially with the use of the [Advanced Search](https://pubmed.ncbi.nlm.nih.gov/advanced/), though normally it is sufficient to use a combiation of OR and AND logic operators, where AND is to be used for combined search of terms and OR for any of the listed terms, for example synonyms. Example query: 

asthma AND (mechanisms OR pathway OR pathways)

The use of quatation marks allows search for exact phrases when needed, for example:

"asthma mechanisms" OR "mechanisms of asthma".

Finally, in case of a very specific topic and limited information, there is an option to search in full-text papers in [PubMed Central](https://www.ncbi.nlm.nih.gov/pmc/) (PMC). Please note that PMC has approximately 40% of articles in full text in comparison to the number of articles in PubMed. The difference between PubMed and PMC is explained in a recent review (Williamson & Minter, 2019, [PMID: 30598645](https://pubmed.ncbi.nlm.nih.gov/30598645/)) and discussed at https://www.nlm.nih.gov/bsd/difference.html. To compare the current content of PubMed and PMC,  please type “1800:2100[dp]” or “all[sb]” in the search bar. Since we are interested mainly in recent publications since 2010 (accessed 2022-11-16):  
search “2010:2100[dp]” in PubMed returns 14,934,340 articles (100%);  
search “2010:2100[dp]” in PMC returns 6,053,618 full-text articles (40.53%).  

<!--
Since 2015:  
search “2015:2100[dp]” in PubMed returns 10,250,215 articles (100%);  
search “2015:2100[dp]” in PMC returns 4,587,211 full-text articles (44.75%).  
-->

### Reference manager

To organise publications found, a reference manager such as Zotero can be used. It is well-integrated in various browsers and papers can be easily saved individually or in bulk. Introductions to Zotero functionalities are available at many university websites and easy to find. One useful functionality is a shared library many users can access. We also suggest creating folders and subfolders for references. They work as tags and one paper can appear in several folders. This way, when revisiting, during map development and annotation, it is easier to find publications relevant to a certain topic or a subpathway.

### Figure search

Figures in published articles are a special and very useful resource for developing disease maps. While they are not in a standard or machine-readable format, the understanding of mechanisms is often very well conveyed and there is a lot of work and expertise behind these conceptual representations and graphical summaries. A good figure from a review paper can be the key starting point for creating a disease map or a top-level overview layer of a disease map.

[PMC Image Search](https://www.ncbi.nlm.nih.gov/pmc/) is a good way to find such figures in PubMed Central. The way it works is described in the [NLM Technical Bulletin](https://www.nlm.nih.gov/pubs/techbull/ja11/ja11_pmc.html) in the "Direct Access to Images" section and Figures 7-11.

<!--
[UAMS Library](https://libguides.uams.edu/image-resources/pmc) 
[University of Pittsburgh Library](https://info.hsls.pitt.edu/updatereport/2011/october-2011/need-images-try-pubmed-central/)
-->

[Google Images](https://images.google.com/) is another efficient and convenient search. For example, search for "asthma mechanisms" will immediately offer relevant images from scientific publications. Adding "nature.com" to the search will narrow it down to the publications in Nature journals. 

[Cell SnapShot](https://www.cell.com/snapshots) is one more interesting resource with many useful visualisations including ones dedicated to various diseases. 

### Figure to SBGN

How to transform a static cartoon figure from a paper to a standard representation in SBGN is demonstrated in the ["Figure to SBGN"](https://sbgn.github.io/figuretosbgn) project accessible on the Systems Biology Graphical Notation website. The "γCaMKII shuttles Ca²⁺/CaM to the nucleus to trigger CREB phosphorylation and gene expression" diagram was created based on the [graphical abstract](https://www.sciencedirect.com/science/article/pii/S0092867414011684#fx1) from the paper by Ma et al, Cell, 2014 ([PMID: 25303525](http://www.ncbi.nlm.nih.gov/pubmed/25303525)). Both Process Description and Activity Flow versions are available. 

### Text to SBGN

This section is in preparation. 

<!--
How to draw an initial diagram based on the text, how to examine the diagram and ask questions, how to identify missing information (missing transport when connectors cross subcellular locations, unclear state of an active enzyme - phosphorylated, maybe dimer), and how to find missing information in other publications.
-->

### Pathway databases

Reusing information from well-curated pathway databases such as [Reactome](https://reactome.org/), [PANTHER](http://www.pantherdb.org/pathway/) and [KEGG](https://www.genome.jp/kegg/https://www.genome.jp/kegg/) is possible with additional contextualisation via confirmation with disease-related publications and updating the pathways if needed.


