---
title: "Rank a list based on criteria - Excel"
subtitle: "This blog provides a step-by-step tutorial on using an Excel array formula to automatically rank and sort data in a scalable manner."
date: "2023-03-12"
image: "https://i.ibb.co/rwM44ZF/excel-image.png"
author: "NataNoob"
authorImage: "/images/Glenn Ladrido.JPG"
categories: ["Excel", "Arrays"]
---

If you've worked with Excel for any amount of time, you've probably used or seen complex formulas that can take your data analysis and reporting to the next level. One such formula is the INDEX-MATCH formula, which allows you to look up values in a range based on certain criteria. In this blog, we'll be discussing a specific use case of this formula that involves ranking up values in a range based on the nth largest value in another range, while also excluding any values that have already been looked up.

## Getting Started

Suppose we have a table with a list of student names in column A and their corresponding scores in column B. Now, let's say we want to find the nth highest score and return the name of the student who earned that score. However, we also want to make sure that we don't include any duplicates in our list of results. To do this, we can use the INDEX and MATCH functions in combination with some other Excel functions to create a powerful lookup formula.

The formula looks like this:

=INDEX($A$2:$A$6,MATCH(1,($B$2:$B$6=LARGE($B$2:$B$6,C2))*(COUNTIF(D$1:D1,$A$2:$A$6)=0),0))

It looks scary, but let's break it down:

<strong>Step 1: Set up the table</strong>

First let's start by compiling a list of student names and their respective scores. We can organize the student names in column A and their corresponding scores in column B.

```excel
|---A----|---B---|
|Student |Score  |
|Pedro   |93     |
|Juan    |79     |
|Oscar   |86     |
|Fausto  |89     |
|Lucio   |84     |
```

<strong>Step 2: Specify the Highest Rank (Constant)</strong>

Next, decide which nth highest score you want to look up, in our case it's from first to nth performer. This could be the highest score (n=1), the second highest score (n=2), the third highest score (n=3), and so on. To do this, enter the value of n in a separate cell (let's supposed we created `n` in cell C2).

```
|---A----|---B---|---C---|
|Student |Score  | Rank  |
|Pedro   |93     |  1    |
|Juan    |79     |  2    |
|Oscar   |86     |  3    |
|Fausto  |89     |  4    |
|Lucio   |84     |  5    |
```

<strong>Step 2: Determine the highest score </strong>

In this step, we'll use the LARGE function to determine the nth highest score, where n is specified in cell C2. Here's the formula:

```
=LARGE($B$2:$B$6,C2)
```

> Note: The $ sign in the formula is used to make the cell reference absolute. Using absolute cell references can be helpful when copying formulas across different cells because it ensures that the formula always refers to the same range of cells, even when copied to different locations.

The LARGE function returns the nth largest value in the range B2:B6, where n is specified in cell C2. It does this by first sorting the range in descending order and then returning the nth value from the top.

This formula will return the value of the nth highest score in the range B2:B6. We'll use this value in the next step to find the corresponding student name.

<strong>Step 3: Find the Position of the Corresponding Student Name </strong>

To find the position of the student name that corresponds to the nth highest score, we'll use the MATCH function. Here's the updated formula now:

```
=MATCH(1,($B$2:$B$6=LARGE($B$2:$B$6,C2)),0)
```

The MATCH function is used to find the position of the first (i.e. highest) value that meets a certain criteria within a range. In this case, we want to find the position of the student name that corresponds to the nth highest score, which we've calculated using the LARGE function in the previous step.

To do this, we first create an array of TRUE/FALSE values using the comparison operator = to compare each value in the range B2:B6 with the nth highest score. The resulting array will have a TRUE value wherever the value in B2:B6 is equal to the nth highest score, and a FALSE value everywhere else.

We then search for the position of the first TRUE value in this array using the MATCH function. The 1 in the MATCH function represents the value we're searching for (i.e. TRUE), and the second argument ($B$2:$B$6=LARGE($B$2:$B$6,C2)) is the array we're searching within. The last argument 0 in the MATCH function tells Excel to perform an exact match and return the position of the first matching value.

<strong>Step 4: Use the COUNTIF Function to Avoid Duplicate Names </strong>

