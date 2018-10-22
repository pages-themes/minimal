---
title: Tools
layout: default
permalink: /tools
---

# Tools

### CellDesigner

<p><a href="http://www.celldesigner.org" target="_blank">CellDesigner</a> is a diagram editor developed by the Systems Biology Institute for drawing process diagrams (Kitano et al., 2005, PMID <a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=19668183" target="_blank">19668183</a>) using the graphical notation proposed by Prof. Hiroaki Kitano, and stored in <a href="http://sbml.org/" target="_blank">SBML</a> format. CellDesigner supports the development of mathematical models and is integrated with SBML ODE Solver, SBML Simulation Core and Copasi. The entities on a diagram can be annotated and linked to various databases.</p>

<p>CellDesigner supports a system of symbols based on a draft of the Systems Biology Graphical Notation (SBGN) Process Description language Level 1 proposed in 2008 (more information can be found <a href="http://www.celldesigner.org/features.html" target="_blank">here</a>). <a href="http://www.celldesigner.org/help/CDH_View_08.html" target="_blank">SBGN Viewer</a> tool in CellDesigner can be used to see a diagram in the current version of <a href="http://sbgn.org/" target="_blank">SBGN</a> (Le Novère et al., 2009, PMID <a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=19668183" target="_blank">19668183</a>).</p>

<!--<p>See also: <a href="/tools/SBGNinCellDesigner" target="_blank">Drawing SBGN PD diagrams in CellDesigner</a>.</p>-->


### Newt Editor

<p><a href="http://newteditor.org/" target="_blank">Newt</a> is a free, web-based, open source viewer and editor for pathways in <a href="http://sbgn.github.io/sbgn/" target="_blank">Systems Biology Graphical Notation</a>.  It is written with a series of libraries and extensions based on <a href="http://js.cytoscape.org/" target="_blank">Cytoscape.js</a>.</p>

<p>Newt is developed to make it easy to design SBGN diagrams: rich yet minimalistic user-friendly UI; support for developing maps from scratch; automatic layout facilities; full support for complexes, compartments and submaps; state-of-the-art complexity management through hide-show and collapse-expand functionalities; advanced diagramming with grid and alignment support, resizing and styling map objects, and more.</p>

### SBGN-ED

[SBGN-ED](http://www.sbgn-ed.org) is an open-source SBGN editor which allows creating, editing and exploring diagrams in all three SBGN languages: Process Description, Activity Flow and Entity Relationship (Czauderna et al., 2010, [doi:/10.1093/bioinformatics/btq407](https://doi.org/10.1093/bioinformatics/btq407)). It allows validation of the syntactical and semantical correctness of created or edited maps. Already existing non-SBGN maps from the KEGG database can be translated into SBGN PD maps including automatic layout. Translation of PD to AF maps and visualisation of SBML models in SBGN PD are also provided. Additionally, the tool allows exporting of SBGN maps into several file and image formats including the SBGN-ML format.  

SBGN-ED is an add-on of the [VANTED framework](http://www.vanted.org). VANTED is an integrative and extendable framework for systems biology applications which aims at the integration, analysis and visual exploration of experimental data in the context of biological networks as well as the modelling, simulation and analysis of molecular biological processes.

### yEd Graph Editor

<p><a href="https://www.yworks.com/products/yed" target="_blank">yEd</a> from <a href="https://www.yworks.com" target="_blank">yWorks GmbH</a> is a freely available graph editor written in Java that runs on Windows, macOS, and Linux/Unix. It is a powerful desktop application that can be used to quickly and effectively generate high-quality diagrams.</p>

<p>yEd uses the XML-based GraphML format to load/save diagrams and additionally supports import from Excel spreadsheets (.xls, .xlsx) and arbitrary XML (via XSLT). Creating diagrams manually is easy and fun with the intuitive user interface, and a large collection of powerful layout algorithms allows to automatically arrange nodes and edges. Diagrams can be exported to bitmap and vector formats: PNG, JPG, and SVG, PDF.</p>

<p>Since version <a href="https://www.yworks.com/products/yed/download#ReleaseNotes" target="_blank">3.17.1</a> yEd provides a palette section for Systems Biology Graphical Notation glyphs and new arrow styles to support SBGN <i>catalysis</i> and <i>necessary stimulation</i> arcs.</p>

### ySBGN

[ySBGN](https://github.com/sbgn/ySBGN) is a standalone Java application, a bidirectional converter between GraphML format of the [yEd Graph Editor](https://www.yworks.com/yed) and the SBGN Process Description or Activity Flow languages. 

Now diagrams can be created in the intuitive general-purpose [yEd Graph Editor](https://www.yworks.com/yed) using the SBGN Palette available since [version 3.17.1](https://www.yworks.com/products/yed/download#ReleaseNotes), and, thanks to the converter, the outcome could be offered in the standard Systems Biology format. The ySBGN tool supports keeping annotation information in the SBGN-ML format.

For reporting issues please use [ySBGN GitHub Issues](https://github.com/sbgn/ySBGN/issues) page.

### MINERVA

<p>The <a href="http://r3lab.uni.lu/web/minerva-website/" target="_blank">MINERVA</a> platform (Gawron et al., 2016, PMID <a href="https://www.ncbi.nlm.nih.gov/pubmed/28725475" target="_blank">28725475</a>) allows interactive visualisation and exploration functionalities based on Google Maps API, and provides a suite of advanced tools for data exploration. The platform allows the upload and the visualisation of custom experimental datasets, including multi-omic entries and user-defined color-coding of elements and interactions. A dedicated query system allows displaying targets for drugs of interest on hosted maps. The commenting system enables users to directly annotate the explored content and pin their remarks to specific elements or interactions. Finally, a set of export options allows downloading the parts, or the entirety of the hosted maps as models in SBGN-compliant format, tab-delimited network format, or images.</p>


### NaviCell

<p>The integrated <a href="https://navicell.curie.fr/" target="_blank">NaviCell</a> web-based toolbox allows to import and visualise heterogeneous omics data on top of the <a href="https://acsn.curie.fr/" target="_blank">ACSN</a> maps and to perform functional analysis of the maps. NaviCell web-based toolbox is also suitable for computing aggregated values for sample groups and protein families and mapping this data onto the maps. The tool contains standard heatmaps, barplots and glyphs as well as the novel map staining technique for grasping large-scale trends in numerical values projected onto a pathway map. The combination of these flexible features that provides an opportunity to adjust the modes of visualisation to the data type and achieve the most meaningful picture. The tool is embedded into the ACSN environment, the user can upload their omics data online and visualise it in the context of the ACSN that allows to figure out what are molecular processes specifically deregulated in the analysed sample or group of samples (Kuperstein et al., 2013, PMID <a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=24099179" target="_blank">24099179</a>; Bonnet et al., 2015, PMID <a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=25958393" target="_blank">25958393</a>).</p>


### BiNoM

<p><a href="https://binom.curie.fr/" target="_blank">BiNoM</a> (Biological Network Manager; Bonnet et al., 2013, PMID <a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=23453054" target="_blank">23453054</a>) is a <a href="http://www.cytoscape.org/" target="_blank">Cytoscape</a> plugin, developed to facilitate the manipulation of biological networks represented in standard systems biology formats (<a href="http://sbml.org/" target="_blank">SBML</a>, <a href="http://sbgn.org/" target="_blank">SBGN</a>, <a href="http://biopax.org/" target="_blank">BioPAX</a>) and to carry out studies on the network structure. BiNoM provides the user with a complete interface for the analysis of biological networks in Cytoscape environment.</p>   

<p>BiNoM offers functions for the import-export of some standard systems biology file formats (import from CellDesigner, BioPAX Level 3 and CSML; export to SBML, CellDesigner and BioPAX Level 3), and a set of algorithms to analyse and reduce the complexity of biological networks. BiNoM can be used to import and analyse files created with the CellDesigner software. BiNoM provides a set of functions allowing importing BioPAX files, but also to search and edit their content. BiNoM also implements a collection of powerful graph-based functions and algorithms such as data visualisation, path analysis, decomposition by the involvement of an entity or cyclic decomposition, sub-networks clustering and decomposition of a large network in modules.
