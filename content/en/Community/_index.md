---
title: "Join Our Team"
linkTitle: "Join Our Team"
weight: 20
menu:
  main:
    weight: 20
---

{{% blocks/cover title="Join Our Team" height="min"  %}}

Help us define the security tooling needed to evolve DevOps pipelines to DevSecOps Pipelines. 

{{% /blocks/cover %}}

{{% blocks/section type="row" color="white" %}}
{{% cdf/pad %}}

## Join the SIG

Get involved by helping the [Continuous Delivery Foundation](https://cd.foundation) define the tools and processes needed to secure software across the lifecycle. Join the SIG and bring your knowledge to build cybersecurity into CI/CD workflows.

- [Join the GitHub Repository](https://github.com/cdfoundation/CICD-Cybersecurity/) -  Add your name to the Read.me.  
- [Add yourself to the Mailing List](https://lists.cd.foundation/g/CICD-Cybersecurity) - Signup to be notified of meetings and events. 
- [Join the CDF Slack Channel](https://cdeliveryfdn.slack.com/?redir=%2Farchives%2FC082V7WN9K4%3Fname%3DC082V7WN9K4) -  Join the CDF Slack Channel and the sig-cicd-cybersecurity thread for daily information. 

## Code of conduct

We expect contributors to read and observe the CD Foundation
[Code of Conduct](https://github.com/cdfoundation/.github/blob/7c3c8e275f16fd38c4431006b49471a582059f33/CODE_OF_CONDUCT.md).

All submissions, including submissions by project members, require review. We use GitHub pull requests for this purpose. Consult [GitHub Help](https://help.github.com/articles/about-pull-requests/) for more
information on using pull requests.

{{% /cdf/pad %}}

{{% /blocks/section %}}


{{% blocks/lead color="orange" %}}
Meet Kate Scarcella, SIG Chairperson
{{% /blocks/lead %}}


{{% blocks/section type="row" color="white" %}}
{{% cdf/pad %}}

Kate is an experienced Security Architect with a demonstrated history of working in the information technology and services industry. Skilled in NERC CIPC Requirements, Management, Leadership, Security, and Project Management, Kate is the perfect candidate to lead a group of DevOps engineers through the process of meeting compliance and security standards. She has a strong engineering background with a Masters of Science focused in Computer and Information Systems Security/Information Assurance from Nova Southeastern University. Kate has served as a Chief Cybersecurity Architect working for companies such as IBM, Micro Focus and McAfee. Learn more about Kate and reach out to her on [LinkedIn](https://www.linkedin.com/in/katescarcellaconnected/). 
<div style="text-align:center;width:100%;margin-top:50px">
<p></p>
<img src="/Images/katescarcella.jpg" alt="Kate Scarcella" height="289px" width="289px" />
</div>


{{% /cdf/pad %}}
{{% /blocks/section %}}


{{% blocks/lead color="orange" %}}
Settup Your Local Environment and Start Contributing
{{% /blocks/lead %}}




{{% blocks/section type="row" color="white" %}}
{{% cdf/pad %}}

## Get Started

Below are directions for updating the CI/CD Cybersecurity Guide locally, and how to create your pull request. 


### The Hugo Server and Docsy

This site uses [Hugo](https://gohugo.io/) to format and generate the website, the [Docsy](https://github.com/google/docsy) theme for styling and site structure, and [Netlify](https://www.netlify.com/) to manage the deployment of the site. 

Hugo is an open-source static site generator that provides us with templates, content organization in a standard directory structure, and a website generation engine. You write the pages in Markdown (or HTML if you want), and Hugo wraps them up into a website.


### Running the site locally

You can use the included [Dockerfile](https://docs.docker.com/engine/reference/builder/) to run the site locally.

1.  On Mac and Windows, download and install [Docker
    Desktop](https://www.docker.com/get-started).  On Linux, install [Docker
    engine](https://docs.docker.com/engine/install/#server) and [Docker
    compose](https://docs.docker.com/compose/install/).
   
    The installation might require you to reboot your computer for the changes to
    take effect. 

1. Build the docker image:

   ```bash
   docker compose build
   ```

1. Run the built image:

   ```bash
   docker compose up
   ```

1. Open the address `http://localhost:1313` in your web browser to load the
   docsy-example homepage. You can now make changes to the source files, those
   changes will be live-reloaded in your browser.


To clean up your system and delete the container image:

1. Stop Docker Compose with **Ctrl + C**.

1. Remove the produced images

   ```bash
   docker compose rm
   ```

### Quick start with Netlify

Here's a quick guide to updating the docs. It assumes you're familiar with the GitHub workflow and you're happy to use the automated preview of your doc updates:

1. Fork the [CI/CD Cybersecurity](https://github.com/cdfoundation/CICD-Cybersecurity/) on GitHub.
1. Make your changes and send a pull request (PR).
1. If you're not yet ready for a review, add "WIP" to the PR name to indicate 
  it's a work in progress. (**Don't** add the Hugo property 
  "draft = true" to the page front matter, because that prevents the 
  auto-deployment of the content preview described in the next point.)
1. Wait for the automated PR workflow to do some checks. When it's ready,
  you should see a comment like this: **deploy/netlify — Deploy preview ready!**
1. Click **Details** to the right of "Deploy preview ready" to see a preview
  of your updates.
1. Continue updating your doc and pushing your changes until you're happy with 
  the content.
1. When you're ready for a review, add a comment to the PR, and remove any
  "WIP" markers.

### Updating a single page

If you've just spotted something you'd like to change while using the docs, Docsy has a shortcut for you:

1. Click **Edit this page** in the top right hand corner of the page.
1. If you don't already have an up to date fork of the project repo, you are prompted to get one - click **Fork this repository and propose changes** or **Update your Fork** to get an up to date version of the project to edit. The appropriate page in your fork is displayed in edit mode.
1. Follow the rest of the [Quick start with Netlify](#quick-start-with-netlify) process above to make, preview, and propose your changes.

{{% /cdf/pad %}}

{{% /blocks/section %}}

{{% blocks/section type="row" color="light" %}}
{{% cdf/pad %}}

### Creating an issue

If you've found a problem in the best practices content, but you're not sure how to fix it yourself, please create an issue in the [CI/CD Cybersecurity repository](https://github.com/cdfoundation/CICD-Cybersecurity/issues).

You can also create an issue about a specific page by clicking the **Create Issue** button in the top right hand corner of the page.

### Useful resources

* [Docsy user guide](https://www.docsy.dev/docs/): All about Docsy, including how it manages navigation, look and feel, and multi-language support.
* [Hugo documentation](https://gohugo.io/documentation/): Comprehensive reference for Hugo.
* [Github Hello World!](https://guides.github.com/activities/hello-world/): A basic introduction to GitHub concepts and workflow.

[CI/CD Cybersecurity Repo]: https://github.com/cdfoundation/CICD-Cybersecurity
[CI/CD Cybersecurity Issues]: https://github.com/cdfoundation/CICD-Cybersecurity/issues
[Code of Conduct]: https://github.com/cdfoundation/.github/blob/7c3c8e275f16fd38c4431006b49471a582059f33/CODE_OF_CONDUCT.md

{{% /cdf/pad %}}

{{% /blocks/section %}}