To ensure that we don't display any duplicate names in our ranking list, we'll use the COUNTIF function. Here's the formula:

```
=COUNTIF(D$1:D1,$A$2:$A$6)=0
```

The COUNTIF function is used to count the number of cells within a range that meet a certain criteria. In this case, we want to count the number of cells in the range D1:D(n-1) that match the student name we're currently looking up.

> We used the dollar sign to create an absolute reference for the first cell in the range, D$1, so that it won't change as we copy the formula down. We also used a relative reference for the second cell in the range, D1, so that it will change as we copy the formula down.

The COUNTIF function returns a value of 0 if there are no cells in the range that match the student name we're currently looking up.

<strong>Step 5: Combine the MATCH, LARGE, and COUNTIF Functions </strong>

Now that we have our individual formulas for the MATCH and LARGE functions, as well as the COUNTIF function to filter out any duplicate names, we can combine them into a single formula.

```
=MATCH(1,($B$2:$B$6=LARGE($B$2:$B$6,C2))*(COUNTIF(D$1:D1,$A$2:$A$6)=0),0)
```

To explain this formula, let's do a quick recap.

1. The LARGE function is used to determine the nth largest score in column B, where n is specified by the value in cell C2.
2. We then use an array formula to compare each value in column B to the nth largest score, which creates an array of TRUE and FALSE values.
3. We also use the COUNTIF function to check whether each corresponding value in column A has already appeared in the list of ranked names in column D.

`($B$2:$B$6=LARGE($B$2:$B$6,C2))*(COUNTIF(D$1:D1,$A$2:$A$6)=0)`

By multiplying these two arrays, we create a new array that contains TRUE only if both conditions are met. Finally, the MATCH function is used to find the position of the first cell in the new array that contains a value of 1. This corresponds to the position of the first occurrence of a name in column A that has not already appeared in the list of ranked names in column D.

<strong>Step 6: Return the name of student </strong>

Finally, we use the INDEX function to return the name of the student from the range $A$2:$A$6, based on the position found by the MATCH function. The final formula as stated above is:

```
=INDEX($A$2:$A$6,MATCH(1,($B$2:$B$6=LARGE($B$2:$B$6,C2))*(COUNTIF(D$1:D1,$A$2:$A$6)=0),0))
```

The formula we've been discussing is an array formula, which means that it uses array calculations to return a result.

> REMINDER: To enter an array formula, you need to use the key combination Ctrl+Shift+Enter instead of just pressing Enter. This tells Excel that you are entering an array formula, and not just a regular formula.

When you press Ctrl+Shift+Enter, Excel will automatically insert curly braces { } around the formula to indicate that it is an array formula.

> IMPORTANT: > If you try to enter the formula using just Enter, you will get a #VALUE! error, because Excel will not be able to handle the array calculations. So, it's important to remember to use Ctrl+Shift+Enter when entering array formulas in Excel

## Summary

In summary, we have learned how to use the INDEX, MATCH, LARGE, and COUNTIF functions in Excel to create a formula that ranks a list of student names based on their scores while ensuring that no duplicate names appear in the rankings. By following the steps outlined in this tutorial, you should be able to create your own version of this formula for your own use.

### Final Words

This formula has a wide range of applications in different industries. Here are a couple of examples:

1. Territory Management: Sales managers can use this formula to manage their sales territories by analyzing the sales performance of their sales reps in each territory. By inputting the territory names and their corresponding sales figures, the formula can generate a ranking of the top-performing territories.

2. Financial Analysis: The formula can be used by financial analysts to analyze and rank financial data such as revenue, profit, or asset value. By inputting financial data and using the formula, they can generate a ranking of the top-performing financial entities or assets.

This solution is very scalable, because it can be easily modified to work with databases of varying sizes and structures. Suppose you have a database and you want to keep track of their rankings as new entries are added. With the formula we discussed in the previous sections, you can easily update the rankings automatically simply by inputting new entries into the database. This feature not only saves time, but also ensures that the rankings are always up-to-date and accurate.

Remember that array formulas can be a powerful tool in Excel, but they can also be tricky to use. Be sure to double-check your formulas and test them thoroughly before relying on them for important tasks.

We hope that you have found this blog helpful in your Excel journey. Happy computing!
