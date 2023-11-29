---
layout: default
---
## Reporting Portfolio 

<h3 align="center"> <i>Drosophila suzukii</i> Global Distribution</h3>
<i>D. suzukii</i> is an invasive fruit fly from Southeast Asia that lays its eggs in ripe fruit, causing extensive crop damage. In 2018, scientists provided a comprehensive overview of <i>D. suzukii's</i> global distribution [Ørsted and  Ørsted, 2018](https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/1365-2664.13285). The compiled data are from over 500 documents and include information on <i>D. suzukii's</i> ubiquity.

<p align="center">
         <img src="/assets/img/suzukii_global_distribution.gif">
</p>

<p> I used this data to visualize the progression of <i>D. suzukii</i>. Each dot represents a recorded observation of <i>D. suzukii</i>. Country names can be viewed when hovering, and labels for <i>D. suzukii's</i> observation date and abundance can be viewed when clicking on an individual dot. </p>



<p align="center">
         <img src="assets/img/suzukii_europe_distribution.gif">
</p>

<p>Interestingly, in Europe, <i>D. suzukii</i> progressed from the south to the north. This could indicate that <i>D. suzukii</i> invaded through southern ports and moved north on land.</p>


<h3 align="center"> Three Years of COVID-19 in New York City</h3>
At the beginning of 2020, a new virus (SARS-CoV-2) spread worldwide, causing a global pandemic. COVID-19, the disease caused by SARS-CoV-2, quickly spread through New York City (NYC). To inform public health decisions, NYC officials tracked the case and death rate and publicized their data. I downloaded all the data from [NYC - github](https://github.com/nychealth/coronavirus-data) and created the following figures. 


<p align="center">
         <img src="assets/img/covid_19_reported_cases.gif">
</p>
<p align="center">
        <img src="/assets/img/covid_19_death_cases.gif"> 
 </p>

<p align="center">
        <img src="/assets/img/covid_19_hospitalization_cases.gif"> 
 </p>

 <p align="center">
        <img src="/assets/img/covid_19_neighborhood_cases.gif"> 
 </p>
---

## Selected graphics from PH.D. thesis project
For the following graphics, I present the expression (TPM) of 15 genes of interest that were significantly differentially expressed in my RNA-sequencing analysis. For the analysis, I compared the expression rate (how often a gene is transcribed) of different genes between four fly species. 
<p align="center">
        <img src="assets/img/figure_1.jpeg"> 
 </p>

Fly icons and blueprints for a behavior chamber designed for my thesis project. 


<p align="center">
  <img src="assets/img/male_and_female_fly.png" width = "350">
  </p>
<p align="center">
  <img src="assets/img/behavior_chamber.png" width = "350"> 
</p>

Below, I plotted the spike rate of a neuron recorded with single sensillum electrophysiology over time. Neurons spike in response to external stimuli, and the spike rate can be recorded using electrophysiology. Each trace shows the spiking activity of a single fly neuron. The bold colored line is the average of all traces. 
 <p align="Center">
        <img src="assets/img/Spike_rate_over_time.png"> 
 </p>

---
## Example code with Interactive Output
- [D. suzukii distribution R code](/assets/img/R_code_for_suzukii_distribution.html) 
- [COVID-19 NYC R code](assets/img/R_code_for_covid_nyc.html)
- [Neuron spike rate with statistic analysis](assets/img/Rcode_PSTH.html)