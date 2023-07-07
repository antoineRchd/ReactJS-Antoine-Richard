import React from 'react';

const projects = [
  {
    title: 'SurfLand',
    image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/07/attachment_118434235-scaled-e1593791468915.jpg?auto=format&q=60&fit=max&w=930',
  },
  {
    title: 'Mount Climbing',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQu3jnJ1Udh011q4mgHiypu_ixvmTJIMBzgP9I2wPtgki0fTOf7gACH7BB0Wg6zN-lFmc&usqp=CAU',
  },
  {
    title: 'Lac Travel',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMjTcDqzrJC6l1XizDnrUVyX51F_uuDDvZip9y90EhBZ-wq-oM6-_HG1CwlDCYc9FTHNk&usqp=CAU',
  },
];

const ExperiencePro = () => {
  return (
    <div>
      <h3>Mes projets</h3>
      <div style={{ display: 'flex' }}>
        {projects.map((project, index) => (
          <div key={index} style={{ marginRight: '20px' }}>
            <img className='project-image'
              src={project.image}
              alt={project.title}
            />
            <p>{project.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperiencePro;
