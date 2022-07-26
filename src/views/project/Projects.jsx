import React from 'react';
import { useParams } from 'react-router-dom';
import SnapScroll from '../../layouts/SnapScroll';
import {projectsList} from './projectsList';

import {
  Hero,
  Box2,
  Box3,
  Box4,
  Box5,
  Box6,
} from './components/ManyComponents';

const ProjectsOnly = () => {
  const { project } = useParams();
  const {
    title,
    description,
    imageSmall,
    imageLarge,
    development,
    problems,
    goals,
    descriptionUser
  } = projectsList[project];

  return (
    <>
      <Hero title={title} description={description} imageSmall={imageSmall} />
      <Box2 problems={problems} goals={goals} />
      <Box3 title={title} />
      <Box4 title={title} development={development} />
      <Box5 title={title} imageLarge={imageLarge} />
      {descriptionUser.length > 0 && <Box6 />}
    </>
  );
}

export default function Projects() {
  return (
    <SnapScroll>
      <ProjectsOnly />
    </SnapScroll>
  );
}
