---
title: Annotation
layout: default
permalink: /annotation
---

# Annotation

Text

### Map information

Map information annotation for disease maps has been considered optional but with the demand for consistent identifiers and description for pathway maps and models [REFs] and practices used by Reactome and other databases, we propose annotating the fields listed in Table 1.

**Table 1.** Proposed fields for map information, required and optional.

| Map annotation field &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Comment &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
|----------------------|---------|
| Map ID* | A short string of letters and numbers. It will be part of the map URL as well |
| Map name* | The title of the map. For example: Altzheimer’s Disease Map |
| Authors* | Authors’ names with affiliations and ORCIDs |
| Taxonomy (Organism)* | For human diseases: NCBI:txid9606 |
| Disease name* | For example: Alzheimer’s disease |
| Disease ID* | Example IDs: MESH:D000544 with possible links to other databases and ontologies DOID:10652,  EFO:0000249, ICD10CM:G30, ICD9CM:331.0, KEGG:05010, MESH:D000544, NCI:C2866, UMLS_CUI:C0002395 |
| Licence* | Recommended licence for disease maps: ... |
| Version | Optional field. Recommended default value: Not specified |
| Version history (Derived from) | Optional field. Recommended default value: Not specified. Important for referring to the previous version or to the source of information the map is derived from. For example: AlzPathway 2.0 |
| Description | Optional description of the map: purpose, linked projects, objectives, etc. |
| DOI | If available. Stable address for online browsing and exploration |
| Project homepage | If available. Map project homepage URL |
| References | PMIDs |



### Entities

Text

**Table 2.** Text  

| Biochemical entity &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Naming &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Identifier &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
|--------------------|--------|------------|
| Protein | HGNC official symbol | UniProt / HGNC |
| RNA | HGNC official symbol | HGNC |
| Gene | HGNC official symbol | HGNC |
| Complex | Specific name from literature or listing complex components: Element A:Element B | Not required. If available: Complex Portal |
| Small molecule | ChEBI / PubChem recommended name | ChEBI / PubChem |
| Drug | ChEBI / PubChem recommended name | ChEBI / PubChem / ChEMBL / DrugBank |
| Compartment | Appropriate term from Cell Ontology, BRENDA, Cellosaurus, or a specific name from literature | Cell Ontology / BRENDA / Cellosaurus |
| Phenotypes (biological processes) | Appropriate Gene Ontology (GO) Biological Process (BP) term if available | GO Biological Process |
| Phenotypes (symptom, disease state) | Appropriate MeSH term if available | MeSH |

Text

### Interactions

Text

### Recommended publications

Niarakis A, Kuiper M, Ostaszewski M, Malik Sheriff RS, Casals-Casas C, Thieffry D, Freeman TC, Thomas P, Touré V, Noël V, Stoll G, Saez-Rodriguez J, Naldi A, Oshurko E, Xenarios I, Soliman S, Chaouiya C, Helikar T, Calzone L. Setting the basis of best practices and standards for curation and annotation of logical models in biology-highlights of the [BC]2 2019 CoLoMoTo/SysMod Workshop. Brief Bioinform. 2021 Mar 22;22(2):1848-1859. doi: 10.1093/bib/bbaa046. [PMID: 32313939](https://pubmed.ncbi.nlm.nih.gov/32313939/).

Touré V, Vercruysse S, Acencio ML, Lovering RC, Orchard S, Bradley G, Casals-Casas C, Chaouiya C, Del-Toro N, Flobak Å, Gaudet P, Hermjakob H, Hoyt CT, Licata L, Lægreid A, Mungall CJ, Niknejad A, Panni S, Perfetto L, Porras P, Pratt D, Saez-Rodriguez J, Thieffry D, Thomas PD, Türei D, Kuiper M. The Minimum Information about a Molecular Interaction CAusal STatement (MI2CAST). Bioinformatics. 2021 Apr 5;36(24):5712-5718. doi: 10.1093/bioinformatics/btaa622. [PMID: 32637990](https://pubmed.ncbi.nlm.nih.gov/32637990/).

Bernal-Llinares M, Ferrer-Gómez J, Juty N, Goble C, Wimalaratne SM, Hermjakob H. Identifiers.org: Compact Identifier services in the cloud. Bioinformatics. 2021 Jul 19;37(12):1781-1782. doi: 10.1093/bioinformatics/btaa864. [PMID: 33031499](https://pubmed.ncbi.nlm.nih.gov/33031499/).

Juty N, Le Novère N, Laibe C. Identifiers.org and MIRIAM Registry: community resources to provide persistent identification. Nucleic Acids Res. 2012 Jan;40(Database issue):D580-6. doi: 10.1093/nar/gkr1097. Epub 2011 Dec 2. [PMID: 22140103](https://pubmed.ncbi.nlm.nih.gov/22140103/).

Thiele I, Palsson BØ. A protocol for generating a high-quality genome-scale metabolic reconstruction. Nat Protoc. 2010 Jan;5(1):93-121. doi: 10.1038/nprot.2009.203. Epub 2010 Jan 7. [PMID: 20057383](https://pubmed.ncbi.nlm.nih.gov/20057383/).


