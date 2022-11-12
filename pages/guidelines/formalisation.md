---
title: Knowledge formalisation
layout: default
permalink: /formalisation
---

# Knowledge formalisation

### Initial considerations 

Knowledge formalisation is the step where relevant causal interactions and processes are identified and extracted from selected sources and then encoded into the graphical language of preference, for example, SBGN Process Description or SBGN Activity Flow. The sources include primarily scientific papers that report findings related to the disease of interest and also already existing representations on the system in pathway databases. This is an essential step that translates the unstructured knowledge in papers into a structured standard knowledge format, in this case a graphical standard format. In this step, the myriad of molecular processes described in papers such as, for instance, negative regulation of transcription, phosphorylation, transport, positive regulation of deacetylation, glycosylation, among others, should be identified in papers and then properly represented into the graphical language. Furthermore, the identified molecular processes need to be associated with the disease of interest. Based on these premises, we provide guidelines for the identification of interactions in papers and their codification into SBGN and CellDesigner languages.  

It is also important that building a network of causal interactions means ensuring connectivity between network elements. This requires not simply reflecting information from papers but also active search for finding and describing the connections. For example, if a paper states that IL6 activates epithelial cells, it would be important to confirm it is a single protein and not a collection of molecules (IL6, [UniProt:P05231](https://www.uniprot.org/uniprotkb/P29366/entry)), identify receptors involved (IL6RA, IL6ST, IL6RB), and describe the following signalling pathway. Often it is possible to do it faster using information available in high-quality pathway databases such as Reactome ([Pathway:R-HSA-1059683](https://reactome.org/content/detail/R-HSA-1059683)).

### Identification and extraction of interactions from sources 

Text

### Encoding the interactions into SBGN

Text

