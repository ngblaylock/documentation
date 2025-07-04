# Documentation Standard in Repos

Each repo needs to have a folder called `_DOCUMENTATION_` which is a markdown directory of information pertaining to the specific repo. This also makes sure that documentation is tracked in Git and can contain historical documentation. The folder structure should be:

- \_DOCUMENTATION_
  - Acceptance Criteria: A folder containing types of requirements for the site or package
  - Decisions: A folder containing decisions that I made, like why I went with one library over another, why some CSS is the way it is, why I chose a framework vs another, etc.
  - Processes: A folder containing specific processes, such as development, deployment. This can contain "How To" files or "Gotchas"
  - Project Overview: A file containing basic information about the project.

Filenames should be written in Title Case, not kebab-case.

## Project Overview Page Outline

```md
# Project Overview - [Project Name]

[Project Description]

## Objectives

1. [Objective 1]
2. [Objective 2]
3. [Objective 3]

## System Architecture

**Frontend:** [Framework(s)]
**Backend:** [Frameworks(s)]
**Database:** [Database]

## 3rd Party Integrations

**[Name]:** - [Description]

## Stakeholders

**Name:** [Name]
**Role:** [Role]
**Responsibility:** [Responsibility]

## User Roles

**Role Name:** [Role Name]
**Inherits:** [Role Name, if any]
**Description:** [Responsibility]

## Project Links

- [Website](https://...)
```
