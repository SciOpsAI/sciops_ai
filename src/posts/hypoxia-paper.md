---
title: Forecasting ocean hypoxia in salmonid fish farms
description: Hypoxia is defined as a critically low-oxygen condition of water, which, if prolonged, can be harmful to fish and many other aquatic species.
date: "2024-11-14"
categories:
  - sup
published: true
author: SciOps Team
author_image: authors/vitor.png
image: paper_images/hipoxia.png
---

## Introduction

Hypoxia is defined as a critically low-oxygen condition of water, which, if prolonged, can be harmful to fish and many other aquatic species. In the context of ocean salmon fish farming, early detection of hypoxia events is critical for farm managers to mitigate these events to reduce fish stress, however in complex natural systems accurate forecasting tools are limited. The goal of this research is to use a machine learning approach to forecast oxygen concentration and predict hypoxia events in marine net-pen salmon farms.

## Methods

The developed model is based on gradient boosting and works in two stages. First, we apply auto-regression to build a forecasting model that predicts oxygen concentration levels within a cage. We take a global forecasting approach by building a model using the historical data provided by sensors at several marine fish farms located in eastern Canada. Then, the forecasts are transformed into binary probabilities that indicate the likelihood of a low-oxygen event. We leverage the cumulative distribution function to compute these probabilities.

## Results and discussion

We tested our model in a case study that included several cages across 14 fish farms. The experiments suggest that the model can detect future hypoxic events with a commercially acceptable false alarm rate. The resulting probabilistic predictions and oxygen concentration forecasts can help salmon farmers to prioritize resources, and reduce harm to crops.

```ts
Vitor Cerqueira,
João Pimentel,
Jennie Korus,
Francisco Bravo,
Joana Amorim,
Mariana Oliveira,
Andrew Swanson,
Ramón Filgueira,
Jon Grant,
Luis Torgo
```
