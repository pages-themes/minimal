---
layout: default
---
[Kevin Ramlal Homepage](https://kevinramlal.github.io)


#  Price Discovery Process 
*Price discovery is the process in which a securities' price is determined through the interactions and mechanisms in a marketplace.* 

There are several important models in the price discovery process - each with varying levels of complexity as well as specific sets of assumptions. While these models may be a far cry from the complexity of real-world trading, studying the behavior of prices in these models help traders better understand the markets in which they trade. In this article I hope to outline several of the canonical models used through literature - and perhaps provide some insight as to why these models can be useful in real applications. 

### 1. Glosten Milgrom (1985)

We start with a simple framework, as follows:

1. There is a single security that has a fair value of one of two possible values, $V_H$ with probability $\theta$ or $V_L$ with probability $(1-\theta)$ where $V_H > V_L$. 
2. Currently,before any market orders are observed, it is trading at $V_0$ which is the expected value computed as follows:
$$V_0 =  \theta V_H+ (1-\theta) V_L$$.

We see that depeding on $\theta$, $V_L \leq V_0 \leq V_H$. 
3. Market Orders arrive one at a time.
 
4. There are two types of traders placing these orders, an **informed trader** who **knows what the true value of the security**, and a **liqudity trader** who **has no knowledge of the true value**.

5. The probability that any given order comes from an informed trader is $\pi$ and coversely the probability that any given order froms a liquidity trader is $1-\pi$. 

6. If the fair value of the security is $V_H$, the informed trader will buy with probabil

Right away, we can glean some useful dynamics! Suppose that the true value of the security is $V_H$, 


