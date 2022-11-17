---
title: Text to SBGN
layout: default
permalink: /text-to-sbgn
---

# Text to SBGN

For this example we chose an article by Song and co-authos "Parkin promotes proteasomal degradation of p62: implication of selective vulnerability of neuronal cells in the pathogenesis of Parkinson's disease" published in *Protein Cell* in 2016 ([PMID: 26746706](https://pubmed.ncbi.nlm.nih.gov/26746706/))

The complete abstract text from PubMed for this paper is here:

*"Mutations or inactivation of parkin, an E3 ubiquitin ligase, are associated with familial form or sporadic Parkinson's disease (PD), respectively, which manifested with the selective vulnerability of neuronal cells in substantia nigra (SN) and striatum (STR) regions. However, the underlying molecular mechanism linking parkin with the etiology of PD remains elusive. Here we report that p62, a critical regulator for protein quality control, inclusion body formation, selective autophagy and diverse signaling pathways, is a new substrate of parkin. P62 levels were increased in the SN and STR regions, but not in other brain regions in parkin knockout mice. Parkin directly interacts with and ubiquitinates p62 at the K13 to promote proteasomal degradation of p62 even in the absence of ATG5. Pathogenic mutations, knockdown of parkin or mutation of p62 at K13 prevented the degradation of p62. We further showed that parkin deficiency mice have pronounced loss of tyrosine hydroxylase positive neurons and have worse performance in motor test when treated with 6-hydroxydopamine hydrochloride in aged mice. These results suggest that, in addition to their critical role in regulating autophagy, p62 are subjected to parkin mediated proteasomal degradation and implicate that the dysregulation of parkin/p62 axis may involve in the selective vulnerability of neuronal cells during the onset of PD pathogenesis."*

After omitting some words, the key points for our diagram are these:

**#1** *"Mutations . . . of parkin . . . are associated with . . . Parkinson’s disease (PD), . . . selective vulnerability of neuronal cells in substantia nigra (SN) and striatum (STR) . . . "*.  
**#2** *"Here we report that p62 . . . is a new substrate of parkin. P62 levels were increased in the SN and STR regions . . . in parkin knockout mice"*.  
**#3** *"Parkin directly interacts with and ubiquitinates p62 at the K13 to promote proteasomal degradation of p62 . . . "*.  
**#4** *"We further showed that parkin deficiency mice have pronounced loss of tyrosine hydroxylase positive neurons . . . "*.  
**#5** *"These results suggest that . . . p62 are subjected to parkin mediated proteasomal degradation and implicate that the dysregulation of parkin/p62 axis may involve in the selective vulnerability of neuronal cells during the onset of PD pathogenesis"*.  

These points are then converted to the SBGN diagram in CellDesigner:



4

![](../images/guidelines/PARK2.png){:width="300"}

5

![](../images/guidelines/PARK2.png)

6

<img src="../images/guidelines/PARK2.png" width="300" />

Please note that we used the official [HUGO Gene Nomenclature Committee](https://www.genenames.org/)(HGNC) names for proteins: for that "parkin" is replaced with the official "PRKN" ([UniProt:O60260](https://www.uniprot.org/uniprotkb/O60260/entry), [HGNC:8607](https://www.genenames.org/data/gene-symbol-report/#!/hgnc_id/HGNC:8607), previously PARK2)  and "p62" is replaced with the official "SQSTM1" ([UniProt:Q13501](https://www.uniprot.org/uniprotkb/Q13501/entry), [HGNC:11280](https://www.genenames.org/data/gene-symbol-report/#!/hgnc_id/HGNC:11280)).
