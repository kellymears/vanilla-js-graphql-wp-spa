# Vanilla JS Graph QL WordPress Single Page Application

Just a demo of how easy it can be to make a single page application out of your WordPress -- no real need for React, Gatsby, or any of the typical things you see. Granted, it's not fully static like a Gastby site, but we're talking about server payloads that are around 1kb in aggregate.

## How did this come to be

On a recent WordPress theme build I realized that all of the content -- and the theme template pieces themselves -- were being served as WordPress blocks. I started wondering how easy it would be to serve those using something like netlify.

Turns out pretty easy.

## Intention: this is a starting point

This baseline starts you off with almost everything you need to build a killer site.

| Asset  | Build size |
| ------------- | ------------- |
|**app.css** | 2.5KB |
|**app.js** | 10.7KB |
|**index.html** | 325B |
