---
layout: default
---

## gnuplot notes

```
python3 test.py | gnuplot -p -e " plot '-'"
gnuplot -p -e " set xrange [0:100]; plot '-'"
gnuplot -p -e " set yrange [0:1]; plot '-'"
./kadai02 | gnuplot -p -e " set yrange [0:1]; set style line 1 pointtype 7 pointsize 1.5; plot '-' with linespoints linestyle 1"

```

### Resources
- http://lowrank.net/gnuplot/tics-e.html
- http://www.gnuplotting.org/tag/linespoints/


[back](./)