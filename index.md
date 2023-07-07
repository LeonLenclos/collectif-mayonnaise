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

{% include spectacles-details-list.html %}

# Le programme

{% include programme.html %}

![Logo Mayonnaise](images/logo/png/logo-mayo-mini-LOW.png)
