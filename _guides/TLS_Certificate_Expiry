---
title: TLS Certificates expiry
layout: default
category: Practices
summary: Demonstrate how to monitor TLS Certificates expiration date.
date: 2020-10-19
---

## For solutions hosted in Shared Services Canada (SSC) the following practice should be implemented.

TLS licences are renewed by SSC without the need for any client intervention. SSC has it's own internal process for renewing TLS licences. However, on rare occasions, SSC can forget to renew a TLS licence causing a server outage. 

SSC triggers the renewing process 30 days before expiration date. The process can take up to 2 weeks. Therefore, you should open a NSD ticket if your  TLS certificate is expiring in 14 days or less.

To open a Ticket:
1. Navigate to NSD(http://srmis-sigdi-iagent.prv/) 
2. Enter "Windows Server" on the first textbox and select "I have a windows server issue fro Shared Services" from the drop down
3. In the "Service Request Details" field specify:
	a) Please assign to SSC Resolver group name DC000152 
	b) Your TLS certificate expirations date.
	c) Your production URL
	d) List of Producton web server names
	
Here is a template you can use to submit your NSD ticket. Simply replace the %variables% with your own values.

Hello,

Please assign to SSC Resolver group name DC000152 

Our TLS Certificates for the %production_url% will expire on %expiration_date%.

Please renew our TLS certificates for the following web servers: 
- %server_name_1%
- %server_name_2% 
- %server_name_3%
- %server_name_4% 


Here are some methods to monitor your TLS certification expiry date.

Using a web browser:

1. Open a web browser, navigate to your production hosted web site.
2. Click on the "padlock" icon and select "certificate"
3. Note the Certificate expiration date

In Outlook, create a reminder 14 days before the TLS expiry. Include your Developers and Technical Advisors.
NOTE: The team leader should create the notification to prevent multiple instances. Always verify if a certificate has been renewed before submitting an NSD ticket.

Using code: 
If your team has a custom "monitor solution", you can implement TLS expiration verification using code. 

SDS is offering 3 different flavors of code snippets you can implement in your monitoring solution(Java, C# & .Net).
The code snippets functions require the URL to be verified as a string parameter and returns the amount of days before TLS expiry.  
In your monitoring solution, you can implement the desired code snippet to display a message or send a notification when expiry is less than 14 days. 

Here is the link to the code snippets. (https://gccode.ssc-spc.gc.ca/iitb-dgiit/sds/devcop-code-snippets/-/snippets)
