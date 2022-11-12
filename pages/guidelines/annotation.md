---
title: Annotation
layout: default
permalink: /annotation
---

# Annotation

[Map information](#map-information)  
[Entities](#entities)  
&nbsp; &nbsp; &nbsp; [Protein](#protein)  
&nbsp; &nbsp; &nbsp; [RNA](#rna)  
&nbsp; &nbsp; &nbsp; [Gene](#gene)  
&nbsp; &nbsp; &nbsp; [Metabolite](#metabolite)  
&nbsp; &nbsp; &nbsp; [Drug](#drug)  
&nbsp; &nbsp; &nbsp; [Complex](#complex)  
&nbsp; &nbsp; &nbsp; [Compartment](#compartment)  
&nbsp; &nbsp; &nbsp; [Phenotype](#phenotype)  
[Interactions](#interactions)  


Annotation of a disease map includes 1) information about the map such as the title, authorship and licence, 2) identification of entities on the map (proteins, RNAs, genes, metabolites, etc.), and 3) providing evidence for the interactions between map entities - references to publications.

In practice, because most entities in signalling pathways are proteins and in metabolic pathways &ndash; metabolites, the main attention should be directed to naming proteins according to [HUGO Gene Nomenclature Committee](https://www.genenames.org/) (HGNC) names (it allows automatic annotation in MINERVA), and to manual annotation of metabolites, as well as to adding evidence for interactions.

### Map information

Suggested fileds for map annotation are listed in the table below. In CellDesigner this type of annotation can be added via Component > Model Information, Component > Model Description, Component > Model MIRIAM Info and Component > Model Notes. Some fields can be annotated on upload to MINERVA in the [Add project](https://minerva.pages.uni.lu/doc/admin_manual/v16.0/index/#fields-of-the-add-project-window) window: map ID, map name, taxonomy ID, disease ID and map version.

**Table 1.** Suggested fields for map information, required* and optional.

| Map annotation field | Comment |
|----------------------|---------|
| Map ID* | A short string of letters and numbers. It will be part of the map URL |
| Map name* | The title of the map. For example: Altzheimer’s Disease Map |
| Authors* | Authors’ names, affiliations, ORCIDs, contact email |
| Taxonomy (Organism)* | For human diseases: [NCBI:txid9606](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=info&id=9606) |
| Disease name* | For example: Alzheimer’s disease |
| Disease ID* &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | For example, for Alzheimer’s disease: [MESH:D000544](https://www.ncbi.nlm.nih.gov/mesh/D000544) ([DOID:10652](http://www.informatics.jax.org/disease/DOID:10652),  [EFO:0000249](https://www.ebi.ac.uk/ols/ontologies/efo/terms?short_form=EFO_0000249), [ICD10CM:G30](https://www.icd10data.com/ICD10CM/Codes/G00-G99/G30-G32/G30-/G30), [ICD9CM:331.0](http://www.icd9data.com/2015/Volume1/320-389/330-337/331/331.0.htm), [KEGG:05010](https://www.genome.jp/dbget-bin/www_bget?map05010)) |
| Licence* | Recommended licence for disease maps is [Creative Commons Attribution 4.0 International License (CC BY 4.0)](https://creativecommons.org/licenses/by/4.0/) |
| Version | Specifies map version |
| Last updated | The date of the last update of the map
| Derived from | If applicable - the source the map is derived from |
| Description | Map description: purpose, linked projects, objectives, content etc. |
| DOI | If available. Stable address for online browsing and exploration |
| Project homepage | If available. Map project homepage URL |

<br/>

### Entities

Different types of entities in SBGN diagrams with the corresponding recommended annotation are shown in the table below.

**Table 2.** Recommended annotation of map entities. Resources:  [HGNC](https://www.genenames.org), [UniProt](https://www.uniprot.org), [Complex Portal](https://www.ebi.ac.uk/complexportal), [ChEBI](https://www.ebi.ac.uk/chebi), [PubChem](https://pubchem.ncbi.nlm.nih.gov), [ChEMBL](https://www.ebi.ac.uk/chembl), [DrugBank](https://go.drugbank.com), [Cell Ontology](https://www.ebi.ac.uk/ols/ontologies/cl), [BRENDA](https://www.brenda-enzymes.org), [Cellosaurus](https://www.cellosaurus.org), [Gene Ontology](http://geneontology.org) and [MeSH](https://www.ncbi.nlm.nih.gov/mesh).

| Biochemical entity &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Naming &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; | Identifier &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; |
|--------------------|--------|------------|
| Protein | HGNC official symbol | UniProt / HGNC |
| RNA | HGNC official symbol | HGNC |
| Gene | HGNC official symbol | HGNC |
| Metabolite | ChEBI / PubChem recommended name | ChEBI / PubChem |
| Drug | ChEBI / PubChem recommended name | ChEBI / PubChem / ChEMBL / DrugBank |
| Complex | Specific name from literature or listing complex components: Element A:Element B | Not required. If available: Complex Portal |
| Compartment | Appropriate term from Cell Ontology, BRENDA, Cellosaurus, or a specific name from literature | Cell Ontology / BRENDA / Cellosaurus |
| Phenotype (biological processes) | Appropriate Gene Ontology (GO) Biological Process (BP) term if available | GO Biological Process |
| Phenotype (symptom, disease state) | Appropriate MeSH term if available | MeSH |

To add MIRIAM annotation to entities in CellDesigner, please use the MIRIAM tab in the bottom panel of CellDesigner. For example, as instructed in [CellDesigner Help](https://www.celldesigner.org/help/CDH_NotesMiriam_02.html), to add a UniProt ID to a protein in CellDesigner, click “Add relation” and then in the Relation field from the drop-down menu choose “bqbiol:isVersionOf”, then in the DataType field from the drop-down menu choose “UniProt”, and finally in the ID field add value, for example “P23219” for MAPK3 (ERK1).

#### Protein

Protein (“generic protein” in CellDesigner; “macromolecule” glyph in SBGN PD specification) should be annotated with UniProt ID and named according to HUGO Gene Nomenclature Committee (HGNC) names.

With the use of the MINERVA automatic annotation functionality, manually adding UniPort IDs in CellDesiger can be skipped as soon HGNC official names are used for naming proteins. The same rules can be applied for annotating genes and RNAs.

In some cases it is not possible or not convenient to provide entity ID. One case is when a "generic entity" is used. For example, ERK1/2 can be used instead of showing two specific proteins: ERK1 (MAPK3, [UniProt:P27361](https://www.uniprot.org/uniprotkb/P27361/entry)) and ERK2 (MAPK1, [UniProt:P28482](https://www.uniprot.org/uniprotkb/P28482/entry)). This could happen if information is incomplete or, intensionally, for creating a compact representation and avoiding combinatorial explosion in an attempt to show all possible specific entities and the corresponding processes. 

#### RNA

RNA ("RNA" in CellDesigner; "nucleic acid feature" in SBGN PD specification with unit of information "ct:RNA") should be annotated with HGNC ID. To skip manual annotation, please name RNAs using HGNC names, and the entities will be automatically annotated on upload to MINERVA.

#### Gene

Gene ("gene" in CellDesigner; "nucleic acid feature" in SBGN PD specification with unit of information "ct:gene") should be annotated with HGNC ID. To skip manual annotation, please name genes using HGNC names, and the entities will be automatically annotated on upload to MINERVA.

#### Metabolite

Metabolite (“simple chemical” glyph in SBGN PD specification, or “simple molecule” in CellDesigner) should be annotated with ChEBI ID. To add a ChEBI ID to a metabolite in CellDesigner, select the MIRIAM tab in the bottom panel of CellDesigner > click “Add relation” > from the drop-down menu choose “bqmodel:isDescribedBy” in the Relation field > then from the drop-down menu choose “ChEBI” in the DataType field, and then add value in the ID field, for example “CHEBI:15843” for arachidonic acid.

In the case of metabolites manual annotation is advised. Automatic annotation functionality in MINERVA works for metabolites to some extent but normally there are too many synonyms, and a proper way to identify a metabolite is via finding it in a metabolic database via synonyms or, if needed, via its structure.

#### Drug

Drug (dedicated "drug" element or "generic protein", "simple molecule" or "unkonwn" in CellDesigner; "macromolecule", "simple chemical" or "unspecified entity" glyphs in SBGN PD specification) should be annotated with an ID from a drug databases such as [DrugBank](https://go.drugbank.com), or metabolic databases such as [ChEBI](https://www.ebi.ac.uk/chebi), [PubChem](https://pubchem.ncbi.nlm.nih.gov) or [ChEMBL](https://www.ebi.ac.uk/chembl). 

#### Complex

Complex ("complex" in CellDesigner; "complex" in SBGN PD specification) should be named according to its content, for example “FCER1A:FCER1G:MS4A2”, unless there is a special name for a particular complex, for example “FcεR1”. Additional annnotation is optional and for that GO Cellular Component (CC) term or [Complex Portal](https://www.ebi.ac.uk/complexportal/home) identifier can be used.

#### Compartment

Compartment ("compartment" in CellDesigner; "compartment" in SBGN PD specification) refers to a subcellular location or cell type and should be annotated with [Cell Ontology](https://www.ebi.ac.uk/ols/ontologies/cl), for example, Cell Ontology GO:0005737 for "cytoplasm".

#### Phenotype

Phenotype ("phenotype" in CellDesigner; "phenotype" in SBGN PD specification) is considered a type of process in SBGN PD (see the [PD Reference Cards](https://sbgn.github.io/referencecards)) but in CellDesigner can be used also as a trigger or as a reference to a submap (correspondingly "perturbing agent" glyph and "submap" glyph in SBGN PD). To annotate phenotype in CellDesigner as a biological processes, please use appropriate GO Biological Process term and GO Biological Process identifier. To annotate phenotype as a symptom or a disease state, please use appropriate MeSH term and MeSH identifier.
<br/>

### Interactions

Interactions should be annotated with references in the form of PMIDs or DOIs in case PMIDs are not available. These references provide evidence that the interaction exists in the context of the diseases. Three references should be provided for each interaction (Kondratova et al, 2018 [PMID:29688383](https://pubmed.ncbi.nlm.nih.gov/29688383/)). 

If provided evidence are built on cell or animal models, it is important to annotate the corresponding interactions and annotate them with the NCBI taxon ID for the non-human organism. For example, if the phosphorylation of STAT3 by JAK2 was determined in mice, the NCBI Taxon [NCBI:txid10090](https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=info&id=10090) should be added. 

### Recommended publications

Niarakis A, Kuiper M, Ostaszewski M, Malik Sheriff RS, Casals-Casas C, Thieffry D, Freeman TC, Thomas P, Touré V, Noël V, Stoll G, Saez-Rodriguez J, Naldi A, Oshurko E, Xenarios I, Soliman S, Chaouiya C, Helikar T, Calzone L. Setting the basis of best practices and standards for curation and annotation of logical models in biology-highlights of the [BC]2 2019 CoLoMoTo/SysMod Workshop. Brief Bioinform. 2021 Mar 22;22(2):1848-1859. doi: 10.1093/bib/bbaa046. [PMID: 32313939](https://pubmed.ncbi.nlm.nih.gov/32313939/).

Touré V, Vercruysse S, Acencio ML, Lovering RC, Orchard S, Bradley G, Casals-Casas C, Chaouiya C, Del-Toro N, Flobak Å, Gaudet P, Hermjakob H, Hoyt CT, Licata L, Lægreid A, Mungall CJ, Niknejad A, Panni S, Perfetto L, Porras P, Pratt D, Saez-Rodriguez J, Thieffry D, Thomas PD, Türei D, Kuiper M. The Minimum Information about a Molecular Interaction CAusal STatement (MI2CAST). Bioinformatics. 2021 Apr 5;36(24):5712-5718. doi: 10.1093/bioinformatics/btaa622. [PMID: 32637990](https://pubmed.ncbi.nlm.nih.gov/32637990/).

Bernal-Llinares M, Ferrer-Gómez J, Juty N, Goble C, Wimalaratne SM, Hermjakob H. Identifiers.org: Compact Identifier services in the cloud. Bioinformatics. 2021 Jul 19;37(12):1781-1782. doi: 10.1093/bioinformatics/btaa864. [PMID: 33031499](https://pubmed.ncbi.nlm.nih.gov/33031499/).

Juty N, Le Novère N, Laibe C. Identifiers.org and MIRIAM Registry: community resources to provide persistent identification. Nucleic Acids Res. 2012 Jan;40(Database issue):D580-6. doi: 10.1093/nar/gkr1097. Epub 2011 Dec 2. [PMID: 22140103](https://pubmed.ncbi.nlm.nih.gov/22140103/).

Thiele I, Palsson BØ. A protocol for generating a high-quality genome-scale metabolic reconstruction. Nat Protoc. 2010 Jan;5(1):93-121. doi: 10.1038/nprot.2009.203. Epub 2010 Jan 7. [PMID: 20057383](https://pubmed.ncbi.nlm.nih.gov/20057383/).


