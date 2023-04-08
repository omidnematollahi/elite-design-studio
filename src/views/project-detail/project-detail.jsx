import './project-detail.scss';

import { useParams } from 'react-router-dom';
import { PROJECT_LIST } from '@/constants/projects';
import { useState, useEffect, useRef } from 'react';

import ImageGallery from 'react-image-gallery';
import Footer from '@/components/footer/footer';
import useIntersection from '../../custom-hooks/useIntersection';

function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState(null);
  const [imageList, setImageList] = useState(null);
  const footerRef = useRef(null);
  const footerIsInViewport = useIntersection(footerRef);
  useEffect(() => {
    const { id } = params;
    const projectItem = PROJECT_LIST.find((item) => item.id == id);
    console.log(projectItem);
    const images = projectItem.images.map((item) => {
      return {
        original: item,
        thumbnail: item,
      };
    });
    setProject(projectItem);
    setImageList(images);
  }, []);
  console.log(params);
  return (
    <div className="project-detail">
      <h1>{project ? project.name : 'Project Detail'}</h1>
      {imageList ? (
        <ImageGallery
          items={imageList}
          thumbnailPosition="left"
          autoPlay={true}
          originalWidth="100%"
          loading={true}
          lazyLoad={true}
        />
      ) : (
        ''
      )}
      <div className="project-detail__footer" ref={footerRef}>
        <Footer toggle={footerIsInViewport}></Footer>
      </div>
    </div>
  );
}

export default ProjectDetail;
