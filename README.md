# Hugo Novela

A port of [Narative](https://www.narative.co/)'s Gatsby theme [Novela](https://www.narative.co/labs/novela/)

**This theme requires Hugo > 0.55.0 and has been tested with Hugo v0.62.2**

![](https://raw.githubusercontent.com/forestryio/hugo-theme-novela/master/images/tn.png)

<a href="https://app.forestry.io/quick-start?repo=forestryio/novela-hugo-starter&engine=hugo&version=0.62.2">
    <img alt="Import this project into Forestry" src="https://assets.forestry.io/import-to-forestryK.svg" />
</a>

## Customization

### Logo

Override `/themes/novela/layouts/partials/icons/ui/logo.html` with your own file at `/layouts/partials/icons/ui/logo.html`; include your logo in SVG format for desktop and mobile formats. 

Novela supports light and dark mode. To have your logo respond in kind, add `class="change-fill"` to the svg path(s).



### Socials

In order for the Socials to be surfaced in Forestry, you should copy the theme's `config/_default/social.yaml` to your project.

### Authors

You should register authors as a taxonomy in your project's `config.yaml``

```yaml
taxonomies:
  author: authors
```

#### Creating authors
Add the following file to your content directory and Front Matter example.

```yaml
# /content/authors/firstname-lastname/_index.md
---
title: Dennis Brotzky
bio: |
  Written by You. This is where your author bio lives. Share your work, your
  joys and of course, your Twitter handle.
avatar: /images/dennis-brotzky.jpg
featured: true
social:
  - title: unsplash
    url: https://unsplash.com
  - title: github
    url: https://github.com
  - title: github
    url: https://github.com
  - title: github
    url: https://github.com
  - title: github
    url: https://github.com
---
```

#### Assigning authors to posts.
Simply add the name of the author to the "authors" field:

```yaml
authors:
  - Dennis Brotzky
  - Thiago Costa
```
### Newsletter CTA

This theme includes a shortcode for a newsletter callout form that you can add to any page. 
It uses [formspree.io](//formspree.io/) as proxy to send the actual email. Each month, visitors can send you up to one thousand emails without incurring extra charges. Visit the Formspree site to get get going add your Formspree email to your shortcode like this:

```
{{< subscribe email="your@email.com" >}}
```
