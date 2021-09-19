import React from 'react';

const FragmentDemo = () => {
  const items = [
    {
      id: 1,
      title: 'HTML',
      description: 'The HyperText Markup Language',
    },
    {
      id: 2,
      title: 'CSS',
      description: 'Cascading Style Sheets is a style sheet language',
    },
    {
      id: 3,
      title: 'JavaScript',
      description:
        'Lightweight, interpreted, or just-in-time compiled programming language with first-class functions',
    },
  ];

  return (
    <>
      {items.map(item => (
        <React.Fragment key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.description}</p>
        </React.Fragment>
      ))}
    </>
  );
};

export default FragmentDemo;
