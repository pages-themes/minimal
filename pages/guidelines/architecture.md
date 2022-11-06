---
title: Architecture
layout: default
permalink: /architecture
---

# Designing map architecture

We propose to design a map starting with a single diagram in SBGN Process Description (PD) or SBGN Activity Flow (AF) and gradually creating a more advanced architecture. This way each version of the map is a fully functional resource ready exploration and applications. The multi-layered structure with multiple maps in PD and AF layers aims to solve the complexity management problem when the network becomes increasingly more extensive and hard to manage.

### Recommended design options

More than one approch is possible. Depending on a project it is recommended to start from a single PD diagram and step by step build a multi-layered structure. In case of extensive coverage of biological functions or limited resourses it might be more efficient to start from an AF diagram and a top-level view.

![](../images/guidelines/design1.png)
**Figure 1.** A recommended way of gradually developing a multi-layered structure starting from one PD diagram and a top-level view. This option is suggested as the first choice with adequate resources available.
<br/>
<br/> 

![](../images/guidelines/afpd.png)
**Figure 2.** A variation with the focus on maintaining PD and AF layers first.
<br/>
<br/>

![](../images/guidelines/design2.png)
**Figure 3.** A variation with the focus on the PD layer with multiple diagrams.
<br/>
<br/>

![](../images/guidelines/design3.png)
**Figure 4.** A variation with on the focus on the AF layer with multiple diagrams. This option is advised in case of extensive coverage of biological functions or limited time/resources available.
<br/>

![](../images/guidelines/top.png)
**Figure 5.** A variation that starts with building a top-level view first. This option looks intuitive for planning the content first and then adding more details but it is more demanding in terms of experience in building disease maps. Otherwise it is safer to start from drawing priority pathways as an AF or PD diagram.
<br/>
<br/>
<br/>

### Examples

The architecture of the published disease maps varies from a signle map in PD or AF to multi-layered hierarchically-organisded structures with multiple separate diagrams in a layer. 

![](../images/guidelines/7maps.png)
**Figure 6.** Examples of map architecture of the published resources. **A.** A single PD diagram. **B.** One PD diagram with a matching AF represetation. **C.** One PD diagram with a top-level view. **D.** An extensive PD network with parts designed and maintained as separate diagrams, with a top-level view. 
**E.** PD, AF and top-level view leyers, with AF as split diagrams that are partly covered in the corresponding PD diagrams. The top-level view works as a "unifying" diagram to create a single virtual network. **F.** Split PD diagrams with a top-level view to unify them into a single virtual network. **G.**  A single AF diagram. 
