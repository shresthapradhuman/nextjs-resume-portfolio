---
title: "What is Docker?"
date: "Jan 20, 2022"
excerpt: "Today's I will explain Docker. So, before I explain Docker let me explain why we need Docker?"
cover_image: "/images/posts/docker.png"
---

## Today's I will explain Docker. So, before I explain Docker let me explain why we need Docker?

![alt docker-image](https://www.saturnme.com/wp-content/uploads/2019/10/vertical-logo-monochromatic-1.png)

You create an application in your development machine, and that's working fine in your machine. but in production, it doesn't work properly. Developers experience this problem a lot. That is when the Developers' famous lines are spoken, "It's working on my machine".

So, What may be the reason for this problem? This could be due to:

1. Dependencies
2. Libraries and versions
3. Framework
4. OS Level features
5. Microservices

That the developer's machine has but not there in the production environment. Here what comes Docker in use?

# What is a Docker?

We need a standardized way to package the application with its dependencies and deploy it in any environment. Docker is a tool designed to make it easier to create, deploy, and run applications by using containers.

# How Does Docker Work?

![alt docker2](https://www.docker.com/sites/default/files/d8/styles/large/public/2018-11/container-what-is-container.png?itok=vle7kjDj)

Docker packages an application and all its dependencies in a virtual container that can run on any Linux server.

Each container runs as an isolated process in the user space and takes up less space than regular VMs due to their layered architecture. So, it will always work the same regardless of its environment.
