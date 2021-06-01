---
title: SBGN in CellDesigner
layout: default
permalink: /sbgnincd
---

# Drawing SBGN PD diagrams in CellDesigner

<p><strong>Please note that the following text describes some informal rules that could be used in order to keep close to the current version of SBGN PD specification. This is not a generaly accepted practice of using the CellDesigner software.</strong></p>

<p>CellDesigner supports a system of symbols based on a draft of the Systems Biology Graphical Notation (SBGN) Process Description (PD) language Level 1 proposed in 2008 (more information can be found <a href="http://www.celldesigner.org/features.html" target="_blank">here</a>). While <a href="http://www.celldesigner.org/help/CDH_View_08.html" target="_blank">SBGN Viewer</a> tool in CellDesigner allows presenting diagrams in the current version of <a href="http://sbgn.org/" target="_blank">SBGN</a> (Le Novère et al., 2009, PMID: <a href="https://www.ncbi.nlm.nih.gov/pubmed/?term=19668183" target="_blank">19668183</a>), there is no special SBGN palette for drawing strict SBGN diagrams in CellDesigner.</p>

<p>Here we describe some rules that allow drawing in CellDesigner as close as possible to the current version of the <a href="http://sbgn.github.io/sbgn/specifications" target="_blank">SBGN PD specification</a>. One of the advantages of such diagrams is that their import to <a href="http://r3lab.uni.lu/web/minerva-website/" target="_blank">MINERVA</a> is supported, and the resulting view will be in agreement to the rules of the <a href="http://sbgn.github.io/sbgn/specifications" target="_blank">SBGN PD specification</a> as soon as "Display as SBGN" box is checked during the upload of your diagrams to <a href="http://r3lab.uni.lu/web/minerva-website/">MINERVA</a>.</p>

<p>The approach is simple. Normally users are inclined to use the complete set of symbols. In this case, it is rather about what symbols not to use.</p>

<img src="/images/tools/palette.png" style="width:700px;"/>
<br />
<br />

<p>For example, we do not use "Receptor" symbol. Instead, the generic "Protein" symbol is used. Please compare the <a href="http://www.celldesigner.org/help/images/components42.png">graphical notation of CellDesigner</a> and the <a href="https://raw.githubusercontent.com/sbgn/process-descriptions/b2904462d11bd8d65e9c7a1318d95d468048cb50/templates/PD_L1V1.3.png">SBGN Process Description Reference Card</a>.</p>

<p>Below are provided examples with CellDesigner's notation on the left side and suggested replacement on the right side.</p>

### Entity pool nodes

<img src="/images/tools/fig1.png" style="width:500px;"/>
<br />

### Processes

<p>For processes, it is better to use the generic "Process" glyph and avoid using "Transcription", "Translation", "Transport", "Heteromer Association", "Dissociation" and "Trancation" glyphs.</p>

### Logical operators

<p>All the boolean logic gates of CellDesigner could be used. The glyphs do not look exactly as in the SBGN set (for example, "&" in CellDesinger vs. "AND" in SBGN, or "|" in CellDesigner vs. "OR" in SBGN) but this could be considered a minor difference.</p>

### Reduced Notation

<p>The Reduced Notation (View > Change Toolbar Visible > Reduced Notation) is often used by advanced users of CellDesigner. The symbols of the reduced notation are included in the <a href="http://www.celldesigner.org/help/images/components42.png">graphical notation of CellDesigner</a> (the top-right corner). We suggest not to use the Reduced Notation together with the default set of symbols. The Reduced Notation resembles the Activity Flow language of the SBGN standard. Directly mixing Process Description and Activity Flow symbols is not allowed.</p>

<p>Clean Reduced Notation can be used for building Activity Flow type of diagrams. This diagrams later can be translated into the SBGN Activity Flow standard format.</p>

-----
<p>If you have any questions or suggestions regarding this tutorial please <a href="/contact">contact us</a>.</p>
