---
layout: default
---

## Portfolio

---

### ML Projects

Text can be **bold**, _italic_, or ~~strikethrough~~.

[Generating Synthetic Images using GAN Architecture](./another-page.html).

Designed and implemented a GAN architecture that can generate synthetic images of human faces

**Tech Stack**: TensorFLow, Keras, Python, Pandas, NumPy, Google Colab (GPU and TPU for processing)

[Last Mile Delivery](./another-page.html).

Analysis for a postal company which delivers its packages everyday. There are certain vehicle sizes assigned to each of its routes and the end goal is to optimize the vehicle utilization and eventually reduce the carbon foorprint of the delivery service. So we had to determine the vehicles that are over utilized or underutilized and re-assign the routes for optimal usage. For example, if the cubic volume of the package size is 100 cubic feet then a vehicle which is close to this capacity has to be chosen and a bigger vehicle might be a wrong choice as it will be over utilized. Bigger vehicle means extra usage of fuel and hence carbon foot print is increased.

**Algorthims used**:  
 Supervised Learning to predict optimal vehicle based on history parcel capacity: Decision tree and Random forest

Time series to forecast the parcel capacity for next 10 days and then assign the optimal available vehicle at the depot

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

**Tech Stack**: Python – Pandas, Numpy, Scikit-Learn, Matplotlib, Seaborn, AWS Sagemaker, EC2

[Customer segmentation for E-commerce company](./another-page.html).
Segment the Customers based on Recency, Frequency, and Monetary parameters so that the company can target its customers efficiently. Analyzed the Customers based on 3 factors: Recency, Monetary and Frequency.

**Algortihms used**: K-Means Clustering and Hierarchical Clustering with 3 Cluster Ids

Customers with Cluster Id 1 are the customers with a high amount of transactions as compared to other customers.
Customers with Cluster Id 1 are frequent buyers.
Customers with Cluster Id 2 are not recent buyers and hence the least of importance from the business point of view.

**Tech Stack**: Python – Pandas, Numpy, Scikit-Learn, Matplotlib, Seaborn

# Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Header 2

> This is a blockquote following a header.
>
> When something is important enough, you do it even if the odds are not in your favor.

### Header 3

```js
// Javascript code with syntax highlighting.
var fun = function lang(l) {
  dateformat.i18n = require("./lang/" + l);
  return true;
};
```

```ruby
# Ruby code with syntax highlighting
GitHubPages::Dependencies.gems.each do |gem, version|
  s.add_dependency(gem, "= #{version}")
end
```

#### Header 4

- This is an unordered list following a header.
- This is an unordered list following a header.
- This is an unordered list following a header.

##### Header 5

1.  This is an ordered list following a header.
2.  This is an ordered list following a header.
3.  This is an ordered list following a header.

###### Header 6

| head1        | head two          | three |
| :----------- | :---------------- | :---- |
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |

### There's a horizontal rule below this.

---

### Here is an unordered list:

- Item foo
- Item bar
- Item baz
- Item zip

### And an ordered list:

1.  Item one
1.  Item two
1.  Item three
1.  Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

![Octocat](https://github.githubassets.com/images/icons/emoji/octocat.png)

### Large image

![Branching](https://guides.github.com/activities/hello-world/branching.png)

### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>Godzilla</dd>
<dt>Born</dt>
<dd>1952</dd>
<dt>Birthplace</dt>
<dd>Japan</dd>
<dt>Color</dt>
<dd>Green</dd>
</dl>

```
Long, single-line code blocks should not wrap. They should horizontally scroll if they are too long. This line should be long enough to demonstrate this.
```

```
The final element.
```
