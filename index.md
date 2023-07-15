---
---

![Cour Mayonnaise - Émulsion collective - Aurillac 2023](images/visu/typo_low.png)

{{site.data.infos.dates}} - {{site.data.infos.horaires}}

{{site.data.infos.lieu}} - {{site.data.infos.adresse}}

{{site.data.infos.divers}}

{% include spectacles-list.html %}

# À propos

{% for p in site.data.infos.description %}
<p>{{p}}</p>
{% endfor %}

# Les spectacles

{% include spectacles-details-list.html web=true %}

# Le programme

{% include programme.html %}

# Plan d'accès

{{site.data.infos.lieu}}

{{site.data.infos.adresse}}

Pastille {{site.data.infos.pastille}}

<iframe width="425" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=2.4302530288696294%2C44.91950679083504%2C2.444415092468262%2C44.92619183511235&amp;layer=mapnik&amp;marker=44.922849410209515%2C2.4373340606689453" style="border: 1px solid black"></iframe><br/><small><a href="https://www.openstreetmap.org/?mlat=44.92285&amp;mlon=2.43733#map=17/44.92285/2.43733">Afficher une carte plus grande</a></small>