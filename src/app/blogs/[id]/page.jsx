import React from 'react'

export default function page({params}) {
  
    const {title, description} = blogs.find(blog => blog.id == params.id);
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}

const blogs = [
    {
      id: 1,
      title: "Understanding JavaScript Closures",
      description:
        "A deep dive into how closures work in JavaScript, with practical examples and use cases.",
    },
    {
      id: 2,
      title: "Getting Started with React Hooks",
      description:
        "An introductory guide to using React Hooks in your functional components.",
    },
    {
      id: 3,
      title: "CSS Grid vs Flexbox: When to Use Which?",
      description:
        "A comparison of CSS Grid and Flexbox, including examples to help you choose the right layout tool.",
    },
    {
      id: 4,
      title: "Top 10 Tips for Optimizing Web Performance",
      description:
        "Improve your website's performance with these practical tips and tricks.",
    },
    {
      id: 5,
      title: "Mastering MongoDB: A Beginner's Guide",
      description:
        "An overview of MongoDB for beginners, covering essential concepts and commands.",
    },
  ];