---
title: Expiration des certificats TLS - TLS Certificates expiry
layout: default
category: Practices
summary: Demonstrate how to monitor TLS Certificates expiration date.
date: 2020-10-19
---

## Pour les solutions hébergées par Services Partagés Canada (SPC), les pratiques suivantes devraient être mises en oeuvre.

Les licences TLS sont renouvelées par SPC automatiquement, sans que l’utilisateur ait à poser une action quelconque. SPC a mis en place une procédure interne pour le renouvellement des licences TLS. Toutefois, il peut se produire exceptionnellement que SPC omette de renouveler une licence TLS, et que cela ait pour effet de provoquer une panne de serveur.

Veuillez ouvrir un ticket NSD si votre certificat TLS expire dans les 14 jours ou moins.

## Obtenir la date d’expiration de votre certificat TLS

Voici quelques moyens vous permettant de vérifier la date d’expiration de votre certificat TLS.

### À l’aide d’un navigateur Web:

Pour Edge et Chrome:
* Ouvrir le navigateur, afficher une page de votre site web.
* Cliquer sur l’icône représentant un cadenas, et sélectionner “Certificat”.

![Edge](../assets/TLSExpiration/MSEdge_Licence_FR.jpg)

* Relever la date d’expiration du Certificat.

![CertificateInfo](../assets/TLSExpiration/Browser_LicenceInfo.jpg)

Pour FireFox:
* Ouvrir le navigateur, afficher une page de votre site web.
* Cliquer sur l’icône représentant un cadenas, et sélectionner la flèche à droite de la fenêtre d’informations. 

![FireFox1](../assets/TLSExpiration/Firefox_Licence.jpg)

* Cliquer sur l’onglet « Plus d’informations ».

![FireFox2](../assets/TLSExpiration/Firefox_Licence_2.jpg)

* Relever la date d’expiration du Certificat.
![FireFox3](../assets/TLSExpiration/Firefox_Licence_3.jpg)

**Lorsque la date d’expiration du certificat TLS est connue, créer un rappel 14 jours avant cette date d’expiration dans le calendrier d’Outlook. Inclure les développeurs, les conseillers techniques et l’équipe de support 24-7.**

### À l’aide du code source:
Vous pouvez implémenter une procédure de surveillance de la date d’expiration d’un certificat TLS avec quelques lignes de code. Votre équipe peut inclure cette vérification dans votre solution personnalisée effectuant la surveillance des certificats TLS.

SDS propose plusieurs exemples de code que vous pouvez utiliser dans votre solution (Java, C# & .Net). La fonction utilisée dans ces exemples requiert l’URL qui doit être vérifiée, représentée par une chaîne, et retourne le nombre de jours restants avant l’expiration du certificat TLS. Dans votre solution de surveillance, vous pouvez notamment utiliser l’exemple que vous préférez pour afficher un message, ou encore envoyer une notification lorsque le nombre de jours avant expiration est inférieur à 14.

Voici le lien vers les [exemples de code.](https://gccode.ssc-spc.gc.ca/iitb-dgiit/sds/devcop-code-snippets/-/snippets "exemples de code").

## Ticket NSD pour le renouvellement d’un certificat TLS

**REMARQUE: Ouvrez un ticket NSD seulement si votre certificat TLS expire dans 14 jours ou moins. Vérifiez toujours que le certificat n’a pas déjà été renouvelé avant de soumettre un ticket NSD.**

Pour soumettre un Ticket:
* Aller dans [NSD](http://srmis-sigdi-iagent.prv/ "NSD")
* Entrer ‘Windows Server” dans la première zone de texte, et sélectionner “I have a windows server issue for Shared Services” dans la liste déroulante.
![NSD](../assets/TLSExpiration/NSD.PNG)

* Dans le champ “Service Request Details” spécifiez:
  * Veuillez assigner au SSC Resolver du groupe DC000152.
  * La date d’expiration de votre certificat TLS.
  * L’URL de votre site de production.
  * La liste des noms de serveur web de production associés.

Voici un modèle que vous pouvez utiliser pour soumettre votre ticket NSD. Remplacez simplement dans ce modèle les %variables% par la valeur pertinente dans votre cas.

Bonjour,

Veuillez assigner au groupe suivant: DC000152

Le certificat TLS pour %production_url% expire le %expiration_date%.

SVP renouveller le certificats sur les serveurs suivants:

%server_name_1%, %server_name_2%, %server_name_3%, %server_name_4%

## For solutions hosted in Shared Services Canada (SSC) the following practice should be implemented.

TLS licences are renewed by SSC without the need for any client intervention. SSC has it's own internal process for renewing TLS licences. However, on rare occasions, SSC can forget to renew a TLS licence causing a server outage.

Open a NSD ticket if your TLS certificate is expiring in 14 days or less.

## Get your TLS Expiration date

Here are some methods to monitor your TLS certification expiry date.

### Using a web browser:

For Edge and Chrome:

* Open web browser, navigate to your production hosted web site.
* Click on the "padlock" icon and select "certificate"

![Edge](../assets/TLSExpiration/MSEdge_Licence.jpg)

* Note the Certificate expiration date

![CertificateInfo](../assets/TLSExpiration/Browser_LicenceInfo.jpg)

For FireFox:

* Open web browser, navigate to your production hosted web site.
* Click on the "padlock" icon and select the arrow next to the certificate info (secure)
![FireFox1](../assets/TLSExpiration/Firefox_Licence.jpg)

* Click on  "More Information".

![FireFox2](../assets/TLSExpiration/Firefox_Licence_2.jpg)

* Note the Certificate expiration date

![FireFox3](../assets/TLSExpiration/Firefox_Licence_3.jpg)

**Once the TLS certification expiry date is known, create a reminder 14 days before the TLS expiry using Outlook Calendar or your desired tool. Include Developers, Technical Advisors and 24-7 support staff.**

### Using Source code:

You can implement TLS expiration verification using code. Your team can include TLS verification in your custom monitor solution.

SDS is offering  flavors of code snippets you can implement in your monitoring solution(Java, C# & .Net).
The code snippets functions require the URL to be verified as a string parameter and returns the amount of days before TLS expiry.
In your monitoring solution, you can implement the desired code snippet to display a message or send a notification when expiry is less than 14 days.

Here is the link to the [code snippets](https://gccode.ssc-spc.gc.ca/iitb-dgiit/sds/devcop-code-snippets/-/snippets "code snippets").

## NSD ticket for TLS certificate renewal

**NOTE: Open a NSD ticket only if your TLS certificate is expiring in 14 days or less. Always verify if a certificate has been renewed before submitting an NSD ticket.**

To open a Ticket:

* Navigate to [NSD](http://srmis-sigdi-iagent.prv/ "NSD")
* Enter 'Windows Server" on the first textbox and select "I have a windows server issue for Shared Services" from the drop down list.
![NSD](../assets/TLSExpiration/NSD.PNG)

* In the "Service Request Details" field specify:
  * Please assign to SSC Resolver group name DC000152
  * Your TLS certificate expirations date.
  * Your production URL
  * List of Producton web server names

Here is a template you can use to submit your NSD ticket. Simply replace the %variables% with your own values.

Hello,

Please assign to SSC Resolver group name DC000152

Our TLS Certificates for the %production_url% will expire on %expiration_date%.

Please renew our TLS certificates for the following web servers:

%server_name_1%, %server_name_2%, %server_name_3%, %server_name_4%
